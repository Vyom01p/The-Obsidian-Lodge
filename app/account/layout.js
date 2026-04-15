import SideNavigation from "../_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-16">
      <div className="border-r border-primary-900 pr-4">
        <SideNavigation />
      </div>

      <div className="py-4 overflow-y-auto">{children}</div>
    </div>
  );
}
