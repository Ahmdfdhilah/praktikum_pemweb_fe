import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import JavaScriptDasar from "./pages/JavaScriptDasar";
import LandingPage from "./pages/LandingPage";
import MengenalReactPresentation from "./pages/Test";
import JSXPresentation from "./pages/test2";
import ComponentsPropsStatePresentation from "./pages/test3";
import ReactLifecyclePresentation from "./pages/test4";
import ReactRenderingPresentation from "./pages/test5";
import UTSReact from "./pages/UTS";
import JavaScriptNextGen from "./pages/NextGenJavascript";
import ReactDasar from "./pages/ReactDasar";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/pemrograman-web/uts" element={<UTSReact/>} />
          <Route path="/test" element={<MengenalReactPresentation/>} />
          <Route path="/test2" element={<JSXPresentation/>} />
          <Route path="/test3" element={<ComponentsPropsStatePresentation/>} />
          <Route path="/test4" element={<ReactLifecyclePresentation/>} />
          <Route path="/test5" element={<ReactRenderingPresentation/>} />
          <Route path="/pemrograman-web/javascript-dasar" element={<JavaScriptDasar/>} />
          <Route path="/pemrograman-web/nextgen-javascript" element={<JavaScriptNextGen/>} />
          <Route path="/pemrograman-web/react-dasar" element={<ReactDasar/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;