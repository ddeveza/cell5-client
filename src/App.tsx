import { FC } from "react";
import AddBookMark from "./components/AddBookMark";
import Header from "./components/Header";
import ListBookMark from "./components/ListBookMark";
import { BookmarkProvider } from "./context/BookmarkContext";

const App: FC = () => {
  return (
    <BookmarkProvider>
      <div className="App">
        <Header />
        <AddBookMark />
        <ListBookMark />
      </div>
    </BookmarkProvider>
  );
};

export default App;
