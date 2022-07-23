import { Pokemons, Error404 } from "screens";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "App.scss";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pokemons />}></Route>
          <Route path="/pokemon/:numeric_index" element={<Pokemons />}></Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
