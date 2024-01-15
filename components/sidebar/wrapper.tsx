"use client";

import { useIsClient } from "usehooks-ts";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";

import { ToggleSkeleton } from "./toggle";
import { LogoSkeleton } from "./logo";
import { FeaturesSkeleton } from "./features";

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  const isClient = useIsClient();
  const { collapsed } = useSidebar((state) => state);

  if (!isClient) {
    return (
      <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background/65 z-50 py-8">
        <LogoSkeleton />
        <hr className="separator" />
        <ToggleSkeleton />
        <FeaturesSkeleton />
      </aside>
    );
  }

  return (
    <aside
      className={cn(
        "fixed left-0 flex flex-col w-60 h-full bg-background/65 z-50 py-8",
        collapsed && "w-[70px]"
      )}
    >
      {children}
    </aside>
  );
};
