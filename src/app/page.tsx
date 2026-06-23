"use client";

import { useQueryClient } from "@tanstack/react-query";

export default function Home() {
  const queryClient = useQueryClient();

  const user = queryClient.getQueryData<{
    id: string;
    name: string;
    email: string;
  }>(["auth", "user"]);

  console.log("user cache: ", user);

  return <div>{user?.name}</div>;
}
