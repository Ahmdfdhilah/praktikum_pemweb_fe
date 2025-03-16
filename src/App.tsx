import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import JavaScriptDasar from "./pages/JavaScriptDasar";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<JavaScriptDasar/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;