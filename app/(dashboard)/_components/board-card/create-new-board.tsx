"use client";

import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { toast } from "sonner";

interface CreateNewBoardProps {
  orgId: string;
  disabled?: boolean;
}

const CreateNewBoard = ({ orgId, disabled }: CreateNewBoardProps) => {
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    mutate({
      orgId,
      title: "Untitled",
    })
      .then(() => {
        toast("New Board created successfully!");
      })
      .catch(() => {
        toast("Failed to create a board, please try again later.");
      });
  };

  return (
    <button
      disabled={disabled || pending}
      onClick={onClick}
      className={cn(
        "col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6 ",
        (disabled || pending) &&
          "opacity-75 hover:bg-blue-600 cursor-not-allowed "
      )}
    >
      <div />
      <Plus className="h-12 w-12 text-white stroke-1" />
      <div className="text-sm text-white font-light">New board</div>
    </button>
  );
};

export default CreateNewBoard;
