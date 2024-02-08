import NavigationBottomBar from "@/components/navigation/navigation-bottom-bar";
import NavigationSideBar from "@/components/navigation/navigation-side-bar";
import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="h-full flex flex-col">
        <div className=" hidden md:flex h-full w-[72px] z-30 fixed inset-y-0">
          <NavigationSideBar />
        </div>

        <div className="flex flex-col md:pl-[72px] flex-1">
          <main className="flex-1 overflow-y-auto">{children}</main>
          <NavigationBottomBar />
        </div>
      </div>
    </>
  );
}
