"use client";

import { useEffect, useState } from "react";
import CreateServerModal from "@/components/modals/create-server-modal";
import InviteServerModal from "../modals/invite-server-modal";

export default function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CreateServerModal />
      <InviteServerModal />
    </>
  );
}