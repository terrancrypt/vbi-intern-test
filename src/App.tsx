import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { mainRoutes } from "./routes/mainRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {mainRoutes.map(({ url, component }) => (
            <Route path={url} element={component as React.ReactNode} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
