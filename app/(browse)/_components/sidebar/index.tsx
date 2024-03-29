import { Features } from "./features";
import { Logo } from "./logo";
import { Toggle, ToggleSkeleton } from "./toggle";
import { Wrapper } from "./wrapper";

const Sidebar = async () => {
  return (
    <Wrapper>
      <Logo />
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
    <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50">
      <ToggleSkeleton />
    </aside>
  );
};
