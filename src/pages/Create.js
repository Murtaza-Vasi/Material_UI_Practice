import React, { useState } from 'react';
import {
  Typography,
  Button,
  Container,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { KeyboardArrowRight } from '@material-ui/icons';

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
  },
});

const Create = () => {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [category, setCategory] = useState('todo');

  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!title) setTitleError(true);
    else setTitleError(false);

    if (!details) setDetailsError(true);
    else setDetailsError(false);

    if (title && details) console.log(title, details, category);
  };

  return (
    <Container>
      <Typography
        variant='h6'
        component='h2'
        gutterBottom
        color='textSecondary'
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete='off' onSubmit={submitHandler}>
        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          variant='outlined'
          label='Note Title'
          color='secondary'
          fullWidth
          required
          className={classes.field}
          error={titleError}
        />
        <TextField
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          variant='outlined'
          label='Details'
          color='secondary'
          multiline
          rows={4}
          fullWidth
          required
          className={classes.field}
          error={detailsError}
        />

        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel control={<Radio />} value='money' label='Money' />
            <FormControlLabel control={<Radio />} value='todo' label='Todo' />
            <FormControlLabel
              control={<Radio />}
              value='reminder'
              label='Reminder'
            />
            <FormControlLabel control={<Radio />} value='work' label='Work' />
          </RadioGroup>
        </FormControl>
        <Button
          type='submit'
          color='secondary'
          variant='contained'
          onClick={() => console.log('you clicked me')}
          endIcon={<KeyboardArrowRight />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Create;
