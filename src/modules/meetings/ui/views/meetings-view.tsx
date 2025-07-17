"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";

import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";

export const MeetingsView = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.meetings.getMany.queryOptions({}));

  return ( 
    <div className="flex-1 pb-4 px-4 md:px-8 flex flex-col gap-y-4">
      {JSON.stringify(data, null, 2)}
    </div>
   );
};

export const MeetingsViewLoading = () => {
  return (
    <LoadingState 
      title="Loading Meetings" 
      description="This may take a few seconds"
    />
  )
}

export const MeetingsViewError = () => {
  return (
    <ErrorState 
      title="Error Loading Meetings"
      description="Something went wrong"
    />
  )
}
