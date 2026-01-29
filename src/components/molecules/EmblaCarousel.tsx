import { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { FeaturedListings } from '../../config';
import FeatureCard from './FeatureCard';

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    loop: false,
  }, [])

  const goToPrev = () => emblaApi?.scrollPrev();
  const goToNext = () => emblaApi?.scrollNext();

  useEffect(() => {
    if (!emblaApi) return
  }, [emblaApi])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">

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
      </div>

      <div className="absolute group/left left-9 top-148" onClick={goToPrev}>
        <img src="/image/normal-left.png" alt="" className="group-hover/left:hidden" />
        <img src="/image/hover-right.png" alt="" className="rotate-180 hidden group-hover/left:block" />
      </div>
      <div className="absolute group/right right-9 top-148 " onClick={goToNext}>
        <img src="/image/normal-left.png" alt="" className="rotate-180 group-hover/right:hidden" />
        <img src="/image/hover-right.png" alt="" className="hidden group-hover/right:block" />
      </div>
    </div>
  )
}