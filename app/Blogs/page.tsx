import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/app/Blogs/components/PageHero";
import { blogPosts } from "@/app/Blogs/data";

export const metadata: Metadata = {
  title: "Blogs | Philippine Heritage Kitchen",
  description:
    "Stories from the Philippine Heritage Kitchen — festivals, makers, and the dishes that keep our culinary heritage alive.",
};

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero title="Blogs" />

      <div className="w-full bg-[#F5F3EF] py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-16 xl:px-28">
          {blogPosts.length === 0 ? (
            <div className="text-center py-16 md:py-24">
              <p className="text-[#2D2926]/60 text-lg">Stories coming soon.</p>
            </div>
          ) : (
            <div className="space-y-8 md:space-y-12">
              {blogPosts.map((post, index) => (
                <Link
                  key={post.slug}
                  href={`/Blogs/${post.slug}`}
                  className={`group flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-6 md:gap-8 lg:gap-12 items-stretch bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300`}
                >
                  <div className="w-full md:w-1/2 relative group overflow-hidden">
                    <div className="relative w-full h-full min-h-[260px] md:min-h-[320px]">
                      <Image
                        src={post.coverImage.src}
                        alt={post.coverImage.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                    <span className="inline-block px-3 py-1 bg-[#996D33]/10 text-[#996D33] text-xs md:text-sm font-semibold rounded-full mb-3 w-fit">
                      {post.category}
                    </span>
                    <h2 className="font-crimson text-2xl md:text-3xl lg:text-4xl font-bold text-[#2D2926] mb-2">
                      {post.title}
                    </h2>
                    <p className="text-[#996D33] text-sm md:text-base font-medium mb-4">
                      {post.date}
                    </p>
                    <p className="text-[#2D2926]/70 text-base md:text-lg leading-relaxed">
                      {post.excerpt}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-[#996D33] font-medium group-hover:gap-3">
                      Read Story
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
