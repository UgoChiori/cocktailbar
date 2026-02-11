// import { openingHours, socials } from "../constants/index"
// import { useGSAP } from '@gsap/react'
// import { SplitText} from 'gsap/all';
// import gsap from 'gsap';

// const Contact = () => {
//  	useGSAP(() => {
// 		const titleSplit = SplitText.create('#contact h2', { type: 'words' });
		
// 		const timeline = gsap.timeline({
// 		 scrollTrigger: {
// 			trigger: '#contact',
// 			start: 'top center',
// 		 },
// 		 ease: "power1.inOut"
// 		})
	 
// 	 timeline
// 		.from(titleSplit.words, {
// 		 opacity: 0, yPercent: 100, stagger: 0.02
// 	 })
// 		.from('#contact h3, #contact p', {
// 			opacity: 0, yPercent: 100, stagger: 0.02
// 	 })
// 		.to('#f-right-leaf', {
// 		 y: '-50', duration: 1, ease: 'power1.inOut'
// 	 }).to('#f-left-leaf', {
// 		 y: '-50', duration: 1, ease: 'power1.inOut'
// 	 }, '<')
// 	})
 
//  return (
// 	<footer id="contact">
// 	 <img src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf" />
// 	 <img src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" />
	 
// 	 <div className="content">
// 		<h2>Where to Find Us</h2>
		
// 		<div>
// 		 <h3>Visit Our Bar</h3>
// 		 <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
// 		</div>
		
// 		<div>
// 		 <h3>Contact Us</h3>
// 		 <p>(555) 987-6543</p>
// 		 <p>hello@jsmcocktail.com</p>
// 		</div>
		
// 		<div>
// 		 <h3>Open Every Day</h3>
// 		 {openingHours.map((time) => (
// 			<p key={time.day}>
// 			 {time.day} : {time.time}
// 			</p>
// 		 ))}
// 		</div>
		
// 		<div>
// 		 <h3>Socials</h3>
		 
// 		 <div className="flex-center gap-5">
// 			{socials.map((social) => (
// 			 <a
// 			 	key={social.name}
// 				href={social.url}
// 				target="_blank"
// 				rel="noopener noreferrer"
// 				aria-label={social.name}
// 			 >
// 				<img src={social.icon} />
// 			 </a>
// 			))}
// 		 </div>
// 		</div>
// 	 </div>
// 	</footer>
//  )
// }

// export default Contact


import { openingHours, socials } from "../constants/index"
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all';
import gsap from 'gsap';

const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create('#contact h2', { type: 'words' });
    
    const timeline = gsap.timeline({
     scrollTrigger: {
      trigger: '#contact',
      start: 'top center',
     },
     ease: "power1.inOut"
    })
  
   timeline
    .from(titleSplit.words, {
     opacity: 0, yPercent: 100, stagger: 0.02
   })
    .from('#contact h3, #contact p', {
      opacity: 0, yPercent: 100, stagger: 0.02
   })
    .to('#f-right-leaf', {
     y: '-50', duration: 1, ease: 'power1.inOut'
   }).to('#f-left-leaf', {
     y: '-50', duration: 1, ease: 'power1.inOut'
   }, '<')
  })
 
 return (
  <footer id="contact">
   <img src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf" />
   <img src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" />
  
   <div className="content">
    {/* Heading translated to French */}
    <h2>Où nous trouver</h2>
    
    <div>
     <h3>Notre Bar</h3>
     {/* A prime spot in Le Marais, Paris */}
     <p>18 Rue des Quatre-Fils, 75003 Paris, France</p>
    </div>
    
    <div>
     <h3>Nous contacter</h3>
     {/* French phone format: +33 followed by 9 digits or 01... */}
     <p>+33 (0)1 42 77 00 00</p>
     <p>hello@cafedelaube.com</p>
    </div>
    
    <div>
     <h3>Horaires d'ouverture</h3>
     {openingHours.map((time) => (
      <p key={time.day}>
       {time.day} : {time.time}
      </p>
     ))}
    </div>
    
    <div>
     <h3>Réseaux Sociaux</h3>
  
     <div className="flex-center gap-5">
      {socials.map((social) => (
       <a
        key={social.name}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={social.name}
       >
        <img src={social.icon} alt={social.name} />
       </a>
      ))}
     </div>
    </div>
   </div>
  </footer>
 )
}

export default Contact