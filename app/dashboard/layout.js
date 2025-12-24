import { redirect } from "next/navigation";
import { auth } from "@/libs/auth";
import config from "@/config";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";

// This is a server-side component to ensure the user is logged in AND has paid.
// If not logged in, redirect to login page.
// If logged in but hasn't paid, redirect to pricing.
export default async function LayoutPrivate({ children }) {
  const session = await auth();

  if (!session) {
    redirect(config.auth.loginUrl);
  }

  // Check if user has paid
  await connectMongo();
  const user = await User.findById(session.user.id);

  if (!user?.hasAccess) {
    redirect("/#pricing");
  }

  return <>{children}</>;
}
