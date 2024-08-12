import { Box, Button, ButtonGroup } from "@mui/material";

const buttons = [
  <Button key="one" sx={{ borderColor: "#242424", color: "#242424" }}>
    Nature
  </Button>,
  <Button key="two" sx={{ borderColor: "#242424", color: "#242424" }}>
    City
  </Button>,
  <Button key="three" sx={{ borderColor: "#242424", color: "#242424" }}>
    Black & White
  </Button>,
  <Button key="four" sx={{ borderColor: "#242424", color: "#242424" }}>
    People
  </Button>,
  <Button key="five" sx={{ borderColor: "#242424", color: "#242424" }}>
    Food
  </Button>,
  <Button key="six" sx={{ borderColor: "#242424", color: "#242424" }}>
    Sports
  </Button>,

  <Button key="seven" sx={{ borderColor: "#242424", color: "#242424" }}>
    Animals
  </Button>,
  <Button key="eight" sx={{ borderColor: "#242424", color: "#242424" }}>
    Ilustrations
  </Button>,
  <Button key="nine" sx={{ borderColor: "#242424", color: "#242424" }}>
    Health & Wellnes
  </Button>,
];

function PhotoFilter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: 3,
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
