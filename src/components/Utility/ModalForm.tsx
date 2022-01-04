import React, { useState, Dispatch } from "react";
import axios from "axios";
import { Modal, Button, TextField, Box, Typography, makeStyles } from "@material-ui/core";

interface ModalInterface {
  isOpen: boolean;
  handleModalClick: () => void;
  setListOfBookmark: Dispatch<any>;
}

interface VideoData {
  title: string;
  link: string;
  summary: string;
  tag: string;
}

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

const ModalForm: React.FC<ModalInterface> = ({ isOpen, handleModalClick, setListOfBookmark }) => {
  const [video, setVideo] = useState<VideoData>({
    title: "",
    link: "",
    summary: "",
    tag: "#",
  });
  const handleSaveVideo = async () => {
    await axios
      .post("http://localhost:3001/", video)
      .then((res) => {
        setListOfBookmark((val: any) => {
          return [res.data, ...val];
        });

        setVideo({
          title: "",
          link: "",
          summary: "",
          tag: "#",
        });
        return console.log("Successfully Save");
      })
      .catch((err) => console.log(err));

    handleModalClick();
  };
  const handleChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newValue = e.currentTarget.value;
    const name = e.currentTarget.name;

    setVideo((prev) => {
      return { ...prev, [name]: newValue };
    });
  };
  const classes = styles();
  const boxStyle = {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, 10%)",
    width: "400px",
    height: "500px",
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
          <Typography>Add Youtube Link</Typography>
          <Button onClick={handleModalClick} className={classes.closeBtn}>
            <Typography>X</Typography>
          </Button>
        </Box>
        <Box sx={formStyle}>
          <TextField data-test="text-title" className={classes.textField} id="outlined-basic" label="Title" variant="outlined" value={video.title} name="title" onChange={handleChange} />
          <TextField data-test="text-link" type="url" className={classes.textField} id="outlined-basic" label="Link" variant="outlined" value={video.link} name="link" onChange={handleChange} />
          <TextField data-test="text-summary" className={classes.textField} id="outlined-multiline-static" label="Summary" multiline rows={5} value={video.summary} name="summary" onChange={handleChange} />
          <TextField data-test="text-tag" className={classes.textField} id="outlined-basic" label="Tag" variant="outlined" value={video.tag} name="tag" onChange={handleChange} />
        </Box>
        <Box sx={saveBtn}>
          <Button variant="contained" onClick={handleSaveVideo}>
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalForm;
