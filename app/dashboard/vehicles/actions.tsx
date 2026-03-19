"use server";

import { z } from "zod";
import { db } from "@/lib/db/client";
import { vehicles } from "@/lib/db/schema";
import { eq, and } from "drizzle-orm";
import { getAuthSession } from "@/lib/auth/session";

// Validation schema
export const vehicleInputSchema = z.object({
  name: z.string().min(2).max(60),
  type: z.string().min(2).max(30),
  plateNumber: z.string().min(2).max(20),
  status: z.enum(["in-service", "out-of-service", "maintenance"]),
});

export type VehicleInput = z.infer<typeof vehicleInputSchema>;

// Action: Create vehicle
export async function createVehicle(data: VehicleInput) {
  const session = await getAuthSession();
  if (!session) throw new Error("Unauthorized");

  // Find team for the user
  const teamId = await db.query.teamMembers.findFirst({
    where: (tm) => eq(tm.userId, session.userId),
    columns: { teamId: true }
  }).then(r => r?.teamId);

  if (!teamId) throw new Error("Team not found.");

  const toInsert = {
    ...data,
    teamId,
    archived: false,
  };

  const inserted = await db.insert(vehicles).values(toInsert).returning();
  return inserted[0];
}

// Action: List vehicles (active only, session tenant)
export async function listVehicles() {
  const session = await getAuthSession();
  if (!session) throw new Error("Unauthorized");

  // Find team for the user
  const teamId = await db.query.teamMembers.findFirst({
    where: (tm) => eq(tm.userId, session.userId),
    columns: { teamId: true }
  }).then(r => r?.teamId);

  if (!teamId) throw new Error("Team not found.");

  return db
    .select()
    .from(vehicles)
    .where(and(eq(vehicles.teamId, teamId), eq(vehicles.archived, false)))
    .orderBy(vehicles.createdAt);
}

// Action: Get vehicle by ID (for edit)
export async function getVehicle(vehicleId: string) {
  const session = await getAuthSession();
  if (!session) throw new Error("Unauthorized");

  // Find team for the user
  const teamId = await db.query.teamMembers.findFirst({
    where: (tm) => eq(tm.userId, session.userId),
    columns: { teamId: true }
  }).then(r => r?.teamId);

  if (!teamId) throw new Error("Team not found.");

  const [vehicle] = await db
    .select()
    .from(vehicles)
    .where(and(eq(vehicles.id, vehicleId), eq(vehicles.teamId, teamId), eq(vehicles.archived, false)))
    .limit(1);

  if (!vehicle) throw new Error("Vehicle not found");
  return vehicle;
}

// Action: Update vehicle
export async function updateVehicle(vehicleId: string, data: VehicleInput) {
  const session = await getAuthSession();
  if (!session) throw new Error("Unauthorized");

  // Find team
  const teamId = await db.query.teamMembers.findFirst({
    where: (tm) => eq(tm.userId, session.userId),
    columns: { teamId: true }
  }).then(r => r?.teamId);

  if (!teamId) throw new Error("Team not found.");

  await db
    .update(vehicles)
    .set({
      ...data,
      updatedAt: new Date(),
    })
    .where(and(eq(vehicles.id, vehicleId), eq(vehicles.teamId, teamId), eq(vehicles.archived, false)));

  return true;
}

// Action: Archive (soft delete) a vehicle
export async function archiveVehicle(vehicleId: string) {
  const session = await getAuthSession();
  if (!session) throw new Error("Unauthorized");

  // Find team
  const teamId = await db.query.teamMembers.findFirst({
    where: (tm) => eq(tm.userId, session.userId),
    columns: { teamId: true }
  }).then(r => r?.teamId);

  if (!teamId) throw new Error("Team not found.");

  await db
    .update(vehicles)
    .set({
      archived: true,
      updatedAt: new Date(),
    })
    .where(and(eq(vehicles.id, vehicleId), eq(vehicles.teamId, teamId), eq(vehicles.archived, false)));

  return true;
}