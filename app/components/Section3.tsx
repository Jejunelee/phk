'use client';

import Image from "next/image";

export default function Section3() {
  return (
    <section className="w-full bg-[#F5F3EF] py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-crimson">
      <div className="max-w-7xl mx-auto">

        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#996D33] mb-4 md:mb-6 leading-tight">
            A Partnership Built on Purpose
          </h2>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-[#2D2926]/90 px-2">
            PHK is more than a cooking class. It is a living classroom and cultural stage where Filipino food history,
            regional traditions, and the stories behind every ingredient come alive — led by Chef Reggie Aspiras,
            CCA Manila chefs, and guest culture bearers from across the archipelago.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-col gap-6 md:gap-8">
          
          {/* LEFT CARD - Mobile optimized */}
          <div className="bg-[#ECEAE6] rounded-2xl overflow-hidden flex flex-col sm:flex-row items-stretch">
            
            {/* Image Container - Full width on mobile */}
            <div className="relative w-full sm:w-[35%] lg:w-[40%] pt-6 px-6 pb-2 sm:p-6">
              <div className="relative w-full aspect-[4/3] sm:aspect-auto sm:h-full min-h-[200px] sm:min-h-[300px]">
                <Image
                  src="/PHK/16.png"
                  alt="Chef Reggie Aspiras"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 35vw"
                  priority={false}
                />
              </div>
            </div>

            {/* Text Container - Full width on mobile */}
            <div className="w-full sm:w-[65%] lg:w-[60%] p-6 sm:p-6 md:p-8 flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl md:text-[22px] font-semibold mb-3 md:mb-4 italic text-[#2D2926]">
                Chef Reggie Aspiras
              </h3>

              <div className="space-y-2.5 md:space-y-3 text-sm md:text-[14px] leading-relaxed text-[#2D2926]">
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

          {/* RIGHT CARD - Mobile optimized */}
          <div className="bg-[#5A3300] rounded-2xl overflow-hidden flex flex-col sm:flex-row items-stretch">
            
            {/* Image Container - Full width on mobile */}
            <div className="relative w-full sm:w-[35%] lg:w-[40%] pt-6 px-6 pb-2 sm:p-6">
              <div className="relative w-full aspect-[4/3] sm:aspect-auto sm:h-full min-h-[200px] sm:min-h-[300px]">
                <Image
                  src="/PHK/17.png"
                  alt="CCA Manila"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 35vw"
                  priority={false}
                />
              </div>
            </div>

            {/* Text Container - Full width on mobile */}
            <div className="w-full sm:w-[65%] lg:w-[60%] p-6 sm:p-6 md:p-8 flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl md:text-[22px] font-semibold mb-3 md:mb-4 italic text-white">
                CCA Manila
              </h3>

              <div className="space-y-2.5 md:space-y-3 text-sm md:text-[14px] leading-relaxed text-white/90">
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