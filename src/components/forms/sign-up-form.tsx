"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import Link from "next/link";
import { Routes } from "@/types/router";

export const SignUpZodSchema = z.object({
  name: z.string().min(2, "Names must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Passwords must be at least 8 characters"),
});

export type SignUpFormData = z.infer<typeof SignUpZodSchema>;

export function SignUpForm() {
  const form = useForm<SignUpFormData>({
    resolver: zodResolver(SignUpZodSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: SignUpFormData) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        className="max-w-[560px] w-full bg-appWhite p-400 flex flex-col gap-8 rounded-150 shadow-sm"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <h2 className="text-3xl text-appGrey font-bold">Sign Up</h2>

        <fieldset className="flex flex-col gap-4">
          <FormField
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="email">Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    id="name"
                    value={field.value ?? ""}
                  />
                </FormControl>

                <FormMessage {...field} />
              </FormItem>
            )}
          />

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
                <FormLabel htmlFor="password">Create Password</FormLabel>
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
            Create Account
          </button>

          <div className="w-full flex items-center justify-center">
            <p className="text-sm text-appGrey-500 flex gap-2">
              Already have an account?
              <Link
                className="underline text-appGrey font-bold"
                href={Routes.Login}
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </form>
    </Form>
  );
}
