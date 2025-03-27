import SignIn from "@/components/sign-in";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function SignInPage() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <SignIn />
      <BackgroundBeams className="absolute inset-0 z-0" />
    </div>
  );
}
