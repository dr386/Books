import { useState } from "react";
import BookCreate from "./components/BookCreate";
import "./index.css";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    setBooks([...books, title]);
  };

  console.log(books);

  return (
    <div>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
