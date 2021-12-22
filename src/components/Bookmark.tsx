import { Box, Typography, Button, makeStyles } from "@material-ui/core";

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
}

const bookmarkStyle = {
  display: "flex",
  position:'relative',
  flexDirection: "column",
  boxSizing: "content-box",
  borderRadius: "5%",
  margin: "10px",
  boxShadow: "rgb(119 119 119) 8px 6px 13px 0px",
  cursor: "pointer",
  width: "300px",
  height:"500px"
};

const styles = makeStyles({
  titleStyle: {
    padding: "10px",
    fontSize: "15px",
    textAlign: "center",
    fontFamily: "-webkit-pictograph",
    letterSpacing: "1px",
    fontWeight: 700,
    marginBottom:'10px',
    marginTop:'10px'
  },
});
/* inline-size: 150px;
    overflow-wrap: break-word; */
const handleOnclick = (link: string) => {
  window.location.href = link;
};
const BookMark: React.FC<Bookmark> = ({ bookmark }) => {
  const clasess = styles();
  return (
    <Box sx={bookmarkStyle}>
      <Box onClick={() => handleOnclick(bookmark.link)}>
            <Typography className={clasess.titleStyle}>{bookmark.title}</Typography>
            <img
            src={bookmark.thumbnail}
            alt="thumbnail"
            style={{ height: "250px", width: "300px" }}
            />
            <Box style={{ marginLeft: "10px", display: "contents" }}>
                <Typography>
                    <span
                    style={{ fontSize: "20px", color: "gray" }}
                    >{`Summary: `}</span>
                    <span style={{ fontSize: "15px" }}>{bookmark.summary}</span>
                </Typography>
            </Box>

            <Typography style={{ fontSize: "12px", margin: "10px" }}>
            <span style={{ color: "gray" }}>{`Tag: `}</span>
            <span>{bookmark.tag}</span>
            </Typography>
      </Box>
        <Box sx={{ p: 1  , position:'absolute' ,top:'440px',right:'20px'}}>
                <Button>
                <Typography>EDIT</Typography>
                </Button>
                <Button>
                <Typography>DELETE</Typography>
                </Button>
        </Box>
    </Box>
  );
};

export default BookMark;
