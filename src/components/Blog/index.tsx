
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import { blogData } from "./blogData";

const Blog = () => {
  return (
    <section className="pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Blog"
            title="Latest from the Optima AI Blog"
            paragraph="Insights, guides, and updates on building with Trio Agent, AI app development, and the future of local-first AI."
            width="640px"
            center
          />
        </div>
        <div className="-mx-4 flex flex-wrap">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full px-4 md:w-1/2 lg:w-1/3">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
