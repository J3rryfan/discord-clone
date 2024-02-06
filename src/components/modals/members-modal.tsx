"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useModal } from "@/hooks/use-modal-store";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Check, Copy, RefreshCcw } from "lucide-react";
import { useOrigin } from "@/hooks/use-origin";
import { useState } from "react";
import axios from "axios";

export default function MembersModal() {
  const { isOpen, onClose, type, data, onOpen } = useModal();
  const origin = useOrigin();

  const isModalOpen = isOpen && type === "members";
  const { server } = data;

  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const inviteUrl = `${origin}/invite/${server?.inviteCode}`;

  const onCopy = () => {
    navigator.clipboard.writeText(inviteUrl);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const onNew = async () => {
    try {
      setIsLoading(true);

      const response = await axios.patch(
        `/api/servers/${server?.id}/invite-code`
      );

      onOpen("invite", { server: response.data });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Dialog open={isModalOpen} onOpenChange={onClose}>
        <DialogContent className=" bg-white text-black p-0 overflow-hidden">
          <DialogHeader className=" pt-8 px-6">
            <DialogTitle className=" text-2xl text-center font-bold">
              Invite your Friends
            </DialogTitle>
            <DialogDescription className=" text-center text-zinc-500">
              Give your server a personality with a name and image. You can
              always change it later
            </DialogDescription>
          </DialogHeader>
          <div className="p-6">
            <Label className=" uppercase text-sm font-bold text-zinc-500 dark:text-secondary/70">
              Server Invite Link
            </Label>

            <div className=" flex items-center mt-2 gap-x-2">
              <Input
                disabled={isLoading}
                className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                value={inviteUrl}
              />
              <Button size="icon" onClick={onCopy} disabled={isLoading}>
                {copied ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </Button>
            </div>

            <Button
              disabled={isLoading}
              variant="link"
              size="sm"
              className=" text-sm text-zinc-500 mt-4"
              onClick={onNew}
            >
              Generate new invite link
              <RefreshCcw className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
