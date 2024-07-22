interface DefaultProps {
  _id: string;
  createdAt: string;
  updatedAt: string;
  archive: boolean;
}

export interface DataFooterProps {
  head: string;
  items: { label: string }[];
}

export interface ArticleProps extends DefaultProps {
  name: string;
  images: string[];
  description?: string;
  category: string;
  tags: string[];
  price: number;
  quatity: number;
  discount?: number;
  likes?: string[];
  ratings?: { user: string; note: number }[];
}
export interface ArticleCartProps extends ArticleProps {
  quantity: number;
}
