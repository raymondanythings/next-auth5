"use client";

import { useRouter } from "next/navigation";
import { PropsWithChildren, ReactNode } from "react";

interface LoginButtonProps {
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({
  asChild,
  children,
  mode = "redirect",
}: PropsWithChildren<LoginButtonProps>) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return <span>TODO: Implement modal</span>;
  }

  return (
    <span onClick={handleClick} className="cursor-pointer">
      {children}
    </span>
  );
};
