import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import NoteCard from '../components/NoteCard';

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/notes')
      .then((res) => res.json())
      .then((data) => setNotes(data));
  });

  const deleteHandler = async (id) => {
    await fetch(`http://localhost:5000/notes/${id}`, {
      method: 'DELETE',
    });

    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {notes.map((note) => (
          <Grid item key={note.id} xs={12} md={6} lg={4}>
            <NoteCard note={note} deleteHandler={deleteHandler} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Notes;
