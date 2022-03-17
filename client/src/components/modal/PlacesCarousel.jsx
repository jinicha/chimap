import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import axios from 'axios';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import IconButton from '@mui/material/IconButton';
import BookmarksIcon from '@mui/icons-material/Bookmarks';

export default function PlacesCarousel({ places }) {
  // sort places by the product of rating and review_count in descending order
  const sort = _.sortBy(places, (item) => item.rating * item.review_count * -1);

  // create images array
  const images = [];
  const ratingGenerator = (num) => {
    if (num >= 2000) {
      return 'Must Go';
    }
    return 'Recommend';
  };
  sort.map((item) => {
    images.push({
      name: item.name,
      rating: ratingGenerator(item.rating * item.review_count),
      image_url: item.image_url,
      place_url: item.url,
      key: item.id,
    });
    return images;
  });

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const bookmark = (e) => {
    e.preventDefault();
    axios.post('/mvp/bookmarks', images[activeStep]);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>
          <a href={images[activeStep].place_url}>{images[activeStep].name}</a>
          {' '}
          {images[activeStep].rating}
        </Typography>
        <IconButton type="submit" onClick={bookmark}><BookmarksIcon /></IconButton>
      </Paper>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.id}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 360,
                  display: 'block',
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.image_url}
                alt={step.name}
              />
            ) : null}
          </div>
        ))}
      </SwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={(
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
      )}
        backButton={(
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
      )}
      />
    </Box>
  );
}

PlacesCarousel.propTypes = {
  places: PropTypes.instanceOf(Array).isRequired,
};
