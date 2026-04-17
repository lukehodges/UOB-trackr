"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { trpc } from "@/shared/trpc";
import { RegisterForm } from "@/components/forms/RegisterForm";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const register = trpc.auth.register.useMutation({
    onSuccess(data) {
      localStorage.setItem("token", data.token);
      router.push("/");
    },
    onError(err) {
      setError(err.message);
    },
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    register.mutate({ email, password, name });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950">
      <RegisterForm
        onSubmit={(data) => {
        setError("");

        if (data.password.length < 8) {
          setError("Password must be at least 8 characters");
          return;
        }

        register.mutate(data);
      }}

      loading={register.isPending}
      error={error}
      />
    </div>
  );
}
