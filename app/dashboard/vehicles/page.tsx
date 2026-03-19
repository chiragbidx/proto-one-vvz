import { listVehicles } from "./actions";
import dynamic from "next/dynamic";

const VehiclesClient = dynamic(() => import("./client"), { ssr: false });

export default async function VehiclesPage() {
  const vehicles = await listVehicles();

  return <VehiclesClient vehicles={vehicles ?? []} />;
}