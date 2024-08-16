import Hint from "@/components/hint";
import { cn } from "@/lib/utils";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import Image from "next/image";

interface OrgElementProps {
  id: string;
  name: string;
  imageUrl: string;
}

const OrgElement = ({ id, name, imageUrl }: OrgElementProps) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id == id;

  const onOrgElementClick = () => {
    if (!setActive) return null;
    setActive({ organization: id });
  };

  return (
    <div className="aspect-square relative">
      <Hint label={name} side="right" align="center" sideOffset={52}>
        <Image
          alt={name}
          src={imageUrl}
          onClick={onOrgElementClick}
          fill
          className={cn(
            "rounded-md cursor-pointer opacity-75 hover:opacity-100 transition",
            isActive && "opacity-100"
          )}
        />
      </Hint>
    </div>
  );
};

export default OrgElement;
