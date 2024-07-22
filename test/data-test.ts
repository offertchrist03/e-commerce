import { ArticleProps } from "@/types/index";

export const dataTestArticles: ArticleProps[] = [
  {
    _id: "article-0",
    createdAt: "2024-04-04",
    updatedAt: "2024-04-04",
    archive: false,
    name: "ADATA SSD - 512 Go",
    images: ["/images/blue.png", "/images/purple.jpg", "/images/user.png"],
    description:
      "no more Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio beatae quas et labore, fugiat voluptas tempore iste, repellat inventore, commodi corrupti excepturi harum? Laboriosam odio soluta alias quod iusto porro.",
    category: "technologies",
    tags: ["pc composant", "hard drive"],
    price: 20000,
    quatity: 8,
    discount: 0,
    likes: ["user-1"],
    ratings: [
      { user: "user-1", note: 2 },
      { user: "user-2", note: 5 },
      { user: "user-3", note: 4 },
      { user: "user-4", note: 7 },
      { user: "user-5", note: 3 },
    ],
  },
  {
    _id: "article-1",
    createdAt: "2024-04-04",
    updatedAt: "2024-04-04",
    archive: false,
    name: "ADATA HDD - 2 To",
    images: ["/images/blue.png", "/images/purple.jpg", "/images/user.png"],
    description:
      "no more Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio beatae quas et labore, fugiat voluptas tempore iste, repellat inventore, commodi corrupti excepturi harum? Laboriosam odio soluta alias quod iusto porro.",
    category: "technologies",
    tags: ["pc composant", "hard drive"],
    price: 20000,
    quatity: 8,
    discount: 20,
    likes: ["user-1"],
  },
];
