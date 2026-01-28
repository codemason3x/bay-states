import { FeaturedListings } from "../../config";
import { Title } from "../atoms";
import { FeatureCard } from "../molecules";

interface FeacturesProps {

}

export default function FeaturesSection({ }: FeacturesProps) {
  return (
    <div className="pb-150">
      <Title content="featured listings" className="mb-70" />
      <div className="relative h-356 text-nowrap w-full">
        <div className="flex gap-18 absolute left-50">
          {FeaturedListings.map((value, index) => (
            <FeatureCard
              key={index}
              icon={value.icon}
              address={value.address}
              postCode={value.postCode}
              properties={value.properties}
              date={value.date}
            />
          ))}
        </div>

        <div className="absolute group/left left-9 top-148">
          <img src="/image/normal-left.png" alt="" className="group-hover/left:hidden" />
          <img src="/image/hover-right.png" alt="" className="rotate-180 hidden group-hover/left:block" />
        </div>
        <div className="absolute group/right right-9 top-148">
          <img src="/image/normal-left.png" alt="" className="rotate-180 group-hover/right:hidden" />
          <img src="/image/hover-right.png" alt="" className="rotate-180 hidden group-hover/right:block" />
        </div>
      </div>

    </div>
  );
}
