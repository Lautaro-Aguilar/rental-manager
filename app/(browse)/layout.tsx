import { Suspense } from "react";

import Sidebar, { SidebarSkeleton } from "./_components/sidebar";
import { Container } from "./_components/container";

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
