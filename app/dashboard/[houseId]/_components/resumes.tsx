import { CircleDollarSign } from "lucide-react";
import { ResumeCard } from "./resume-card";

export const Resumes = () => {
  const data = [
    {
      id: 1,
      title: "Total Revenue",
      value: "$ 2,500",
      percentage: "+25%",
      description: "Since last month",
      icon: CircleDollarSign,
    },
    {
      id: 2,
      title: "Total Revenue",
      value: "$ 2,500",
      percentage: "+25%",
      description: "Since last month",
      icon: CircleDollarSign,
    },
    {
      id: 3,
      title: "Total Revenue",
      value: "$ 2,500",
      percentage: "+25%",
      description: "Since last month",
      icon: CircleDollarSign,
    },
    {
      id: 4,
      title: "Total Revenue",
      value: "$ 2,500",
      percentage: "+25%",
      description: "Since last month",
      icon: CircleDollarSign,
    },
  ];
  return (
    <div className="flex flex-wrap ">
      {data.map(({ description, icon, id, percentage, title, value }) => (
        <ResumeCard
          key={id}
          description={description}
          icon={icon}
          percentage={percentage}
          title={title}
          value={value}
        />
      ))}
    </div>
  );
};
