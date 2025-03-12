"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

type AuthProps = {
  children: React.ReactNode;
};

const navItems = [
  { name: "Register", path: "/register" },
  { name: "Login", path: "/login" },
  { name: "Forgot Password", path: "/forgot-password" },
];

export default function AuthLayout({ children }: AuthProps) {
    const pathname = usePathname();

  return (
    <div className="auth-layout">
      {navItems.map((item) => {
        const isActive = pathname === item.path || (pathname.startsWith(item.path) && item.path !== "/");
        return (
          <Link className={isActive ? "font-bold mr-4" : "text-blue-400 mr-4"} key={item.name} href={item.path}>
            {item.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
