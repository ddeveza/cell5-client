import { Box, Typography, Button, makeStyles } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";
import EditModalForm from "./Utility/EditModalForm";

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

interface Bookmark {
  bookmark: Bookmarks;
  setListOfBookmark: React.Dispatch<any>;
}

const bookmarkStyle = {
  display: "flex",
  position: "relative",
  flexDirection: "column",
  boxSizing: "content-box",
  borderRadius: "5%",
  margin: "10px",
  boxShadow: "rgb(119 119 119) 8px 6px 13px 0px",
  cursor: "pointer",
  width: "300px",
  height: "500px",
};

const styles = makeStyles({
  titleStyle: {
    padding: "10px",
    fontSize: "15px",
    textAlign: "center",
    fontFamily: "-webkit-pictograph",
    letterSpacing: "1px",
    fontWeight: 700,
    marginBottom: "10px",
    marginTop: "10px",
  },
});
/* inline-size: 150px;
    overflow-wrap: break-word; */
const handleOnclick = (link: string) => {
  window.location.href = link;
};
const BookMark: React.FC<Bookmark> = ({ bookmark, setListOfBookmark }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleModalClick = () => {
    setIsOpen(!isOpen);
  };

  const handleDelete = (id: any) => {
    const data: any = { id: id };
    axios.delete("http://localhost:3001/", { data }).then((result) => {
      console.log(result);
      axios
        .get("http://localhost:3001/")
        .then(async (res) => {
          if (res.data !== "Empty Data") setListOfBookmark(await res.data);
          else setListOfBookmark([]);
        })
        .catch((err) => console.log(err));
    });
  };

  const clasess = styles();
  return (
    <Box sx={bookmarkStyle}>
      <Box onClick={() => handleOnclick(bookmark.link)}>
        <Typography className={clasess.titleStyle}>{bookmark.title}</Typography>
        <img src={bookmark.thumbnail} alt="thumbnail" style={{ height: "250px", width: "300px" }} />
        <Box sx={{ p: 2 }}>
          <Typography>
            <span style={{ fontSize: "20px", color: "gray" }}>{`Summary: `}</span>
            <span style={{ fontSize: "15px" }}>{bookmark.summary}</span>
          </Typography>
        </Box>

        <Typography style={{ fontSize: "12px", margin: "10px", padding: "10px" }}>
          <span style={{ color: "gray" }}>{`Tag: `}</span>
          <span>{bookmark.tag}</span>
        </Typography>
      </Box>
      <Box sx={{ p: 1, position: "absolute", top: "440px", right: "20px" }}>
        <Button onClick={handleModalClick}>
          <Typography>EDIT</Typography>
        </Button>
        <Button onClick={() => handleDelete(bookmark.id)}>
          <Typography>DELETE</Typography>
        </Button>
      </Box>

      <EditModalForm handleModalClick={handleModalClick} isOpen={isOpen} bookmark={bookmark} setListOfBookmark={setListOfBookmark} />
    </Box>
  );
};

export default BookMark;
