"use client";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Smile } from "lucide-react";


interface EmojiPickerProps {
  onChange: (value: string) => void;
}

export default function EmojiPicker({onChange}: EmojiPickerProps) {
  return (
    <Popover>
      <PopoverTrigger>
        <Smile className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition"/>
      </PopoverTrigger>
    </Popover>
  )
}