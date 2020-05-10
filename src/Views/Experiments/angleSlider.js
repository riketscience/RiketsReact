import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  // root: {
  //   width: 300,
  // },
});

export default function AngleSlider(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} class="slider" >
      <Typography id="discrete-slider" gutterBottom>
        {props.title}: {props.yAngle}<br />
      </Typography>
      <Slider
        defaultValue={0.75}
        aria-labelledby="label"
        valueLabelDisplay="auto"
        step={0.01}
        marks={false}
        min={0}
        max={4}
        onChange={(event, newValue) => (props.angleUpdated(newValue))}
      />
    </div>
  );
}