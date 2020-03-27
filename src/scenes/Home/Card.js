import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import sharedStyles from "../../components/sharedStyles";
import clsx from 'clsx';
 import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  ...sharedStyles,
  root: {
    maxWidth: 345
  },
  media: {
    height: 120,
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center center'
  }
}
))

export default function HomeCard(props) {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root && classes.paper)}>
      <CardMedia
        className={classes.media}
        image={props.img}
        title={props.title}
      />
      <CardContent>
        <Typography gutterBottom color="primary" variant="h5" component="h1">
          {props.title}
        </Typography>
        <Typography variant="body2" component="p">
          {props.description}
        </Typography>
      </CardContent>

      <CardActions>
      {props.link.external ?
      <Button href={props.link.href} size="small" color="primary">
      {props.link.text}
      </Button>
        :
      <Button component={Link} to={props.link.href} size="small" color="primary">
          {props.link.text}
        </Button>
         }
      </CardActions>
    </Card>
  );
}