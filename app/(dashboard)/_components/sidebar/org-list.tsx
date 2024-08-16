"use client";

import { useOrganizationList } from "@clerk/nextjs";
import OrgElement from "./org-element";

const OrgList = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: { infinite: true },
  });

  if (!userMemberships?.data?.length) {
    return null;
  }
  return (
    <ul className="space-y-4">
      {userMemberships?.data?.map((member) => {
        return (
          //   <div
          //     className="truncate overflow-hidden whitespace-nowrap"
          //     key={member.organization.id}
          //   >
          //     {member.organization.name}
          //   </div>

          <OrgElement
            key={member.organization.id}
            name={member.organization.name}
            id={member.organization.id}
            imageUrl={member.organization.imageUrl}
          />
        );
      })}
    </ul>
  );
};
export default OrgList;
