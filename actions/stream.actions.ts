"use server";

import { currentUser } from "@clerk/nextjs/server";



export const tokenProvider = async () => {
  const user = await currentUser();

  if (!user) throw new Error("User is not authenticated!");



};
