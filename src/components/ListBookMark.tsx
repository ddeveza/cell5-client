import Bookmark from "../components/Bookmark";
import { Box } from "@material-ui/core";
interface Bookmarks {
  id: number;
  title: string;
  link: string;
  summary: string;
  thumbnail: string;
  tag: string;
  createdAt: string;
  updatedAt: string;
}

interface List {
  listOfBookmark: Bookmarks[];
}

const bookmarksContainer = {
  position: "realative",
  display: "flex",
  flexWrap: "wrap",
  width: "1280px",
  margin: "auto",
};

const ListBookMark: React.FC<List> = ({ listOfBookmark }) => {
  return (
    <Box sx={bookmarksContainer}>
      {listOfBookmark.length ? (
        listOfBookmark.map((bookmark, index) => {
          return <Bookmark key={bookmark.id} bookmark={bookmark} />;
        })
      ) : (
        <h3>No Bookmark Found. Please Click Add.</h3>
      )}
    </Box>

    /*  listOfBookmark.length && listOfBookmark.map( (bookmark,index)=>{
           return console.log(bookmark.title)
        }) */
  );
};

export default ListBookMark;
