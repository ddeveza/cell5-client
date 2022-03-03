export interface Bookmark {
  id: number;
  title: string;
  link: string;
  summary: string;
  thumbnail: string;
  tag: string;
  createdAt: string;
  updatedAt: string;
}

export interface VideoData {
  title: string;
  link: string;
  summary: string;
  tag: string;
}

export type BookmarksContextState = {
  bookmarks: Bookmark[];
  addBookmark: (newBookmark: VideoData) => void;
};
