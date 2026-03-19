"use client";

type DashboardContentProps = {
  greeting: string;
  firstName: string;
  headerTitle?: string;
  headerSubtitle?: string;
};

export function DashboardContent({
  greeting,
  firstName,
  headerTitle = "Welcome to FleetOps",
  headerSubtitle = "Your centralized hub for logistics and vehicle management.",
}: DashboardContentProps) {
  return (
    <section className="text-center max-w-2xl mx-auto py-20 flex flex-col items-center gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{headerTitle}</h1>
        <p className="mt-2 text-muted-foreground">{headerSubtitle}</p>
      </div>
      <div>
        <p className="text-lg font-medium">{greeting}, {firstName}!</p>
        <p className="text-muted-foreground mt-2">
          Monitor your fleet and manage day-to-day logistics from here.
        </p>
      </div>
      <div className="mt-10 text-sm opacity-60">Powered by FleetOps</div>
    </section>
  );
}