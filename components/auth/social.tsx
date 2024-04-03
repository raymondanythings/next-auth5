"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
const Social = () => {
  const [isPending, startTransition] = useTransition();
  const handleClick = (provider: "google" | "github") => () => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
      redirect: true,
    });
  };
  return (
    <div className="flex items-center w-full gap-x-2 ">
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={handleClick("google")}
      >
        <FcGoogle className="w-5 h-5" />
      </Button>
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={handleClick("github")}
      >
        <FaGithub className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default Social;
