import { Box, Button, ButtonGroup } from "@mui/material";

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
        flexDirection: "column",
        alignItems: "center",
        margin: 3,
        "& > *": {
          m: 3,
        },
      }}
    >
      <ButtonGroup size="large" aria-label="Large button group">
        {buttons.map((text) => (
          <Button
            key={text}
            sx={{ borderColor: "#242424", color: "#242424" }}
            onClick={() => handleClick(text)}
          >
            {text}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
}

export default PhotoFilter;
