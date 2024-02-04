import { initialProfile } from "@/lib/db";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

export default async function SetUpPage() {
  const profile = await initialProfile();

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) {
    return redirect(`/server/${server.id}`);
  }

  return <div>Create a server</div>;
}
