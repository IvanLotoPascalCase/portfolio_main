import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Puedes instalar este paquete usando npm o yarn

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      } fixed bottom-8 right-8 bg-primary text-white p-4 text-2xl rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110 hover:opacity-100 hover:bg-primary-skill focus:outline-none`}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
