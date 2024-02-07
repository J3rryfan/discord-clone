import Link from "next/link";
import NavigationAction from "./navigation-action";
import { currentProfile } from "@/lib/current-profile";
import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

export default async function NavigationBottomBar() {
  const profile = await currentProfile();

  if (!profile) {
    return redirect("/");
  }

  return (
    <div className=" flex items-centers justify-between dark:bg-[#1E1F22]">
      <Link href={"/"}>Servers</Link>
      <Link href={"/"}>Message</Link>
      <Link href={"/"}>
        <NavigationAction />
      </Link>
      <Link href={"/"}>Notification</Link>
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
