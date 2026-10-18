import { Intro } from '@/components/site/Intro';
import { Nav } from '@/components/site/Nav';
import { About, Approach, Contact, Experience, Hero, Marquee, Work } from '@/components/site/Home';

export default function HomePage() {
  return (
    <>
      <Intro />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <Approach />
        <Experience />
        <About />
        <Contact />
      </main>
    </>
  );
}
