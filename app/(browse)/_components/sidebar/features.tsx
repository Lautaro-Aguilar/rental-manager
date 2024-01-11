"use client";
import { features } from "@/data/features";
import { FeatureItem } from "./feature-item";

export const Features = () => {
  return (
    <div>
      <div className="space-y-2 px-2">
        {features.map(({ icon: Icon, id, label, href }) => (
          <FeatureItem key={id} icon={Icon} label={label} href={href} />
        ))}
      </div>
    </div>
  );
};
