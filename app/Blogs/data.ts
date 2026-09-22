export type BlogImage = {
  src: string;
  alt: string;
  caption: string;
};

export type BlogMaker = {
  region: string;
  people: string[];
  dishes: string[];
};

export type BlogAuthor = {
  name: string;
  bio: string;
  image: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  author: BlogAuthor;
  coverImage: BlogImage;
  images: BlogImage[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "kakanin-kanin",
    title: "An Archipelago of Kakanin",
    date: "August 22, 2026",
    category: "Festival",
    excerpt:
      "The Philippine Heritage Kitchen hosted Kakanin Kanin! at the Glasshouse at New World Makati — bringing makers and eaters together to celebrate kakanin culture and heritage.",
    author: {
      name: "Gwyneth King",
      bio: "Gwyneth King is a writer and photographer based in Quezon City. Her pursuits revolve around culture, creativity, community, and craftsmanship.",
      image: "/Blogs/authors/gwyneth-king.jpg",
    },
    coverImage: {
      src: "/Blogs/kakanin-kanin/1.jpg",
      alt: "Putong Marikina and tamales at the Kakanin Kanin buffet",
      caption: "Putong Marikina and Tamales / Bobotu",
    },
    images: [
      {
        src: "/Blogs/kakanin-kanin/1.jpg",
        alt: "Putong Marikina stacked beside tamales and bobotu at the buffet",
        caption: "Putong Marikina and Tamales / Bobotu",
      },
      {
        src: "/Blogs/kakanin-kanin/2.jpg",
        alt: "Suman bongon, banana-leaf suman, and other kakanin at the festival spread",
        caption: "Suman Bongon, Tita Darlyn’s special, and Suman sa Gata",
      },
      {
        src: "/Blogs/kakanin-kanin/3.jpg",
        alt: "Sinukmani from Mauban, Quezon, beside suman sa gata",
        caption: "Sinukmani from Mauban, Quezon",
      },
      {
        src: "/Blogs/kakanin-kanin/4.jpg",
        alt: "Banana-leaf wrapped kakanin cut open to show the filling",
        caption: "Banana-leaf kakanin",
      },
      {
        src: "/Blogs/kakanin-kanin/5.jpg",
        alt: "Hazel’s Puto Pao and Puto Salted Egg under a warming lamp",
        caption: "Hazel’s Puto Pao & Puto Salted Egg",
      },
      {
        src: "/Blogs/kakanin-kanin/6.jpg",
        alt: "A bilao of colorful kakanin arranged as a feast",
        caption: "A bilao of kakanin",
      },
    ],
  },
];

export function getBlogBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export const kakaninMakers: BlogMaker[] = [
  {
    region: "Los Baños",
    people: ["Meden Verano", "Elvira Formeloza"],
    dishes: ["Sapin-Sapin", "Tikoy sa Tukil"],
  },
  {
    region: "Region I",
    people: ["Chef Ryan Cortez"],
    dishes: ["Binungey"],
  },
  {
    region: "Region I",
    people: ["Chef Xavier Mercado"],
    dishes: ["Fried Champorado", "Buyos/Tupig"],
  },
  {
    region: "Region I",
    people: ["Maria Esmeña Valdez"],
    dishes: ["Binubudan"],
  },
  {
    region: "Pampanga",
    people: ["Ruston Banal"],
    dishes: ["Tibok-Tibok"],
  },
  {
    region: "Pateros",
    people: ["Chef Dorjan Reyes", "Angeli Chin"],
    dishes: ["Inutak"],
  },
  {
    region: "Bukidnon",
    people: ["Linda Tasani", "Jocelyn Ones"],
    dishes: ["Binaki", "Suman"],
  },
  {
    region: "Rizal",
    people: ["Chef Anne Atanacio"],
    dishes: ["Hibok-Hibok ng Rizal", "Pitchi-Pitchi", "Kutsinta"],
  },
  {
    region: "Cebu",
    people: ["Chef Richard Hao"],
    dishes: ["Puto Buli", "Titik Budbud"],
  },
  {
    region: "Culinary Eco Life",
    people: ["Super Manang Jessabel"],
    dishes: ["Easy Bibingka"],
  },
];
