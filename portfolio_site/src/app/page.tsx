import { Suspense } from "react";
import { WorkScreen } from "@/modules/work/screens";

export default function Page() {
  return (
    <Suspense>
      <WorkScreen />
    </Suspense>
  );
}
