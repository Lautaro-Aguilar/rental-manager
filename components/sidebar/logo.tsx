"use client";
import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";
import { Skeleton } from "@/components/ui/skeleton";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  const { collapsed } = useSidebar((state) => state);
  return (
    <Link href="/">
      <div className="flex items-center gap-x-1 hover:opacity-75 justify-center transition">
        <div className="p-1 shrink">
          <Image
            src="/logo.svg"
            alt="Place4Stream Logo"
            height="52"
            width="52"
          />
        </div>
        <div
          className={cn(
            "hidden lg:block",
            font.className,
            collapsed && "hidden lg:hidden"
          )}
        >
          <p className="text-lg font-semibold">Rental Manager</p>
          <p className="text-xs text-muted-foreground">
            {/* TODO: ADD CURRENT ROUTE */}
          </p>
        </div>
      </div>
    </Link>
  );
};

export const LogoSkeleton = () => {
  return (
    <div className="p-1 flex items-center justify-center w-full gap-2">
      <Skeleton className="h-[48px] w-[48px] rounded-full" />
      <Skeleton className="w-[146px] hidden lg:block h-7" />
    </div>
  );
};
