'use client';

import Image from "next/image";

export default function Section3() {
  return (
    <section className="w-full bg-[#F5F3EF] py-12 md:py-12 px-6 lg:px-20 font-crimson">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-[28px] md:text-[32px] font-semibold text-[#996D33] mb-4">
            A Partnership Built on Purpose
          </h2>

          <p className="text-[15px] md:text-[16px] leading-[1.6] text-[#2D2926]/90">
            PHK is more than a cooking class. It is a living classroom and cultural stage where Filipino food history,
            regional traditions, and the stories behind every ingredient come alive — led by Chef Reggie Aspiras,
            CCA Manila chefs, and guest culture bearers from across the archipelago.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6">

          {/* LEFT CARD */}
          <div className="bg-[#ECEAE6] rounded-[16px] overflow-hidden flex flex-col md:flex-row md:items-stretch min-h-[360px]">

            {/* Image container - with top padding on mobile */}
            <div className="relative w-full md:w-[40%] flex-shrink-0 md:m-4 md:ml-[-0.01] pt-6 md:pt-0">
              <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-full min-h-[200px] md:min-h-[280px]">
                <Image
                  src="/PHK/16.png"
                  alt="Chef Reggie Aspiras"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 20vw"
                />
              </div>
            </div>

            {/* Text */}
            <div className="w-full md:w-[60%] p-6 md:pr-8 md:pl-2 text-[#2D2926] flex flex-col justify-center">
              <h3 className="text-[22px] font-semibold mb-4 italic">
                Chef Reggie Aspiras
              </h3>

              <div className="space-y-3 text-[14px] leading-[1.6]">
                <p>
                  Chef and instructor in the culinary arts — author, Philippine Daily Inquirer columnist,
                  consultant, curator of culinary journeys, and Filipino food heritage advocate — whose work
                  has helped shape the story of Filipino cuisine and the people behind it.
                </p>

                <p>
                  A Bravo Empowered Woman Awardee for Culinary Arts, she brings together voices from across
                  the Philippines — creating space where flavors, techniques, and traditions converge.
                </p>

                <p>
                  Where the story of Filipino food is not only preserved, but lived, shared, and carried forward.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-[#5A3300] rounded-[16px] overflow-hidden flex flex-col md:flex-row md:items-stretch min-h-[360px] text-white">

            {/* Image container - with top padding on mobile */}
            <div className="relative w-full md:w-[40%] flex-shrink-0 md:m-4 md:ml-[-0.01] pt-6 md:pt-0">
              <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-full min-h-[200px] md:min-h-[280px]">
                <Image
                  src="/PHK/17.png"
                  alt="CCA Manila"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 20vw"
                />
              </div>
            </div>

            {/* Text */}
            <div className="w-full md:w-[60%] p-6 md:pr-8 md:pl-2 flex flex-col justify-center">
              <h3 className="text-[22px] font-semibold mb-4 italic">
                CCA Manila
              </h3>

              <div className="space-y-3 text-[14px] leading-[1.6]">
                <p>
                  The Center for Culinary Arts, Manila is the Philippines' foremost culinary institution,
                  training generations of Filipino chefs and food professionals who carry our culinary heritage forward.
                </p>

                <p>
                  CCA Manila is PHK's home. Its kitchens, classrooms, and community provide the ideal space
                  to bring together the regions of the Philippines.
                </p>

                <p>
                  A shared mission: to spotlight Filipino food culture, from the inside out.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}