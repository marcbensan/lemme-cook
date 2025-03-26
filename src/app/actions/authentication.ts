"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signInUser(previousState: string, formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  console.log(JSON.stringify({ email, password }));

  const res = await fetch(`${process.env.API_URL}/api/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    return data;
  }

  const cookie = await cookies();
  cookie.set("accessToken", data.accessToken);
  cookie.set("refreshToken", data.refreshToken);

  redirect("/");
}

export async function createUser(previousState: string, formData: FormData) {
  console.log(formData);
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  const role = formData.get("role");

  console.log(JSON.stringify({ username, email, password, role }));

  const res = await fetch(`${process.env.API_URL}/api/user/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password, role }),
  });

  const data = await res.json();

  if (!res.ok) {
    return data;
  }

  redirect("/signin");
}
