import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Bookmark, BookmarksContextState, VideoData } from "./types/BookmarkType";

const defaultValue: BookmarksContextState = {
  bookmarks: [],
  addBookmark: (newBookmark: VideoData) => {},
};

export const BookmarkContext = createContext<BookmarksContextState>(defaultValue);

export const BookmarkProvider = ({ children }: { children: React.ReactNode }) => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>(defaultValue.bookmarks);

  const __getBookmark = async () => {
    await axios
      .get("http://localhost:3001/")
      .then(async (res) => {
        //console.log(res);
        if (res.data !== "Empty Data") setBookmarks(await res.data);
      })
      .catch((err) => console.log(err));
  };

  const addBookmark = async (newBookmark: VideoData) => {
    await axios
      .post("http://localhost:3001/", newBookmark)
      .then((res) => {
        setBookmarks((val: Bookmark[]) => {
          return [res.data, ...val];
        });
        return console.log("Successfully Save");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    __getBookmark();
  }, []);

  return <BookmarkContext.Provider value={{ bookmarks, addBookmark }}>{children}</BookmarkContext.Provider>;
};
