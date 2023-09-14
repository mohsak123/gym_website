import React, { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";

import ExerciseCard from "./ExerciseCard";
import BodyPart from "./BodyPart";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  const [tran, setTran] = useState(0);
  const [dataLength, setDataLength] = useState(0);

  useEffect(() => {
    if (data.length !== 0) {
      setDataLength(data.length);
    }
  }, [data]);

  return (
    <Stack
      direction={"row"}
      sx={{
        width: { xs: "360px", sm: "345px", md: "705px", lg: "1060px" },
        overflow: "hidden",
        marginLeft: { xs: "0px", sm: "-10px" },
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <button
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          left: "-5px",
          backgroundColor: "#fff",
          border: "none",
          cursor: "pointer",
          zIndex: "100",
        }}
        disabled={tran === dataLength - 1}
        onClick={() => setTran(tran + 1)}
      >
        <ArrowBackRoundedIcon
          sx={{
            color: "#ff2625",
            fontSize: "35px",
          }}
        />
      </button>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
          sx={{
            transform: `translateX(-${tran * 350}px)`,
            transition: "0.3s",
          }}
        >
          {bodyParts ? (
            <BodyPart
              item={item}
              setBodyPart={setBodyPart}
              bodyPart={bodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
      <button
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          right: "-5px",
          backgroundColor: "#fff",
          border: "none",
          cursor: "pointer",
          zIndex: "2",
        }}
        disabled={tran === 0}
        onClick={() => setTran(tran - 1)}
      >
        <ArrowForwardRoundedIcon
          sx={{
            color: "#ff2625",
            fontSize: "35px",
          }}
        />
      </button>
    </Stack>
  );
};

export default HorizontalScrollbar;
