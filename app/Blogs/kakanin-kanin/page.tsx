import type { Metadata } from "next";
import Link from "next/link";
import ImageCarousel from "@/app/Blogs/components/ImageCarousel";
import { getBlogBySlug, kakaninMakers } from "@/app/Blogs/data";
import { notFound } from "next/navigation";

const post = getBlogBySlug("kakanin-kanin");

export const metadata: Metadata = {
  title: "An Archipelago of Kakanin | Philippine Heritage Kitchen",
  description:
    "Kakanin Kanin! at the Glasshouse at New World Makati — a festival celebrating Filipino glutinous rice cakes, the makers behind them, and the merienda culture that keeps them alive.",
};

export default function KakaninKaninPage() {
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-[#F5F3EF]">
      <article className="pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto px-5 md:px-6">
          <Link
            href="/Blogs"
            className="inline-flex items-center gap-2 text-[#996D33] text-sm font-medium hover:opacity-80 transition mb-8"
          >
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
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            All stories
          </Link>

          <span className="inline-block px-3 py-1 bg-[#996D33]/10 text-[#996D33] text-xs md:text-sm font-semibold rounded-full mb-4">
            {post.category}
          </span>

          <h1 className="font-crimson text-4xl sm:text-5xl md:text-6xl text-[#2D2926] leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-[#996D33] font-medium mb-10">{post.date}</p>

          <div className="font-crimson text-[#2D2926] text-base sm:text-lg md:text-[18px] leading-[1.8] space-y-6">
            <p>
              It’s safe to say every Filipino’s childhood includes some form of
              kakanin. For me, kakanin first entered my consciousness as puto
              calasiao peddled on the street, packed in a tiny brown paper bag
              that my family would buy on our way to school. Some 20 years
              later, this memory resurfaces on a drive with my boyfriend to a
              local mall, where we spot a vendor selling the nostalgic puto
              calasiao along Gilmore Avenue, just after the intersection at
              Aurora Boulevard. We both squeal in delight—because that’s when we
              discovered puto calasiao was a memory we shared, despite having
              two completely different childhoods.
            </p>

            <p>
              Of course, kakanin doesn’t stop at puto. A different kakanin may
              characterize a different childhood: the OPM band Ben and Ben sing
              about bibingka in a Christmas tune set during Simbang Gabi: “Ang
              sabi nila / Bilhan mo na siya ng bibingka.” Perhaps the most
              common kakanin variants, puto and bibingka, show the primary
              methods of cooking kakanin—steaming and baking, respectively.
            </p>

            <h2 className="font-crimson text-2xl sm:text-3xl md:text-[34px] text-[#996D33] pt-6">
              What makes kakanin, kakanin?
            </h2>

            <p>
              At their core, kakanin, or glutinous rice cakes, are made from two
              ingredients: glutinous rice, or malagkit (sometimes other grains
              and root crops are used), and coconuts, both abundant in the
              Philippines. In the hands of Filipinos, malagkit becomes galapong
              (rice batter), and glutinous rice flour, and coconuts become
              kakang gata (coconut cream), gata (coconut milk), latik (coconut
              curds or syrup), and niyog (coconut meat). From there, Filipinos
              turn these ingredients into delicacies of all sorts of shapes,
              sizes, and colors.
            </p>

            <p>
              The Philippine Heritage Kitchen hosted the kakanin festival{" "}
              <em>Kakanin Kanin!</em> last August 22 at the Glasshouse at New
              World Makati, bringing together makers and eaters all in one place
              to celebrate our kakanin culture and heritage.
            </p>

            <h2 className="font-crimson text-2xl sm:text-3xl md:text-[34px] text-[#996D33] pt-6">
              The kakanin craftsmen make a showcase
            </h2>

            <ImageCarousel images={post.images} className="py-2" />

            <p>
              Artisans from CALABARZON, Region I, III, VII, X, and NCR left
              their hometowns in the spirit of kakanin, traveling the distance
              to demonstrate their long-standing kakanin recipes and share their
              stories with an eager crowd. Meden Verano from Los Baños found
              herself teaching culinary professionals years after switching from
              culinary studies to agricultural studies because of budget
              constraints. “Pwede pala pagsamahin yung culinary at agriculture,”
              shares Verano, who’s become a part of the Philippine Rice Research
              Institute (PhilRice). She demonstrated how to make the colorful
              Sapin-Sapin, which often comes in a bilao, and Tikoy sa Tukil,
              which is made from steaming a mixture of galapong with eggs,
              flour, sugar, condensed milk, and butter in a bamboo tube referred
              to as “tukil.”
            </p>

            <p>
              Chef Reggie Aspiras, who hails from Agoo, La Union, invited an
              artisan so dear to her childhood — 80-year-old former barangay
              captain, Maria Esmena “Ante Marie” Valdez, also known as the
              “binubudan queen” to many — to make her favorite binubudan. Unlike
              most kakanin, binubudan is fermented rather than cooked and uses
              rice yeast, or bubod, which comes in a disc-shaped cake from
              Rosario, La Union. The delicacy comes out as a porridge-like rice
              dish with an astringency from the rice wine produced during
              fermentation. Meanwhile, Chef Xavier Mercado of La Union’s
              celebrated Halo Halo de Iloko demonstrated his own kakanin
              creation — Fried Champorado, cased in a lumpia wrapper, fried like
              turon, topped with ice cream.
            </p>

            <p>
              Chef Dorjan Reyes of Casa Zaragosa introduces the Pateros-born
              inutak, named for the kakanin’s resemblance to a brain, or
              “utak.” The galapong mixture is cooked into a paste, split into
              two, flavored with ube halaya, topped with thickened coconut cream
              and baked bibingka-style — using charcoal to bake the dish from
              top and bottom. The result is a sticky, gloopy, two-layered rice
              pudding with a glossy, golden crust and singed bits that give the
              kakanin its name.
            </p>

            <p>
              While several kakanin dishes, like suman, use banana leaves as
              packaging, Bukidnon’s Binaki differs by using corn husks as its
              wrapper. Inang’s Delicacies has produced binaki since the 1980s,
              and artisans Linda Tasani and Norly Pepito demonstrate the recipe
              they inherited from their mother. Two stories trace back to
              binaki’s origins. The Ilocano word “baki” translates to “frog,”
              referring to the earlier method of wrapping the delicacy in a
              V-shape that resembles a frog’s open legs, while another story
              says the dish&apos;s etymology stems from the posture formed when
              grating the corn. Naturally, the dish is made from corn, which
              they grate, blend, and combine with sugar, milk, butter, eggs, and
              baking powder, and steam in the corn husks that also act as the
              wrapping. Binaki takes on suman’s familiar longitudinal form,
              containing a steamed corn cake with a bite that resembles a soft
              muffin, and is best paired with a hot drink like tea, coffee, or
              sikwate.
            </p>

            <h2 className="font-crimson text-2xl sm:text-3xl md:text-[34px] text-[#996D33] pt-6">
              The provinces of the Philippines, presented as kakanin
            </h2>

            <p>
              After lunch came the kakanin buffet, like no other —{" "}
              <em>Kakanin Kanin!</em> was the first in the Philippines to bring
              kakanin culture to this scale. There were over a hundred kakanins
              laid out beautifully in the Glasshouse from all parts of the
              Philippines: binungey from Pangasinan laid out in bamboo tubes,
              triangular tamales from Bulacan, tikoy sa anahaw from Quezon
              wrapped like mini-bouquets, deep violet puto bao from Los Baños,
              and bilaos filled with bibingka, palitaw, and so much more. Chef
              Reggie Aspiras, who co-organizes Philippine Heritage Kitchen with
              CCA Manila, dedicated a hearty and nostalgic merienda spread
              dedicated to her mother, Amparo Apiras, inspired by the meals of
              her childhood — featuring heirloom pancit palabok, Agoo dinuguan,
              kalabasa arroz caldo, Lola’s binignit, Candon Calamay, sago’t
              gulaman, among others, which was the perfect savory touch to
              balance out the carb-rich buffet.
            </p>

            <p className="text-xl md:text-2xl text-[#996D33] italic">
              Would you believe that this is only a fraction of all the kakanin
              served?
            </p>

            <p>
              Beyond food traditions, kakanin persists because of the
              Philippines’ merienda culture—having lighter snacks mid-day to
              tide off hunger until the next heavier meal. It’s a tradition that
              has translated across sectors: one might find their go-to kakanin
              at a commercial chain like Dolor’s Kakanin or Lola Nena’s, while
              others may find comfort in home-cooked dishes or seek out kakanin
              from heritage artisans.
            </p>

            <p>
              Kakanin is also an art form — like this bilao of kakanin that is a
              feast for the eyes and the mouth.
            </p>

            <p>
              The Philippines’ archipelagic culture reveals its beauty in facets
              such as our snack gastronomy, where kakanin, despite having two
              foundational ingredients, can differ greatly depending on where
              you’re coming from — one might be snacking on gelatinous inutak in
              Pateros, while another could be enjoying sticky budbud kabog in
              Cebu.
            </p>

            <p>
              While the puto may be considered a common kakanin, you’ll find
              that provinces often bring their own version to the table.
            </p>

            <p>
              The Philippines has over a hundred versions of kakanin, made by
              all kinds of people from all provinces. How lucky were we to
              experience kakanin in abundance, all in one afternoon?
            </p>
          </div>
        </div>

        <section className="max-w-6xl mx-auto px-5 md:px-6 mt-16 md:mt-24">
          <h2 className="font-crimson text-3xl md:text-4xl text-[#996D33] text-center mb-8 md:mb-12">
            Meet the makers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {kakaninMakers.map((maker) => (
              <div
                key={`${maker.region}-${maker.people.join("-")}`}
                className="bg-white rounded-2xl p-5 md:p-6 shadow-md"
              >
                <p className="text-[#996D33] text-xs font-semibold uppercase tracking-wide mb-2">
                  {maker.region}
                </p>
                <ul className="text-[#2D2926] font-crimson text-lg leading-snug mb-3">
                  {maker.people.map((person) => (
                    <li key={person}>{person}</li>
                  ))}
                </ul>
                <p className="text-[#2D2926]/70 text-sm">
                  {maker.dishes.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
