"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { useOrganization } from "@clerk/nextjs";
import { toast } from "sonner";

const EmptyBoards = () => {
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    if (!organization) return;
    mutate({ orgId: organization.id, title: "Untitled" })
      .then(() => {
        toast.success("Board created.");
      })
      .catch(() => {
        toast.error("Failed to create a board.");
      });
  };
  return (
    <div className="h-full flex flex-col items-center justify-center">
      {/* <Image src="/empty-search.svg" height={140} width={140} alt="empty" /> */}
      <h2 className="text-2xl font-semibold mt-6"> Create your first board!</h2>
      <div className="text-muted-foreground text-sm mt-2 ">
        Start by creating a board for your organization
      </div>

      <div className="mt-6">
        <Button disabled={pending} onClick={onClick} size="lg">
          Create board
        </Button>
      </div>
    </div>
  );
};

export default EmptyBoards;
