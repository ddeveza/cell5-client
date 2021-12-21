import React, { FC } from "react";
import AddBookMark from "./components/AddBookMark";
import "./App.css";
import Header from "./components/Header";

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <AddBookMark />
      {/* <Header/> Title Header Only Search Bar
         
            -<Button>
            -<Modal/>
              -<Form> (Title , link , thumbnail , summary , hashtag  , add and save button)
        <ListBookMark/>
            -Title , Thumbnail , summary and hashtag , edit and delete button
     
     */}
      {/* <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} /> */}
    </div>
  );
};

export default App;
