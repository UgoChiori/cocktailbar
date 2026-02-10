// videoTimelineRef.current = gsap.timeline({
//         scrollTrigger: {
//             trigger: "#hero",
//             start: startValue,
//             end: endValue,
//             scrub: true,
//             onEnter: () => videoRef.current?.play(),
//             onEnterBack: () => videoRef.current?.play(),
//             onLeave: () => videoRef.current?.pause(),
//             onLeaveBack: () => videoRef.current?.pause(),
//         }
//     })
//     .fromTo(videoRef.current,
//         {
//             currentTime: 0,
//             scale: isMobile ? 1.2 : 1.5,
//             opacity: 0.5
//         },
//         {
//             currentTime: videoRef.current?.duration || 0,
//             scale: 1,
//             opacity: 1,
//             ease: "none"
//         }
//     );
// }, [isMobile]); // Closing the useGSAP hook properly

