import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import JavaScriptDasar from "./pages/JavaScriptDasar";
import LandingPage from "./pages/LandingPage";
// import MengenalReactPresentation from "./pages/p7/Test";
// import JSXPresentation from "./pages/p7/test2";
// import ComponentsPropsStatePresentation from "./pages/p7/test3";
// import ReactLifecyclePresentation from "./pages/p7/test4";
import ReactRenderingPresentation from "./pages/p7/ReactRenderingPresentation";
import UTSReact from "./pages/UTS";
import JavaScriptNextGen from "./pages/NextGenJavascript";
import ReactDasar from "./pages/ReactDasar";
// import PengantarPythonPresentation from "./pages/p9/PengantarPythonPresentation";
import PythonOperatorPresentation from "./pages/p9/PythonOperatorPresentation";
// import TipeDataPythonPresentation from "./pages/p9/TipeDataPythonPresentation";
import PythonControlFlowPresentation from "./pages/p9/PythonControlFlowPresentation";
import PythonOOPPresentation from "./pages/p10/PythonOOPPresentation";
import { PythonClassObjectPresentation } from "./pages/p10/test";
import PythonAttributePresentation from "./pages/p10/test2";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/pemrograman-web/uts" element={<UTSReact />} />
          <Route path="/test" element={<PythonOOPPresentation />} />
          <Route path="/test2" element={<PythonClassObjectPresentation />} />
          <Route path="/test3" element={<PythonAttributePresentation />} />
          <Route path="/test4" element={<PythonControlFlowPresentation />} />
          {/* <Route path="/test4" element={<ReactLifecyclePresentation />} /> */}
          <Route path="/test5" element={<ReactRenderingPresentation />} />
          <Route path="/pemrograman-web/javascript-dasar" element={<JavaScriptDasar />} />
          <Route path="/pemrograman-web/nextgen-javascript" element={<JavaScriptNextGen />} />
          <Route path="/pemrograman-web/react-dasar" element={<ReactDasar />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;