export interface Work {
    id: number;
    title: string;
    category: string;
    thumbnailUrl: string;
    detailImageUrls: string[];
    summary: string;
    description: string;
    tools: string[];
    githubUrl?: string;
    youtubeUrl?: string;
    websiteUrl?: string;
  }
  