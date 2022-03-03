import { Box, Button, makeStyles, Modal, TextField, Typography } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";
const styles = makeStyles({
  textField: {
    paddingBottom: "20px",
  },

  closeBtn: {
    position: "absolute",
    top: "20px",
    left: "340px",
    borderRadius: "50%",
  },
});

interface Bookmarks {
  id?: number;
  title: string;
  link: string;
  summary: string;
  thumbnail?: string;
  tag: string;
  createdAt?: string;
  updatedAt?: string;
}

type Props = {
  isOpen: boolean;
  handleModalClick: () => void;
  bookmark: Bookmarks;
};

const EditModalForm: React.FC<Props> = ({ isOpen, handleModalClick, bookmark }) => {
  const [video, setVideo] = useState<Bookmarks>({
    ...bookmark,
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newValue = e.currentTarget.value;
    const name = e.currentTarget.name;

    setVideo((prev: any) => {
      return { ...prev, [name]: newValue };
    });
  };

  const handleSaveVideo = async () => {
    await axios
      .put("http://localhost:3001/", video)
      .then((res: any) => {
        let data = res.data;
        setVideo((prev: any) => {
          return { ...prev, data };
        });
        axios
          .get("http://localhost:3001/")
          .then(async (res) => {
            // console.log(res);
            /*  if (res.data !== "Empty Data") setListOfBookmark(await res.data); */
          })
          .catch((err) => console.log(err));

        return console.log("Successfully Save");
      })
      .catch((err: any) => console.log(err));

    handleModalClick();
  };
  const classes = styles();
  const boxStyle = {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, 10%)",
    width: "400px",
    height: "500px" /*  */,
    bgcolor: "background.paper",
    display: "flex",
    flexDirection: "column",
    outline: "none",
    boxSizing: "content-box",
    WebkitFilter: "drop-shadow(2px 2px 5px  rgb(120 196 217))",
    borderRadius: "1%",
    p: 2,
  };

  const saveBtn = {
    position: "absolute",
    top: "470px",
    left: "340px",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    margin: "20px 20px 5px 5px",
    p: 2,
  };

  return (
    <Modal open={isOpen} onClose={handleModalClick} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box sx={boxStyle}>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography>Edit Youtube Link</Typography>
          <Button onClick={handleModalClick} className={classes.closeBtn}>
            <Typography>X</Typography>
          </Button>
        </Box>
        <Box sx={formStyle}>
          <TextField data-test="text-title" className={classes.textField} id="outlined-basic" label="Title" variant="outlined" value={video.title} name="title" onChange={handleChange} />
          <TextField data-test="text-link" type="url" className={classes.textField} id="outlined-basic" label="Link" variant="outlined" value={video.link} name="link" onChange={handleChange} />
          <TextField
            data-test="text-summary"
            className={classes.textField}
            id="outlined-multiline-static"
            label="Summary"
            multiline
            rows={5}
            value={video.summary}
            name="summary"
            onChange={handleChange}
          />
          <TextField data-test="text-tag" className={classes.textField} id="outlined-basic" label="Tag" variant="outlined" value={video.tag} name="tag" onChange={handleChange} />
        </Box>
        <Box sx={saveBtn} onClick={handleSaveVideo}>
          <Button variant="contained">Save</Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditModalForm;
