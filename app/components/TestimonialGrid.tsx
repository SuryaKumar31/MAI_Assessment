import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../utils/data";

const TestimonialGrid = () => {
  return (
    <div className="hidden sm:grid sm:grid-cols-2 gap-6 overflow-hidden relative z-10">
      {testimonials.map((item, index) => (
        <TestimonialCard key={item.id} {...item} index={index} />
      ))}
    </div>
  );
};

export default TestimonialGrid;
