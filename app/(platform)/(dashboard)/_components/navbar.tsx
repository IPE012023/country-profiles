"use client"
import { logout } from "@/actions/logout";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";


export const Navbar = () => {
  const onClick = () => {
    logout();
  };
  return (
    <nav className="fixed z-50 top-0 px-4 w-full h-14 border-b shadow-sm bg-white flex items-center">
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex">
          <Logo />
        </div>
      </div>
      <div className="ml-auto flex items-center gap-x-2 cursor-pointer" >
      <Button variant="default" onClick={onClick}>
        Logout
      </Button>
      </div>
    </nav>
  );
};