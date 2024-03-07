import { CircleDashedIcon, HomeIcon, UserIcon } from "lucide-react";
import NavItem from "./nav-item";

export default function Sidebar() {
  return (
    <div className="h-full w-full flex flex-col gap-5 col-span-2 border-r p-4">
      <CircleDashedIcon className="h-8 w-8" />
      <section className="space-y-3">
        <NavItem isActive className="w-full">
          <HomeIcon className="mr-2" />
          Home
        </NavItem>
        <NavItem className="w-full">
          <UserIcon className="mr-2" />
          Profile
        </NavItem>
      </section>
    </div>
  );
}
