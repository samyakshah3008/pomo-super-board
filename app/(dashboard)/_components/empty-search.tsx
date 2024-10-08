"use client";

const EmptySearch = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      {/* <Image src="/empty-search.svg" height={140} width={140} alt="empty" /> */}
      <h2 className="text-2xl font-semibold mt-6">No results found!</h2>
      <div className="text-muted-foreground text-sm mt-2 ">
        Try searching for something else
      </div>
    </div>
  );
};

export default EmptySearch;
