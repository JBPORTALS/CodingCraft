"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { db } from "@/db";
import { users } from "@/db/schema";
import { Loader2Icon } from "lucide-react";

export const SignupformSchema = z.object({
  username: z
    .string()
    .min(2, "More than 2 characters.")
    .max(50, "Less than 50 characters"),
  email: z.string().min(1, "Required!"),
  password: z.string().min(1, "Required!"),
});

export default function SignUpForm() {
  const form = useForm<z.infer<typeof SignupformSchema>>({
    resolver: zodResolver(SignupformSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof SignupformSchema>) {
    const response = await fetch("http://localhost:3000/api/auth", {
      method: "POST",
      body: JSON.stringify(values),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-2/3">
        <h2 className="text-4xl font-medium">Create Account</h2>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn123" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="shadcn@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          {form.formState.isSubmitting && (
            <Loader2Icon className="mr-2 animate-spin" />
          )}
          Submit
        </Button>
        <span className="mt-6">
          You already have an account?
          <Link href={"/auth/sign-in"}>
            <Button variant={"link"}>Get Signin</Button>
          </Link>
        </span>
      </form>
    </Form>
  );
}
