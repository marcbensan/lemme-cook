import type { JSX } from "react";

export default function Loading(): JSX.Element {
  return (
    <div className="h-screen flex items-center justify-center loading">
      Loading...
    </div>
  );
}
