import { z } from "zod";

export const vehicleInputSchema = z.object({
  name: z.string().min(2).max(60),
  type: z.string().min(2).max(30),
  plateNumber: z.string().min(2).max(20),
  status: z.enum(["in-service", "out-of-service", "maintenance"]),
});

export type VehicleInput = z.infer<typeof vehicleInputSchema>;