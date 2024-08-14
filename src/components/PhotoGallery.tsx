import { Box, Grid, Modal } from "@mui/material";
import React, { useState } from "react";
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
  const [open, setOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const handleOpen = (photoUrl: string) => {
    setSelectedPhoto(photoUrl);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPhoto(null);
  };

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
              alt={photo.alt}
              onClick={() => handleOpen(photo.url)}
            />
          </Grid>
        ))}
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            maxHeight: "80%",
            overflow: "auto",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 2,
            textAlign: "center",
          }}
        >
          {selectedPhoto && (
            <Box
              component="img"
              sx={{
                maxWidth: "100%",
                maxHeight: "80vh",
                objectFit: "contain",
              }}
              src={selectedPhoto}
              alt="Selected"
            />
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default PhotoGallery;
