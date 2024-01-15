import { Separator } from "@/components/ui/separator";

import { Features } from "./features";
import { Logo, LogoSkeleton } from "./logo";
import { Toggle, ToggleSkeleton } from "./toggle";
import { Wrapper } from "./wrapper";
import { FeatureItemSkeleton } from "./feature-item";

const Sidebar = async () => {
  return (
    <Wrapper>
      <Logo />
      <hr className="separator" />
      <Toggle />
      <div className="space-y-4 pt-4 lg:pt-0">
        <Features />
      </div>
    </Wrapper>
  );
};
export default Sidebar;

export const SidebarSkeleton = () => {
  return (
    <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background/65 z-50">
      <LogoSkeleton />
      <hr className="separator" />
      <ToggleSkeleton />
      <FeatureItemSkeleton />
    </aside>
  );
};
