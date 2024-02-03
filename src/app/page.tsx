import { ModeToggle } from "@/components/model-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className=" ">
      <div>This is a protected Route</div>
      <ModeToggle />
    </div>
  );
}
