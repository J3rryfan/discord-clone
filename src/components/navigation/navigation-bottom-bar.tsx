import Link from "next/link";
import { currentProfile } from "@/lib/current-profile";
import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { Bell, Home, MessageCircleMore } from "lucide-react";
import NavigationBottomAction from "./navigation-action-bottom";

export default async function NavigationBottomBar() {
  const profile = await currentProfile();

  if (!profile) {
    return redirect("/");
  }

  return (
    <div className=" flex items-center justify-center space-x-4 dark:bg-[#1E1F22] ">
      <Link
        href={"/"}
        className="flex flex-col items-center text-sm hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition p-2 rounded-md "
      >
        <Home className="h-4 w-4 mb-1" />
        Servers
      </Link>
      <Link
        href={"/"}
        className="flex flex-col items-center text-sm hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition p-2 rounded-md"
      >
        <MessageCircleMore className="h-4 w-4 mb-1" />
        Message
      </Link>
      <Link href={"/"}>
        <NavigationBottomAction />
      </Link>
      <Link
        href={"/"}
        className="flex flex-col items-center text-sm hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition p-2 rounded-md"
      >
        <Bell className="h-4 w-4 mb-1" />
        Notification
      </Link>
      <Link href={"/"}>
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "h-[48px] w-[48px]",
            },
          }}
        />
      </Link>
    </div>
  );
}
