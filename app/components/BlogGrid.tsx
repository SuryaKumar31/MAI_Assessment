import { blogs } from "../utils/data";
import BlogCard from "./BlogCard";

export default function BlogGrid() {
  return (
    <div className="hidden lg:flex w-full gap-5">
      {/* Column 1 */}
      <div className="flex flex-col w-1/3 gap-5">
        <BlogCard {...blogs[0]} index={0} />
        <BlogCard {...blogs[1]} index={1} />
      </div>

      {/* Column 2 */}
      <div className="flex flex-col w-1/3 gap-5">
        <BlogCard {...blogs[2]} index={2} />
        <BlogCard {...blogs[3]} index={3} />
      </div>

      {/* Column 3 */}
      <div className="flex flex-col w-1/3 gap-5">
        <BlogCard {...blogs[4]} index={4} />
        <BlogCard {...blogs[5]} index={5} />
      </div>
    </div>
  );
}
