import { useState } from "react";
import BookCreate from "./components/BookCreate";
import "./index.css";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updateBooks = [
      ...books,
      {
        id: Math.round(Math.random() * 9999),
        title,
      },
    ];

    setBooks(updateBooks);
  };

  return (
    <div className="app">
      <BookList books={books} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
