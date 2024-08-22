"use client";

import Actions from "@/components/actions";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { useAuth } from "@clerk/nextjs";
import { formatDistanceToNow } from "date-fns";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Footer from "./footer";
import Overlay from "./overlay";

interface BoardCardProps {
  key: string;
  id: string;
  title: string;
  imageUrl: string;
  authorId: string;
  authorName: string;
  createdAt: number;
  orgId: string;
  isFavorite: boolean;
}

const BoardCard = ({
  key,
  id,
  title,
  imageUrl,
  authorId,
  authorName,
  createdAt,
  orgId,
  isFavorite,
}: BoardCardProps) => {
  const { userId } = useAuth();
  const authorLabel = userId == authorId ? "You" : authorName;
  const createdAtLabel = formatDistanceToNow(createdAt, { addSuffix: true });

  const { mutate: onFavorite, pending: pendingFavorite } = useApiMutation(
    api.board.favorite
  );
  const { mutate: onUnfavorite, pending: pendingUnfavorite } = useApiMutation(
    api.board.unfavorite
  );

  const router = useRouter();

  const toggleFavorite: any = (e: any) => {
    e.stopPropagation();
    if (isFavorite) {
      onUnfavorite({ id }).catch(() => {
        toast.error("Failed to unfavorite, please try again later.");
      });
    } else {
      onFavorite({ id, orgId }).catch(() => {
        toast.error("Failed to favorite, please try again later.");
      });
    }
  };

  const onBoardClick = () => {
    router.push(`/board/${id}`);
  };

  return (
    <div className="cursor-pointer" onClick={onBoardClick}>
      <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden ">
        <div className="relative flex-1 bg-amber-50">
          <Image src={imageUrl} alt="doodle" fill className="object-fill" />
          <Overlay />
          <Actions id={id} title={title} side="right">
            <button className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-2 outline-none">
              <MoreHorizontal className="text-white opacity-75 hover:opacity-100 transition-opacity" />
            </button>
          </Actions>
        </div>
        <Footer
          title={title}
          createdAtLabel={createdAtLabel}
          isFavorite={isFavorite}
          authorLabel={authorLabel}
          onClick={toggleFavorite}
          disabled={pendingFavorite || pendingUnfavorite}
        ></Footer>
      </div>
    </div>
  );
};

export const SkeletonBoardCard = () => {
  return (
    <div className="group aspect-[100/127] rounded-lg overflow-hidden ">
      <Skeleton className="h-full w-full" />
    </div>
  );
};

export default BoardCard;
