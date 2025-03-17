import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import JavaScriptDasar from "./pages/JavaScriptDasar";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/pemrograman-web/javascript-dasar" element={<JavaScriptDasar/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;