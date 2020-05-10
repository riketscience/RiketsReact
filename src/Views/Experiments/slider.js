import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  // root: {
  //   width: 300,
  // },
});

export default function DiscreteSlider(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} class="slider">
      <Typography id="discrete-slider" gutterBottom>
        {props.title}: {props.factor}<br />
      </Typography>
      <Slider
        defaultValue={2}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={0.1}
        marks={false}
        min={1}
        max={8}
        onChange={(event, newValue) => (props.sliderUpdated(newValue))}
      />
    </div>
  );
}