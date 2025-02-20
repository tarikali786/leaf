import { About } from "./about";
import { BestSell } from "./bestSell";
import { Categories } from "./categories";
import { Hero } from "./hero";
import { Testimonials } from "./testimonials";

export const Home = () => {
  return (
    <div className="">
      <Hero />
      <BestSell />
      <About />
      <Categories />

      <Testimonials />
    </div>
  );
};
