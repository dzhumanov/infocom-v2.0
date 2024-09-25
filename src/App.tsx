import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home/Home";
import TaxForm from "./containers/TaxForm/TaxForm";
import FinalScreen from "./containers/FinalScreen/FinalScreen";

const App = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: "100vh",
      }}
    >
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/taxForm" element={<TaxForm />}></Route>
        <Route path="/results" element={<FinalScreen />}></Route>
      </Routes>
    </Container>
  );
};

export default App;
