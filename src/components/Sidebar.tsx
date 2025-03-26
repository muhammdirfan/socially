
import { currentUser } from "@clerk/nextjs/server";
import React from "react";
import UnAuthenticatedSidebar from "./UnAuthenticatedSidebar";
import { getUserByClerkId } from "@/actions/user.action";
import AuthenticatedSidebar from "./AuthenticatedSidebar";

const Sidebar = async () => {
  const authUser = await currentUser();
  if (!authUser) return <UnAuthenticatedSidebar />;

  const user = await getUserByClerkId(authUser.id);
  if (!user) return null;

  return <AuthenticatedSidebar user={user} />
};

export default Sidebar;

