"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/store/use-sidebar";
import { Skeleton } from "@/components/ui/skeleton";

interface FeatureItemProps {
  label: string;
  icon: LucideIcon;
  href: string;
}

export const FeatureItem = ({ label, icon: Icon, href }: FeatureItemProps) => {
  const pathname = usePathname();

  const { collapsed } = useSidebar((state) => state);

  const isActive = pathname === href;

  return (
    <Button
      asChild
      variant="ghost"
      className={cn(
        "w-full h-12",
        collapsed ? "justify-center" : "justify-start",
        isActive && "bg-accent"
      )}
    >
      <Link href={href}>
        <div
          className={cn(
            "flex items-center w-full gap-x-4",
            collapsed && "justify-center"
          )}
        >
          <Icon className={cn("h-4 w-4", collapsed ? "mr-0" : "mr-2")} />
          {!collapsed && <p className="truncate">{label}</p>}
        </div>
      </Link>
    </Button>
  );
};

export const FeatureItemSkeleton = () => {
  return (
    <li className="flex items-center gap-x-4 px-3 py-2">
      <Skeleton className="min-h-[32px] min-w-[32px] rounded-full" />
      <div className="flex-1">
        <Skeleton className="h-6" />
      </div>
    </li>
  );
};
