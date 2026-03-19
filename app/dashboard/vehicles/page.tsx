import { listVehicles } from "./actions";
import VehiclesClient from "./client";

export default async function VehiclesPage() {
  const vehicles = await listVehicles();
  return <VehiclesClient vehicles={vehicles ?? []} />;
}