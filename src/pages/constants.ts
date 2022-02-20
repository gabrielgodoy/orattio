export interface IPageDetail {
  path: string;
  title: string;
}

export const pages = {
  home: {
    path: "/",
    title: "Orattio",
  },
  otherPage: {
    path: "/other-page",
    title: "Other page",
  },
} as const;
