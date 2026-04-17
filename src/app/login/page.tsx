"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { trpc } from "@/shared/trpc";
import { LoginForm } from "@/components/forms/LoginForm";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = trpc.auth.login.useMutation({
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
    login.mutate({ email, password });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950">
      <LoginForm
        onSubmit={(data) => {
          setError("");
          login.mutate(data);
        }}

        loading={login.isPending}
        error={error}
        
      />
    </div>
  );
}
