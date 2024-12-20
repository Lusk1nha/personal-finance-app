"use client";

import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Routes } from "@/types/router";

export const LoginZodSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Passwords must be at least 8 characters"),
});

export type LoginFormData = z.infer<typeof LoginZodSchema>;

export function LoginForm() {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(LoginZodSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: LoginFormData) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        className="max-w-[560px] w-full bg-appWhite p-400 flex flex-col gap-8 rounded-150 shadow-sm"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <h2 className="text-3xl text-appGrey font-bold">Login</h2>

        <fieldset className="flex flex-col gap-4">
          <FormField
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    id="email"
                    value={field.value ?? ""}
                  />
                </FormControl>

                <FormMessage {...field} />
              </FormItem>
            )}
          />

          <FormField
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    id="password"
                    value={field.value ?? ""}
                  />
                </FormControl>

                <FormMessage {...field} />
              </FormItem>
            )}
          />
        </fieldset>

        <div className="flex flex-col gap-8">
          <button
            type="submit"
            className="bg-appGrey hover:bg-appGrey-500 w-full text-sm font-bold text-appWhite h-14 rounded-100 transition-colors"
          >
            Login
          </button>

          <div className="w-full flex items-center justify-center">
            <p className="text-sm text-appGrey-500 flex gap-2">
              Need to create an account?
              <Link
                className="underline text-appGrey font-bold"
                href={Routes.SignUp}
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </form>
    </Form>
  );
}
