"use client";

import { signInUser } from "@/app/actions/authentication";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useActionState } from "react";

export default function SignIn() {
  const [error, action, isLoading] = useActionState(signInUser, "");

  return (
    <form className="z-10" action={action}>
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">LemmeCook</CardTitle>
          <CardDescription>
            Sign in by entering your credentials to access our many recipes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label className="text-lg" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                placeholder="ex. john@email.com"
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label className="text-lg" htmlFor="password">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                required
                type="password"
                placeholder="Enter your Password"
              />
            </div>
            {error?.message && <p className="text-red-500">{error.message}</p>}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col w-full space-y-4">
          <Button type="submit" className="w-full" disabled={isLoading}>
            Sign In
          </Button>
          <CardDescription>Don't have an account?</CardDescription>
          <Link href="/signup" className="w-full">
            <Button variant="outline" className="w-full">
              Sign Up
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </form>
  );
}
