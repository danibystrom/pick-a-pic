import { Box, Grid, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
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
  const [filteredPhotos, setFilteredPhotos] = useState<any[]>([]);

  useEffect(() => {
    if (filter === "All") {
      setFilteredPhotos(shuffleArray(photos));
    } else {
      setFilteredPhotos(photos.filter((photo) => photo.category === filter));
    }
  }, [filter]);

  const handleOpen = (photoUrl: string) => {
    setSelectedPhoto(photoUrl);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPhoto(null);
  };

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
            padding: 0,
            margin: 0,
            width: "auto",
            height: "auto",
            maxWidth: "100vw",
            maxHeight: "100vh",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {selectedPhoto && (
            <Box
              component="img"
              sx={{
                maxWidth: "100%",
                maxHeight: "100%",
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
