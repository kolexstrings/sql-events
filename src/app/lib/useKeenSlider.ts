import { useKeenSlider as useKeenSliderBase } from "keen-slider/react";
import { useCallback, useRef } from "react";

export interface UseKeenSliderOptions {
  slidesPerView?: number;
  spacing?: number;
  loop?: boolean;
  autoplay?: boolean;
  autoplayInterval?: number;
  centered?: boolean;
  breakpoints?: {
    [key: string]: {
      slidesPerView?: number;
      spacing?: number;
    };
  };
}

export const useKeenSlider = (options: UseKeenSliderOptions = {}) => {
  const {
    slidesPerView = 1,
    spacing = 0,
    loop = true,
    autoplay = false,
    autoplayInterval = 3000,
    breakpoints,
  } = options;

  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Create breakpoints config for KeenSlider
  const keenSliderBreakpoints: Record<
    string,
    { slides: { perView: number; spacing: number; origin: "auto" | "center" } }
  > = {};
  if (breakpoints) {
    Object.keys(breakpoints).forEach((key) => {
      keenSliderBreakpoints[key] = {
        slides: {
          perView: breakpoints[key].slidesPerView || slidesPerView,
          spacing: breakpoints[key].spacing || spacing,
          origin: options.centered ? "center" : "auto",
        },
      };
    });
  }

  const [sliderRef, instanceRef] = useKeenSliderBase(
    {
      loop,
      slides: {
        perView: slidesPerView,
        spacing,
        origin: options.centered ? "center" : "auto",
      },
      breakpoints: keenSliderBreakpoints,
      created() {
        if (autoplay) {
          startAutoplay();
        }
      },
      destroyed() {
        stopAutoplay();
      },
    },
    []
  );

  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) return;

    autoplayRef.current = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, autoplayInterval);
  }, [autoplayInterval, instanceRef]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const next = useCallback(() => {
    if (instanceRef.current) {
      instanceRef.current.next();
    }
  }, [instanceRef]);

  const prev = useCallback(() => {
    if (instanceRef.current) {
      instanceRef.current.prev();
    }
  }, [instanceRef]);

  const goToSlide = useCallback(
    (index: number) => {
      if (instanceRef.current) {
        instanceRef.current.moveToIdx(index);
      }
    },
    [instanceRef]
  );

  const currentSlide = useCallback(() => {
    return instanceRef.current?.track.details.rel || 0;
  }, [instanceRef]);

  const totalSlides = useCallback(() => {
    return instanceRef.current?.slides.length || 0;
  }, [instanceRef]);

  return {
    sliderRef,
    instanceRef,
    next,
    prev,
    goToSlide,
    currentSlide,
    totalSlides,
    startAutoplay,
    stopAutoplay,
  };
};
