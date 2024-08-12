import { Box, Button, ButtonGroup } from "@mui/material";

const buttons = [
  <Button key="one">Nature</Button>,
  <Button key="two">City</Button>,
  <Button key="three">Black&White</Button>,
];

function PhotoFilter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 3,
        },
      }}
    >
      <ButtonGroup size="large" aria-label="Large button group">
        {buttons}
      </ButtonGroup>
    </Box>
  );
}

export default PhotoFilter;
