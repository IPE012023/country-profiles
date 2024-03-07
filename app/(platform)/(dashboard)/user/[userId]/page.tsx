"use client";

import { logout } from "@/actions/logout";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const UserIdPage = () => {
  const onClick = () => {
    logout();
  };

  return (
    <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-400 to-slate-800">
      <div className="mt-8 flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0">
        <h1 className="mb-3 font-bold text-5xl text-gray-900">
          Country Overview
        </h1>
      </div>
      <Button size="sm" asChild>
          <Link href="/countries/south-korea">South Korea</Link>
        </Button>
    </div>
  );
};

export default UserIdPage;
