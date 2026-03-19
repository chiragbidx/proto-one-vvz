"use client";

import { useTransition } from "react";
import { createVehicle } from "./../actions";
import { vehicleInputSchema } from "../validation";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import * as React from "react";

export default function AddVehiclePage() {
  const [formState, setFormState] = useTransition();
  const router = useRouter();
  const [error, setError] = React.useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name") as string,
      type: formData.get("type") as string,
      plateNumber: formData.get("plateNumber") as string,
      status: formData.get("status") as string,
    };
    const parse = vehicleInputSchema.safeParse(data);

    if (!parse.success) {
      setError("Invalid data. Please check the form fields.");
      return;
    }

    setFormState(async () => {
      try {
        await createVehicle(parse.data);
        router.push("/dashboard/vehicles");
      } catch (err: any) {
        setError(err.message || "Failed to create vehicle");
      }
    });
  }

  return (
    <section className="mx-auto max-w-xl py-10">
      <h1 className="text-2xl font-bold tracking-tight mb-6">Add Vehicle</h1>
      <Form>
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormField
            name="name"
            rules={{
              required: "Name is required.",
              minLength: { value: 2, message: "Name must be at least 2 characters." },
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Vehicle name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="type"
            rules={{ required: "Type is required." }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="e.g., Truck, Van, SUV" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="plateNumber"
            rules={{ required: "Plate number is required." }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Plate Number</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="ABC1234" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="status"
            defaultValue="in-service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <FormControl>
                  <select {...field} className="input px-3 py-2 rounded border">
                    <option value="in-service">In Service</option>
                    <option value="out-of-service">Out of Service</option>
                    <option value="maintenance">Maintenance</option>
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {error && (
            <div className="text-destructive font-medium text-sm">{error}</div>
          )}
          <Button type="submit" size="lg" className="w-full">Add Vehicle</Button>
        </form>
      </Form>
    </section>
  );
}