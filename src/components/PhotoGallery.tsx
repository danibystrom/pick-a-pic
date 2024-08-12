import { Box, Grid } from "@mui/material";
import React from "react";
import { photos } from "../data/data.ts";

const PhotoGallery: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 1 }}>
      <Grid container spacing={1}>
        {photos.map((photo) => (
          <Grid item xs={12} sm={6} md={4} key={photo.id}>
            <Box
              component="img"
              sx={{
                width: "100%",
                height: "300",
                objectFit: "fill",
                // borderRadius: "8px",
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
