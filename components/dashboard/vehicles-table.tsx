"use client";

import { useTransition } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { VehicleInput } from "@/app/dashboard/vehicles/actions";

type Vehicle = {
  id: string;
  name: string;
  type: string;
  plateNumber: string;
  status: string;
  updatedAt: string;
};

type VehiclesTableProps = {
  vehicles: Vehicle[];
  onArchive?: (id: string) => Promise<void>;
};

export function VehiclesTable({ vehicles, onArchive }: VehiclesTableProps) {
  let [isPending, startTransition] = useTransition();

  if (!vehicles.length) {
    return (
      <div className="py-14">
        <p className="text-center text-muted-foreground">
          No vehicles yet. Get started by adding your first vehicle.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto">
      <table className="table-auto w-full text-left border rounded-md">
        <thead>
          <tr className="bg-muted">
            <th className="p-3 font-semibold">Name</th>
            <th className="p-3 font-semibold">Type</th>
            <th className="p-3 font-semibold">Plate Number</th>
            <th className="p-3 font-semibold">Status</th>
            <th className="p-3 font-semibold text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.id} className="border-b">
              <td className="p-3">{vehicle.name}</td>
              <td className="p-3">{vehicle.type}</td>
              <td className="p-3">{vehicle.plateNumber}</td>
              <td className="p-3">
                <span className={
                  vehicle.status === "in-service" ? "text-emerald-600 font-medium" :
                  vehicle.status === "maintenance" ? "text-yellow-600 font-medium" :
                  "text-destructive font-medium"
                }>
                  {vehicle.status.replace("-", " ")}
                </span>
              </td>
              <td className="p-3 text-right space-x-2">
                <Button asChild size="sm" variant="outline">
                  <Link href={`/dashboard/vehicles/${vehicle.id}/edit`}>
                    Edit
                  </Link>
                </Button>
                {onArchive && (
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-destructive"
                    disabled={isPending}
                    onClick={() => startTransition(() => onArchive(vehicle.id))}
                  >
                    Archive
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}