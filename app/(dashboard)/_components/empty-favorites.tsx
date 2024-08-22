"use client";

const EmptyFavorites = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      {/* <Image src="/empty-search.svg" height={140} width={140} alt="empty" /> */}
      <h2 className="text-2xl font-semibold mt-6">No favorites found!</h2>
      <div className="text-muted-foreground text-sm mt-2 ">
        Star some board you like!
      </div>
    </div>
  );
};

export default EmptyFavorites;
