import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CircularProgress, {
  circularProgressClasses,
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 13,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    background: "linear-gradient(to right, #78D359, #2FBF00)",
  },
}));

function CustomizedProgressBar({ per }) {
  // React.useEffect(() => {
  //   return () => {};
  // }, [per]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <BorderLinearProgress variant="determinate" value={per} />
    </Box>
  );
}

// import React from "react";

// function CustomizedProgressBar() {
//   return <div>CustomizedProgressBar</div>;
// }

export default CustomizedProgressBar;
