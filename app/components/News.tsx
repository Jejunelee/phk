'use client';

import Image from "next/image";
import Link from "next/link";

// Define the structure for a news item
interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  source: string;
  date: string;
  imageSrc: string;
  link: string;
}

// Example data - REPLACE THIS with your manually extracted article info
const featuredNews: NewsItem = {
  id: "sisig-esquire",
  title: "Today I Learned: Not All Sisig Is Meant to Sizzle",
  excerpt: "An epiphany emerged at the Philippine Heritage Kitchen’s Sisig Festival—and it completely changed how I think about one of the Philippines’ most iconic dishes. ",
  source: "Esquire Philippines",
  date: "June 7, 2026",
  imageSrc: "/News/1.jpg", // Place your downloaded image here
  link: "https://www.esquiremag.ph/long-reads/profiles/today-i-learned-not-all-sisig-is-meant-to-sizzle-a8024-20260607-bsc",
};

export default function News() {
  return (
    <section className="w-full bg-[#1a1a1a] text-[#F3E7D7] py-16 px-4 md:px-8 font-crimson">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#E7C9A1] mb-3">
            In the News
          </h2>
          <p className="text-lg mt-4 text-gray-300 max-w-2xl mx-auto">
            Stories that celebrate and challenge our culinary traditions
          </p>
        </div>

        {/* Featured News Card */}
        <div className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden border border-[#E7C9A1]/20 hover:border-[#E7C9A1]/50 transition-all duration-300">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Image Column */}
            <div className="relative h-64 md:h-full min-h-[300px]">
              <Image
                src={featuredNews.imageSrc}
                alt={featuredNews.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Text Column */}
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-sm mb-3">
                <span className="bg-[#E7C9A1]/20 text-[#E7C9A1] px-3 py-1 rounded-full">
                  {featuredNews.source}
                </span>
                <span className="text-gray-400">{featuredNews.date}</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                {featuredNews.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                {featuredNews.excerpt}
              </p>
              
              <Link 
                href={featuredNews.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#E7C9A1] font-semibold hover:gap-3 transition-all duration-300 group"
              >
                Read Full Article
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Optional: Add a note about more articles */}
        <p className="text-center text-gray-400 text-sm mt-8">
          More culinary heritage stories coming soon.
        </p>
      </div>
    </section>
  );
}