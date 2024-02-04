import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

export default async function NavigationSideBar() {
  const profile = await currentProfile();

  if (!profile) {
    return redirect("/");
  }

  const server = await db.server.findMany({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  return (
    <div className=" flex flex-col items-center h-full w-full space-y-4 py-3 text-primary dark:bg-[#1E1F22]">
      Navigation Sidebar
    </div>
  );
}
