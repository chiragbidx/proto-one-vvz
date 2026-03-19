import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AssignmentsPage() {
  return (
    <section className="mx-auto max-w-2xl flex flex-col items-center justify-center py-20 text-center gap-6">
      <h1 className="text-3xl font-bold tracking-tight">Assignments</h1>
      <p className="text-muted-foreground">
        No assignments created yet.
      </p>
      <Button asChild size="lg" className="mt-2">
        <Link href="#">
          Create Assignment
        </Link>
      </Button>
    </section>
  );
}