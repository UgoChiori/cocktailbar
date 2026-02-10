import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

// type Props = {}

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const video = videoRef.current;
    if (!video) return;

    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });
    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.09,
    });
    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0);

    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom top";
    // videoTimelineRef.current = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: "video",
    //     start: startValue,
    //     end: endValue,
    //     scrub: 1.5,
    //     pin: true,
    //   },
    // });
    // videoRef.current.onloadedmetadata = () => {
    //   videoTimelineRef.to(videoRef.current, {
    //     currentTime: videoRef.current?.duration,
    //   });
    // };
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: 1.5,
        pin: true,
      },
    });
    const initTimeline = () => {
      tl.to(video, {
        currentTime: video.duration,
        ease: "none",
      });
    };

    if (video.readyState >= 2) {
      initTimeline();
    } else {
      video.onloadedmetadata = initTimeline;
    }
  }, [isMobile]);

  // useGSAP(() => {
  // 	const heroSplit = new SplitText(".title", {
  // 	 type: "chars, words",
  // 	});

  // 	const paragraphSplit = new SplitText(".subtitle", {
  // 	 type: "lines",
  // 	});

  // 	// Apply text-gradient class once before animating
  // 	heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

  // 	gsap.from(heroSplit.chars, {
  // 	 yPercent: 100,
  // 	 duration: 1.8,
  // 	 ease: "expo.out",
  // 	 stagger: 0.06,
  // 	});

  // 	gsap.from(paragraphSplit.lines, {
  // 	 opacity: 0,
  // 	 yPercent: 100,
  // 	 duration: 1.8,
  // 	 ease: "expo.out",
  // 	 stagger: 0.06,
  // 	 delay: 1,
  // 	});

  // 	gsap
  // 	.timeline({
  // 	 scrollTrigger: {
  // 		trigger: "#hero",
  // 		start: "top top",
  // 		end: "bottom top",
  // 		scrub: true,
  // 	 },
  // 	})
  // 	.to(".right-leaf", { y: 200 }, 0)
  // 	.to(".left-leaf", { y: -200 }, 0)
  // 	.to(".arrow", { y: 100 }, 0);

  // 	const startValue = isMobile ? "top 50%" : "center 60%";
  // 	const endValue = isMobile ? "120% top" : "bottom top";

  // 	const tl = gsap.timeline({
  // 	 scrollTrigger: {
  // 		trigger: "video",
  // 		start: startValue,
  // 		end: endValue,
  // 		scrub: true,
  // 		pin: true,
  // 	 },
  // 	});

  // 	videoRef.current.onloadedmetadata = () => {
  // 	 tl.to(videoRef.current, {
  // 		currentTime: videoRef.current.duration,
  // 	 });
  // 	};
  //  }, []);

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title capitalize">vivre</h1>
        {/* <h1 className="title capitalize">cafe d'</h1> */}
        <img
          src="/images/cocktail-left-leaf.png"
          alt="left leaf"
          className="left-leaf"
        />
        <img
          src="/images/cocktail-right-leaf.png"
          alt="left leaf"
          className="right-leaf"
        />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block capitalize">
              <p>frais. pur. Classique.</p>
              <p className="subtitle">
                Savourer l'esprit <br /> de l'été
                {/* Sip the spirit <br /> of summer */}
              </p>
            </div>
            <div className="view-cocktails">
              <p className="subtitle capitalize">
                Chaque cocktail de notre carte est un mélange d'ingrédients
                d'exception, d'une touche de créativité et de recettes
                intemporelles — conçu pour l'éveil de vos sens.
                {/* Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes - designed to delight your
                senses. */}
              </p>
              <a href="#cocktails" className="capitalize">
                Voir la carte
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="video absolute inset-0">
        <video
          src="/videos/output.mp4"
          ref={videoRef}
          muted
          playsInline
          preload="auto"
        />
      </div>
    </>
  );
};

export default Hero;
