import { LucideIcon } from "lucide-react";

interface ResumeCardProps {
  title: string;
  value: string;
  percentage: string;
  description: string;
  icon: LucideIcon;
}

export const ResumeCard = ({
  description,
  percentage,
  title,
  value,
  icon: Icon,
}: ResumeCardProps) => {
  return (
    <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
      <div className="relative flex flex-col min-w-0 break-words bg-background/75 shadow-xl text-foreground rounded-2xl bg-clip-border">
        <div className="flex-auto p-4">
          <div className="flex flex-row -mx-3">
            <div className="flex-none w-2/3 max-w-full px-3">
              <div>
                <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase text-muted-foreground">
                  {title}
                </p>
                <h5 className="mb-2 font-bold">{value}</h5>
                <p className="mb-0 text-muted-foreground">
                  <span className="text-sm font-bold leading-normal text-emerald-500">
                    {percentage}
                  </span>{" "}
                  {description}
                </p>
              </div>
            </div>
            <div className="px-3 text-right basis-1/3">
              <div className="inline-block w-12 h-12 text-center rounded-full bg-gradient-to-tl from-blue-500 to-violet-500 ">
                {<Icon className="w-full h-full" />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
