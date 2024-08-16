"use client";
import CreateNewOrgButton from "./create-new-org-button";
import OrgList from "./org-list";

const Sidebar = () => {
  return (
    <aside className="fixed z-[1] left-0 bg-blue-950 h-full w-[60px] flex p-3 flex-col gap-y-4 text-white">
      <OrgList />
      <CreateNewOrgButton />
    </aside>
  );
};

export default Sidebar;
