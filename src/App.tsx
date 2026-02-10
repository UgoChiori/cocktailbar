import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Navigationbar from "./components/navigationbar"
import Hero from "./components/Hero";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
  <main>
    <Navigationbar />
    <Hero />
    <div className="h-dvh bg-black" />
  </main>
  );
}

export default App;
