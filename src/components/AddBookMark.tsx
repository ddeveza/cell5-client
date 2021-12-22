import React, { useState } from "react";
import ModalForm from "./Utility/ModalForm";
import { Button, Typography , Box } from "@material-ui/core";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const AddBookMark: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModalClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Box sx={{display:'flex', justifyContent:'space-around' ,marginBottom:'20px'}}>
      <Button onClick={handleModalClick}>

        <AddCircleOutlineIcon/>
        <Typography>Add</Typography>
      </Button>
      <ModalForm isOpen={isOpen} handleModalClick={handleModalClick} />
    </Box>
  );
};

export default AddBookMark;
