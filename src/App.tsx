import { Box, Button, Container, Grid2 } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "./components/Modal/Modal";
import KG from "./components/SVG/KG";
import RU from "./components/SVG/RU";

function App() {
  const { t, i18n } = useTranslation();
  const [openBackdrop, setOpenBackdrop] = useState(false);

  const onOpen = () => {
    setOpenBackdrop(true);
  };

  const onClose = () => {
    setOpenBackdrop(false);
  };

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid2 container direction={"column"}>
          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            <Button
              sx={{ border: "1px solid black", p: 0 }}
              onClick={() => handleChangeLanguage("kg")}
            >
              <KG />
            </Button>
            <Button
              sx={{ border: "1px solid black", p: 0 }}
              onClick={() => handleChangeLanguage("ru")}
            >
              <RU />
            </Button>
          </Box>
          <Button
            variant="outlined"
            sx={{
              display: "block",
              fontStyle: "italic",
              color: "black",
              borderColor: "black",
              p: "16px",
              lineHeight: "24px",
              fontWeight: 400,
            }}
            onClick={onOpen}
          >
            {t("text.taxButton")}
          </Button>
        </Grid2>

        {/* <Modal open={openBackdrop} onClose={onClose} /> */}
      </Container>
    </>
  );
}

export default App;
