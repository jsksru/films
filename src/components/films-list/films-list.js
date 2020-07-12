import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import FilmCard from '../film-card/film-card';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <Container fixed>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={3}>
          <FilmCard id="tt0105690"/>
        </Grid>
        <Grid item xs={12} lg={3}>
          <FilmCard id="tt0099785"/>
          </Grid>
        <Grid item xs={12} lg={3}>
          <FilmCard id="tt0104431"/>
          </Grid>
        <Grid item xs={12} lg={3}>
          <FilmCard id="tt0114781"/>
          </Grid>
        <Grid item xs={12} lg={3}>
          <FilmCard id="tt0088247"/>
          </Grid>
        <Grid item xs={12} lg={3}>
          <FilmCard id="tt0103064"/>
          </Grid>
        <Grid item xs={12} lg={3}>
          <FilmCard id="tt0088763"/>
          </Grid>
        <Grid item xs={12} lg={4}>
          <FilmCard id="tt0096874"/>
          </Grid>
        <Grid item xs={12} lg={3}>
          <FilmCard id="tt0099088"/>
          </Grid>
        <Grid item xs={12} lg={3}>
          <FilmCard id="tt0109830"/>
          </Grid>
        <Grid item xs={12} lg={3}>
          <FilmCard id="tt0111161"/>
          </Grid>
        <Grid item xs={12} lg={3}>
          <FilmCard id="tt0110357"/>
          </Grid>
      </Grid>
    </Container>
  );
}
