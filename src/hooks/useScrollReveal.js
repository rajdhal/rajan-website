import { useEffect } from "react";

const useScrollReveal = () => {
    useEffect(() => {
        const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");

        const revealOnScroll = () => {
            revealElements.forEach((element) => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (elementTop < windowHeight - 100) {
                    element.classList.add("active");
                }
            });
        };

        // Initial check
        revealOnScroll();

        window.addEventListener("scroll", revealOnScroll);
        return () => window.removeEventListener("scroll", revealOnScroll);
    }, []);
};

export default useScrollReveal;
