import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import NoteCard from '../components/NoteCard';
import Masonry from 'react-masonry-css';
const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/notes')
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const deleteHandler = async (id) => {
    await fetch(`http://localhost:5000/notes/${id}`, {
      method: 'DELETE',
    });

    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {notes.map((note) => (
          <div item key={note.id}>
            <NoteCard note={note} deleteHandler={deleteHandler} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
};

export default Notes;
