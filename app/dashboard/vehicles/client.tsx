"use client";

import { useTransition, useState } from "react";
import { VehiclesTable } from "@/components/dashboard/vehicles-table";
import { archiveVehicle } from "./actions";

type Vehicle = {
  id: string;
  name: string;
  type: string;
  plateNumber: string;
  status: string;
  updatedAt: string;
};

type VehiclesClientProps = {
  vehicles: Vehicle[];
};

export default function VehiclesClient({ vehicles: initialVehicles }: VehiclesClientProps) {
  const [vehicles, setVehicles] = useState(initialVehicles);
  let [isPending, startTransition] = useTransition();

  const handleArchive = async (id: string) => {
    await archiveVehicle(id);
    setVehicles((curr) => curr.filter((v) => v.id !== id));
  };

  return (
    <div>
      <div className="flex items-center justify-between pb-6">
        <h1 className="text-3xl font-bold tracking-tight">Vehicles</h1>
        <a href="/dashboard/vehicles/new">
          <span>
            <button
              className="inline-flex items-center px-4 py-2 text-sm font-medium bg-primary text-white rounded-md shadow hover:bg-primary/90"
              disabled={isPending}
            >
              Add Vehicle
            </button>
          </span>
        </a>
      </div>
      <VehiclesTable vehicles={vehicles} onArchive={handleArchive} />
    </div>
  );
}