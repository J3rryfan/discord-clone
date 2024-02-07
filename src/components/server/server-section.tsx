"use client";

import { ServerWithMembersWithProfiles } from "@/types";
import { ChannelType, MemberRole } from "@prisma/client";
import ActionTooltip from "@/components/action-tooltip";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { useModal } from "@/hooks/use-modal-store";

interface SeverSectionProps {
  label: string;
  role?: MemberRole;
  sectionType: "channels" | "members";
  channelType?: ChannelType;
  server?: ServerWithMembersWithProfiles;
}

export default function ServerSection({
  label,
  role,
  sectionType,
  channelType,
  server,
}: SeverSectionProps) {
  const { onOpen } = useModal();

  return (
    <div className=" flex items-center justify-between py-2">
      <p className=" text-sm uppercase font-semibold text-zinc-500 dark:text-zinc-400">
        {label}
      </p>
      {role !== MemberRole.GUEST && sectionType === "channels" && (
        <ActionTooltip label="Create Channel" side="top">
          <Button
            className="text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
            onClick={() => onOpen("createChannel")}
          >
            <Plus className="h-4 w-4" />
            <p>Why is the commit branch not working</p>
          </Button>
        </ActionTooltip>
      )}
    </div>
  );
}
