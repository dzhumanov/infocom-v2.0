import { Backdrop, Box, Grid2, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MainForm from "../MainForm.tsx/MainForm";
import { useTranslation } from "react-i18next";

interface Props {
  open: boolean;
  onClose: () => void;
}
const Modal: React.FC<Props> = ({ open, onClose }) => {
  const { t } = useTranslation();
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const [touchEndY, setTouchEndY] = useState<number | null>(null);
  const [modalTranslateY, setModalTranslateY] = useState(100);

  useEffect(() => {
    setModalTranslateY(open ? 0 : 600);
  }, [open]);

  const handleClose = () => {
    onClose();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const currentY = e.touches[0].clientY;
    setTouchEndY(currentY);

    if (touchStartY !== null) {
      const moveY = currentY - touchStartY;

      if (moveY >= 0) {
        setModalTranslateY(moveY);
      }
    }
  };

  const handleTouchEnd = () => {
    if (touchStartY !== null && touchEndY !== null) {
      const touchDifference = touchEndY - touchStartY;

      if (touchDifference > 200) {
        handleClose();
      } else {
        setModalTranslateY(0);
      }
    }

    setTouchStartY(null);
    setTouchEndY(null);
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Backdrop open={open} onClick={handleClose}>
      <Grid2
        container
        spacing={0}
        direction={"column"}
        wrap="nowrap"
        onClick={handleModalClick}
        sx={{
          height: "90vh",
          width: "100%",
          position: "absolute",
          bottom: 0,
          background: "white",
          p: 2,
          pt: 0,
          overflowY: "auto",
          transform: `translateY(${modalTranslateY}px)`,
          transition: "transform 0.3s ease-out",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        }}
      >
        <Box
          sx={{
            display: "block",
            width: "100%",
            py: 2,
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <Box
            sx={{
              display: "block",
              mx: "auto",
              width: "20%",
              height: "10px",
              bgcolor: "lightgray",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          ></Box>
        </Box>
        <Grid2
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Typography variant={"h6"} fontStyle={"italic"} fontSize={"24px"}>
            {t("text.taxTitle")}
          </Typography>
          <CloseIcon
            sx={{ cursor: "pointer", fontSize: "50px" }}
            onClick={handleClose}
          />
        </Grid2>
        <Grid2 sx={{ mb: 4 }}>
          <Typography variant="body1">
            {t("text.taxText")}
          </Typography>
        </Grid2>
        <MainForm onClose={onClose} />
      </Grid2>
    </Backdrop>
  );
};

export default Modal;
