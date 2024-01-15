import { Suspense } from "react";

import { Container } from "@/components/container";
import Sidebar, { SidebarSkeleton } from "@/components/sidebar";

export const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex h-full">
        <Suspense fallback={<SidebarSkeleton />}>
          <Sidebar />
        </Suspense>
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default BrowseLayout;
