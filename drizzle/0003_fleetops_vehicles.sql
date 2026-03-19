CREATE TABLE "vehicles" (
    "id" text PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
    "team_id" text NOT NULL REFERENCES "teams"("id") ON DELETE CASCADE,
    "name" text NOT NULL,
    "type" text NOT NULL,
    "plate_number" text NOT NULL,
    "status" text NOT NULL DEFAULT 'in-service',
    "archived" boolean NOT NULL DEFAULT false,
    "created_at" timestamp with time zone NOT NULL DEFAULT now(),
    "updated_at" timestamp with time zone NOT NULL DEFAULT now()
);