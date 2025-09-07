// src/app/shared/models.ts
export interface BlogPost {
 id: string
  postTitle: string
  author: string
  category: string
  status: string
  publishDate: string
  views: number
  excerpt: string
  content: string
  imagePath:string
}

export interface EventItem {
  id: string
  eventTitle: string
  eventDate: string
  eventTime: string
  eventType: string
  status: string
 excerpt: string
  description :any
  imagePath:string
}

// src/app/shared/models.ts
export interface AstrologicalService {
    icon: string;
    title: string;
    description: string;
    priceDuration: string;
}

export interface products
{
    id:number;
    name :string;
    description:string;
    contactNumber:string
    price:string;
    imagePath:string
}