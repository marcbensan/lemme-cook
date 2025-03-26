import SignUp from "@/components/sign-up";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function SignUpPage() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <SignUp />
      <BackgroundBeams className="absolute inset-0 z-0" />
    </div>
  );
}
