import React from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const About: React.FC = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create("#about h2", {
            type: "words"
        })

        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#about",
                start: "top center"
            }
        })

        scrollTimeline
        .from(titleSplit.words, {
            opacity: 0, duration: 1, yPercent: 100, ease: "expo.out", stagger: 0.02
        })
        .from(".top-grid div, .bottom-grid div", {
            opacity: 0,
            // scrub: 1,
            duration: 1, ease: "power1.inOut", stagger: 0.04
        }, "-=0.5")
    })
  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Les Meilleurs Cocktails</p>
            <h2>
              Où chaque détail compte <span className="text-white">- </span>
              du pilon à la garniture
            </h2>
          </div>
          <div className="sub-content">
            <p>
              Chaque cocktail que nous servons reflète notre obsession du détail
              — du premier coup de pilon à la touche finale de la garniture.
              C’est cette attention qui transforme un simple verre en un moment
              mémorable.
              {/* Every cocktail we serve is a reflection of our obsession with
              detail - from the first muddle to the final garnish. That care is
              what turns s simple drink into something memorable. */}
            </p>
            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>4.5</span>/ 5
              </p>
              <p className="text-sm text-white-100">
                {/* More than +4000 customers */}
                Plus de 4 000 clients nous font confiance
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt1.png" alt="grid-image-1" />
        </div>
        <div className="md:col-span-6">
          <div className="noisy" />
          <img src="/images/abt2.png" alt="grid-image-2" />
        </div>
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt5.png" alt="grid-image-5" />
        </div>
      </div>
      <div className="bottom-grid">
          <div className="md:col-span-8">
          <div className="noisy" />
          <img src="/images/abt3.png" alt="grid-image-2" />
        </div>
          <div className="md:col-span-4">
          <div className="noisy" />
          <img src="/images/abt4.png" alt="grid-image-2" />
        </div>
      </div>
    </div>
  );
};

export default About;
