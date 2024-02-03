"use client";
import { useState, useRef } from 'react';
import Hero from "@/components/homepage/Hero";
import Heromobile from "@/components/homepage/Heromobile";
import Explorecategory from "@/components/homepage/Explorecategory";
import Forsection from "@/components/homepage/Forsection";
import Themes from "@/components/homepage/Themes";
import Familymembers from "@/components/homepage/Familymembers";
import AgeNumber from "@/components/homepage/AgeNumber";
import Testimonials from "@/components/homepage/Testimonials";

const Home: React.FC = () => {
  const ageSlideRef = useRef<HTMLDivElement>(null);
  const testimonialSliderRef = useRef<HTMLDivElement>(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleRightArrowClick = () => {
    if (ageSlideRef.current) {
      const newScrollLeft = scrollLeft + 600;
      ageSlideRef.current.scrollLeft = newScrollLeft;
      setScrollLeft(newScrollLeft);
    }
  }

  const handleLeftArrowClick = () => {
    if (ageSlideRef.current) {
      const newScrollLeft = scrollLeft - 600;
      ageSlideRef.current.scrollLeft = newScrollLeft;
      setScrollLeft(newScrollLeft);
    }
  }

  const handleTestRightBtn = () => {
    if (testimonialSliderRef.current) {
      const newScrollLeft = scrollLeft + 600;
      testimonialSliderRef.current.scrollLeft = newScrollLeft;
      setScrollLeft(newScrollLeft);
    }
  }

  const handleTestLeftBtn = () => {
    if (testimonialSliderRef.current) {
      const newScrollLeft = scrollLeft - 600;
      testimonialSliderRef.current.scrollLeft = newScrollLeft;
      setScrollLeft(newScrollLeft);
    }
  }

  return (
    <>
      <Hero />
      <Heromobile />
      <Explorecategory />
      <Forsection />
      <Themes />
      <Familymembers />
      <AgeNumber slider={ageSlideRef} rightClick={handleRightArrowClick} leftClick={handleLeftArrowClick} />
      <Testimonials testSlider={testimonialSliderRef} rightTestClick={handleTestRightBtn} leftTestClick={handleTestLeftBtn} />
    </>
  );
}

export default Home;
