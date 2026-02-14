import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ScreenshotCarouselProps {
  images: string[];
  autoPlay?: boolean;
  interval?: number;
}

const ScreenshotCarousel = ({ 
  images, 
  autoPlay = true, 
  interval = 5000 
}: ScreenshotCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const goToPrevious = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      goToNext();
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, autoPlay, interval]);

  return (
    <div className="relative group">
      {/* Main image */}
      <div className="relative overflow-hidden rounded-xl border border-border/50 bg-muted/20 aspect-video">
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Dokero app screenshot ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                index === currentIndex
                  ? 'translate-x-0 opacity-100 z-10'
                  : index < currentIndex || (currentIndex === 0 && index === images.length - 1 && direction === 'left')
                  ? '-translate-x-full opacity-0 z-0'
                  : 'translate-x-full opacity-0 z-0'
              }`}
              loading="lazy"
            />
          ))}
        </div>
        
        {/* Navigation arrows */}
        <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity z-20">
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="bg-background/80 backdrop-blur-sm hover:bg-background/90"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="bg-background/80 backdrop-blur-sm hover:bg-background/90"
            aria-label="Next screenshot"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all ${
              index === currentIndex
                ? "w-8 h-2 bg-primary"
                : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
            } rounded-full`}
            aria-label={`Go to screenshot ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ScreenshotCarousel;
