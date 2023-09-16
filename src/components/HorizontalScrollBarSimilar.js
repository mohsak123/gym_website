import React from "react";
import { Box } from "@mui/material";

import BodyPart from "./BodyPart";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ExerciseCardSimilar from "./ExerciseCardSimilar";

const HorizontalScrollBarSimilar = ({
  data,
  bodyParts,
  setBodyPart,
  bodyPart,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    dots: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="slide-hor-similar">
      {data.map((item) => (
        <Box
          className="slider-similar"
          sx={{
            height: "500px",
            marginX: "85px",
          }}
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
        >
          {bodyParts ? (
            <BodyPart
              item={item}
              setBodyPart={setBodyPart}
              bodyPart={bodyPart}
            />
          ) : (
            <ExerciseCardSimilar exercise={item} />
          )}
        </Box>
      ))}
    </Slider>
  );
};

export default HorizontalScrollBarSimilar;
