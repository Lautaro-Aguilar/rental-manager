"use client";
import { features } from "@/data/features";
import { FeatureItem, FeatureItemSkeleton } from "./feature-item";

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

export const FeaturesSkeleton = () => {
  return (
    <ul className="px-2 pt-2 lg:pt-0">
      {[...Array(5)].map((_, i) => (
        <FeatureItemSkeleton key={i} />
      ))}
    </ul>
  );
};
