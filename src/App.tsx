import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home/Home";

const App = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Container>
  );
};

export default App;
