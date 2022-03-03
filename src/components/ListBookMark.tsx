import { Box } from "@material-ui/core";
import { useContext } from "react";
import Bookmark from "../components/Bookmark";
import { BookmarkContext } from "../context/BookmarkContext";

const bookmarksContainer = {
  position: "realative",
  display: "flex",
  flexWrap: "wrap",
  width: "1280px",
  margin: "auto",
};

const ListBookMark = () => {
  const { bookmarks } = useContext(BookmarkContext);

  return (
    <Box sx={bookmarksContainer}>
      {bookmarks.length ? (
        bookmarks?.map((bookmark, index) => {
          return <Bookmark key={bookmark.id} bookmark={bookmark} />;
        })
      ) : (
        <h3>No Bookmark Found. Please Click Add.</h3>
      )}
    </Box>
  );
};

export default ListBookMark;
