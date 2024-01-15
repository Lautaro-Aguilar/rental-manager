import { Gauge, CalendarDays, CheckSquare, Home, Settings } from "lucide-react";

export const features = [
  {
    id: 1,
    label: "Dashboard",
    icon: Gauge,
    href: "/dashboard/1",
  },
  {
    id: 2,
    label: "Calendar",
    icon: CalendarDays,
    href: "/calendar",
  },
  {
    id: 3,
    label: "Tasks",
    icon: CheckSquare,
    href: "/tasks",
  },
  {
    id: 4,
    label: "Houses",
    icon: Home,
    href: "/houses",
  },
  {
    id: 5,
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];
