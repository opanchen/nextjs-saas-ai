import Link from "next/link";

import { Button } from "@/components/ui/button";

const LandingPage = () => {
  return (
    <div>
      Landing Page (Unprotected)
      <div className="flex items-center gap-2">
        <Link href="/sign-in">
          <Button>Login</Button>
        </Link>

        <Link href="/sign-up">
          <Button>Register</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
