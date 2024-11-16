import React from "react";
import books from "../../data/books.json";

function BooksCard() {
  return (
    <div>
      <h1>Books Card</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author} ({book.publishDate})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BooksCard;
