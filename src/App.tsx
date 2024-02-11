import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { mainRoutes } from "./routes/mainRoutes";
import GlobalHeader from "./components/GlobalHeader/GlobalHeader";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalHeader />
        <Routes>
          {mainRoutes.map(({ url, component: Component }) => (
            <Route key={url} path={url} element={<Component />} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
