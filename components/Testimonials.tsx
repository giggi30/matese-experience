import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { REVIEWS } from '../constants';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  // Duplicate reviews to ensure sufficient content for the infinite loop
  const infiniteReviews = [...REVIEWS, ...REVIEWS, ...REVIEWS, ...REVIEWS];

  // Embla Carousel hook with AutoScroll plugin
  // loop: true enables infinite scrolling
  // speed: 1 sets a slow, continuous scroll
  // stopOnInteraction: false ensures it resumes after dragging
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center', dragFree: true }, [
    AutoScroll({ speed: 1, stopOnInteraction: false, stopOnMouseEnter: true })
  ]);

  return (
    <section id="reviews" className="py-20 bg-brand-dark text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold">Cosa dicono di noi</h2>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-[90rem] mx-auto">
          {/* Gradient Masks for smooth fade effect at edges */}
          <div className="absolute top-0 left-0 w-8 md:w-32 h-full bg-gradient-to-r from-brand-dark z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-8 md:w-32 h-full bg-gradient-to-l from-brand-dark z-10 pointer-events-none"></div>

          {/* Embla Viewport */}
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {infiniteReviews.map((review, index) => (
                <div
                  key={`${review.id}-${index}`}
                  className="flex-[0_0_85%] min-w-0 px-4 md:flex-[0_0_45%] lg:flex-[0_0_30%]"
                >
                  <div className="bg-gray-800 p-8 rounded-2xl relative h-full flex flex-col justify-center select-none transform transition-transform duration-300 hover:scale-[1.02] border border-gray-700/50">
                    <Quote className="w-8 h-8 text-brand-gold/20 absolute top-6 right-6" />
                    <div className="flex text-brand-gold mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <p className="text-gray-300 italic mb-6 text-lg">"{review.text}"</p>
                    <div className="mt-auto">
                      <p className="font-bold text-white text-lg">{review.author}</p>
                      <p className="text-xs text-gray-500 uppercase">{review.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};