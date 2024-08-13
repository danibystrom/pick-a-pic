import { Box, Grid } from "@mui/material";
import React from "react";
import { photos } from "../data/data.ts";

interface PhotoGalleryProps {
  filter: string;
}

// Blanda korten
const shuffleArray = (array: any[]) => {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
};

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ filter }) => {
  const filteredPhotos =
    filter === "All"
      ? shuffleArray(photos)
      : photos.filter((photo) => photo.category === filter);

  return (
    <Box sx={{ flexGrow: 1, padding: 0, margin: 0 }}>
      <Grid container spacing={0.5} sx={{ margin: 0, width: "100%" }}>
        {filteredPhotos.map((photo) => (
          <Grid item xs={12} sm={6} md={4} key={photo.id}>
            <Box
              component="img"
              sx={{
                width: "100%",
                height: "calc(100vh /3)",
                objectFit: "cover",
              }}
              src={photo.url}
              alt={photo.category}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PhotoGallery;
