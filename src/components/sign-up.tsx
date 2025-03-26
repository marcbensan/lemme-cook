"use client";

import { createUser } from "@/app/actions/authentication";
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
import { useActionState } from "react";

export default function SignUp() {
  const [error, action, isLoading] = useActionState(createUser, "");
  return (
    <form action={action} className="z-10">
      <Card className="w-[450px] px-4">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Create your Account
          </CardTitle>
          <CardDescription>
            Enter your credentials to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label className="text-lg" htmlFor="username">
                Username *
              </Label>
              <Input
                id="username"
                name="username"
                placeholder="Enter your Username"
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label className="text-lg" htmlFor="email">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your Email"
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label className="text-lg" htmlFor="re-email">
                Re-Enter your Email *
              </Label>
              <Input
                id="re-email"
                type="email"
                placeholder="Re-enter your Email"
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label className="text-lg" htmlFor="password">
                Password *
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your Password"
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label className="text-lg" htmlFor="re-password">
                Re-Enter your Password *
              </Label>
              <Input
                id="re-password"
                type="password"
                placeholder="Re-enter your Password"
                required
              />
              <Input
                id="role"
                name="role"
                defaultValue="user"
                className="invisible hidden"
              />
            </div>
            {error?.message && <p className="text-red-500">{error.message}</p>}
          </div>
        </CardContent>
        <CardFooter className="w-full ">
          <Button
            type="submit"
            variant="default"
            className="w-full"
            disabled={isLoading}
          >
            Create an Account
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
