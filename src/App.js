import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import {
  Container,
  IconButton,
  Paper,
  Slider,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@material-ui/core/styles";
import { ArrowBack } from "@material-ui/icons";
import { TwitterPicker } from "react-color";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },

  preview: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    position: "relative",
    height: "400px",
  },
}));

const Position0 = styled(ArrowBack)({
  transform: `rotate(45deg)`,
});
const Position1 = styled(ArrowBack)({
  transform: `rotate(135deg)`,
});

const Position2 = styled(ArrowBack)({
  transform: `rotate(225deg)`,
});

const Position3 = styled(ArrowBack)({
  transform: `rotate(315deg)`,
});

const BadgeEditor = () => {
  const classes = useStyles();
  const [text, setText] = useState("20% Off");
  const [bgColor, setBgColor] = useState("#F00");
  const [width, setWidth] = useState(60);
  const [height, setHeight] = useState(20);
  const [borderR, setBorderR] = useState(0);
  const [position, setPosition] = useState(0);

  const positions = [
    {
      top: 0,
      left: 0,
    },
    {
      top: 0,
      right: 0,
    },
    {
      bottom: 0,
      right: 0,
    },
    {
      bottom: 0,
      left: 0,
    },
  ];

  const badgeStyles = makeStyles(() => ({
    badge: {
      display: "block",
      position: "absolute",
      background: bgColor,
      border: 0,
      borderRadius: `${borderR}px`,
      color: "white",
      height: `${height}px`,
      width: `${width}px`,
      lineHeight: `${height}px`,
      textAlign: `center`,
      ...positions[position],
    }, 
    preview: {
      display: 'inline-block',
      width: `20px`,
      height: `20px`,
      background: bgColor,
    }
  }));
  const badgeClasses = badgeStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography id="blbla-slider" gutterBottom>
              Condition Tag Attribute BlaBla
            </Typography>

            <Typography id="text" gutterBottom>
              Text:
            </Typography>

            <TextField
              value={text}
              onChange={(event) => setText(event.target.value)}
            />

            <Typography id="position" gutterBottom>
              Position
            </Typography>
            <div>
              <IconButton
                onClick={() => setPosition(0)}
                color={position === 0 ? "primary" : "default"}
              >
                <Position0 />
              </IconButton>
              <IconButton
                onClick={() => setPosition(1)}
                color={position === 1 ? "primary" : "default"}
              >
                <Position1 />
              </IconButton>
            </div>
            <div>
              <IconButton
                onClick={() => setPosition(3)}
                color={position === 3 ? "primary" : "default"}
              >
                <Position3 />
              </IconButton>
              <IconButton
                onClick={() => setPosition(2)}
                color={position === 2 ? "primary" : "default"}
              >
                <Position2 />
              </IconButton>
            </div>

            <Typography id="width-slider" gutterBottom>
              Width ({width})
            </Typography>
            <Slider
              value={width}
              onChange={(_, newValue) => setWidth(newValue)}
              min={1}
              max={100}
              aria-labelledby="width-slider"
            />
            <Typography id="height-slider" gutterBottom>
              Height ({height})
            </Typography>
            <Slider
              value={height}
              onChange={(_, newValue) => setHeight(newValue)}
              min={1}
              max={100}
              aria-labelledby="height-slider"
            />
            <Typography id="radius-slider" gutterBottom>
              BorderRadius ({borderR})
            </Typography>
            <Slider
              value={borderR}
              onChange={(_, newValue) => setBorderR(newValue)}
              min={1}
              max={100}
              aria-labelledby="radius-slider"
            />
            <Typography gutterBottom>Background color <span className={badgeClasses.preview}/></Typography>
            <TwitterPicker
              color={bgColor}
              onChangeComplete={(color) => setBgColor(color.hex)}
            />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.preview}>
            <span className={badgeClasses.badge}>{text}</span>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

function App() {
  return (
    <Container maxWidth="sm">
      <BadgeEditor />
    </Container>
  );
}

export default App;
