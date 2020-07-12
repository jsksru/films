import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import api from '../../api/films-api';



const FilmCard = (props) => {
  const filmId = props.id || 'tt3896198';
  const [ isLoaded, setLoaded ] = useState(false);
  const [ filmData, setFilmData ] = useState({});

  const useStyles = makeStyles({
    root: {
      maxWidth: '100%',
    },
    media: {
      height: 300,
    },
  });

  const classes = useStyles();

  useEffect(() => {
    api.getById(filmId)
      .then(data => {
        setLoaded(true);
        setFilmData({
          title: data.Title,
          text: data.Plot,
          image: data.Poster,
          country: data.Country,
          year: parseInt(data.Year),
          rating: parseFloat(data.imdbRating),
          genre: data.Genre,
          director: data.Director,
          actors: data.Actors,
        });
      })
      .catch(error => {
        console.log(error);
      });
  },[]);

  const loader = () => {
    return (
      <div className="loader">
        Loading...
      </div>
    );
  };

  const film = () => {
    return (
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={filmData.image}
          title={filmData.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {filmData.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {filmData.country}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {filmData.year}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add to Favorites
        </Button>
        <Button size="small" color="primary">
          Learn more...
        </Button>
      </CardActions>
    </Card>
    );
  };

  return isLoaded ? film(): loader();
}

export default FilmCard;