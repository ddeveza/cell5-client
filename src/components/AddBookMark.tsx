import React, { useState } from "react";
import ModalForm from "./Utility/ModalForm";
import { Button, Typography } from "@material-ui/core";

const AddBookMark: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModalClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <Button onClick={handleModalClick}>
        <Typography>Add</Typography>
      </Button>
      <ModalForm isOpen={isOpen} handleModalClick={handleModalClick} />
    </div>
  );
};

export default AddBookMark;
