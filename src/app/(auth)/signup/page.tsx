import { redirect } from "next/navigation";

import { Signup } from "./signup";
import { Paths } from "@/lib/constants";
import { validateRequest } from "@/lib/auth/validate-request";

export const metadata = {
  title: "Sign Up",
  description: "Signup Page",
};

export default async function SignupPage() {
  const { user } = await validateRequest();

  if (user) redirect(Paths.Dashboard);

  return <Signup />;
}
