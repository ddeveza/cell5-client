import { Box, Button, Typography } from "@material-ui/core";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState } from "react";
import ModalForm from "./Utility/ModalForm";

const AddBookMark = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModalClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-around", marginBottom: "20px" }}>
      <Button data-test="button-add" onClick={handleModalClick}>
        <AddCircleOutlineIcon />
        <Typography>Add</Typography>
      </Button>
      <ModalForm isOpen={isOpen} handleModalClick={handleModalClick} />
    </Box>
  );
};

export default AddBookMark;
