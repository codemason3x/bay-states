import { Title } from "../atoms";
import { EmblaCarousel } from "../molecules/EmblaCarousel";

export default function FeaturesSection() {
  return (
    <div className="pb-150">
      <Title content="featured listings" className="mb-70" />
      <div className="relative h-356 text-nowrap w-full">
        <EmblaCarousel />
      </div>
    </div>
  );
}
