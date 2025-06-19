export type FolderData = {
  id: string;
  name: string;
  isPrivate?: boolean;
  updated: string;
  contents: string[];
  image?: string;
};

export const foldersData: FolderData[] = [
  {
    id: "0hqcsy",
    name: "Projects",
    updated: "2 days ago",
    isPrivate: true,
    contents: ["dob85o", "2944f1", "yeljnw"],
    image: "https://example.com/projects-icon.png",
  },
  {
    id: "42d9go",
    name: "Design System",
    updated: "5 hours ago",
    isPrivate: false,
    contents: ["rokbhk", "l96ahp"],
    image: "https://example.com/design-icon.png",
  },
  {
    id: "64stw3",
    name: "Team Docs",
    updated: "3 days ago",
    isPrivate: false,
    contents: ["4tfcn2", "8seegl", "g5t1cg"],
    image: "https://example.com/docs-icon.png",
  },
  {
    id: "lxij9p",
    name: "Marketing",
    updated: "1 week ago",
    isPrivate: true,
    contents: ["gly57r"],
    image: "https://example.com/marketing-icon.png",
  },
  {
    id: "yjqorq",
    name: "Finance",
    updated: "1 day ago",
    isPrivate: true,
    contents: [],
    image: "https://example.com/finance-icon.png",
  },
];
