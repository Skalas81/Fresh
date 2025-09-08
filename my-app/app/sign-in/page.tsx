"use client";

import { SignInForm, SignInFormValues } from "../../components/sign-in-form";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUpPage() {
  const router = useRouter();
  const [isPending, setPending] = useState(false);

  const handleSubmit = (values: SignInFormValues) => {
    authClient.signIn.email(
      {
        email: values.email,
        password: values.password,
      },
      {
        onRequest: () => {
          setPending(true);
        },
        onResponse: () => {
          setPending(false);
        },
        onSuccess: () => {
          router.push("/dashboard");
        },
        onError: ({ error }) => {
          alert(error.message);
        }
      }
    );
  };

  return (
    <main className="flex w-full items-center min-h-screen justify-center">
      <SignInForm onSubmit={handleSubmit} isPending={isPending} />
    </main>
  );
}
