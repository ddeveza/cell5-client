import React, { useState  ,Dispatch, SetStateAction} from "react";
import ModalForm from "./Utility/ModalForm";
import { Button, Typography , Box } from "@material-ui/core";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';



type Props = { setListOfBookmark: Dispatch<any>; };



const AddBookMark: React.FC <Props>= ({setListOfBookmark} ) => {
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
      <ModalForm isOpen={isOpen} handleModalClick={handleModalClick}  setListOfBookmark={setListOfBookmark}/>
    </Box>
  );
};

export default AddBookMark;
