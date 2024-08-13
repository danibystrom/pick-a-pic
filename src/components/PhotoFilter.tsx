import { Box, Button, Typography } from "@mui/material";

interface PhotoFilterProps {
  onFilterChange: (category: string) => void;
}

const buttons = [
  "Nature",
  "City",
  "Black & White",
  "People",
  "Food",
  "Sports",
  "Animals",
  "Ilustrations",
  "Health & Wellnes",
  "All",
];

function PhotoFilter({ onFilterChange }: PhotoFilterProps) {
  const handleClick = (category: string) => {
    onFilterChange(category);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 2,
        margin: 3,
      }}
    >
      {buttons.map((text) => (
        <Button
          key={text}
          onClick={() => handleClick(text)}
          sx={{
            color: "#242424",
            textTransform: "none",
            border: "none",
            padding: "10px 20px",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#f0f0f0",
            },
          }}
        >
          <Typography>{text}</Typography>
        </Button>
      ))}
    </Box>
  );
}

export default PhotoFilter;
