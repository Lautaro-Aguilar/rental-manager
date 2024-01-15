import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export const WelcomeBackCard = () => {
  return (
    <div className="w-full max-w-full h-full mb-6 sm:flex-none xl:mb-0">
      <div className="relative overflow-hidden h-full bg-cover rounded-xl flex flex-col justify-between bg-[url(https://images.unsplash.com/photo-1502514841534-dceabea28dad?q=80&w=2086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-center bg-no-repeat)]">
        <div className="backdrop-brightness-[.25]">
          <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover"></span>
          <div className="relative z-10 flex flex-col flex-auto h-full p-4">
            <h5 className="pt-2 text-muted-foreground">Welcome back,</h5>
            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
              Mark Johnson
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground">
              Glad to see you again! <br />
              Ask me anything
            </p>
          </div>
        </div>
        <div className="relative z-10 flex flex-col flex-auto h-full p-4  backdrop-brightness-[.25]">
          <Button
            variant="link"
            className="mt-auto mb-0 font-semibold leading-normal group text-sm items-center justify-start p-0"
          >
            <Link className="" href="/dashboard/1">
              Read More
            </Link>
            <ChevronRight className="inline-block ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};
