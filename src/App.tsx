import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import JavaScriptDasar from './pages/JavaScriptDasar';
import LandingPage from './pages/LandingPage';
// import MengenalReactPresentation from "./pages/p7/Test";
// import JSXPresentation from "./pages/p7/test2";
// import ComponentsPropsStatePresentation from "./pages/p7/test3";
// import ReactLifecyclePresentation from "./pages/p7/test4";
import ReactRenderingPresentation from './pages/p7/test5';
import UTSReact from './pages/UTS';
import JavaScriptNextGen from './pages/NextGenJavascript';
import ReactDasar from './pages/ReactDasar';
import PengantarPythonPresentation from './pages/p9/PengantarPythonPresentation';

import PythonOperatorPresentation from './pages/p9/PythonOperatorPresentation';
import TipeDataPythonPresentation from './pages/p9/TipeDataPythonPresentation';
import PythonControlFlowPresentation from './pages/p9/PythonControlFlowPresentation';
import PythonFunctionPresentation from './pages/p9/PythonFunctionPresentation';
import PythonSetDictPresentation from './pages/p9/PythonSetDictPresentation';
import PythonModulesPresentation from './pages/p9/PythonModulesPresentation';
import PythonListTuplePresentation from './pages/p9/PythonListTuplePresentation';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/pemrograman-web/uts" element={<UTSReact />} />
          <Route path="/test" element={<PengantarPythonPresentation />} />
          <Route path="/test2" element={<TipeDataPythonPresentation />} />
          <Route path="/test3" element={<PythonOperatorPresentation />} />
          <Route path="/test4" element={<PythonControlFlowPresentation />} />
          <Route path="/test5" element={<PythonFunctionPresentation />} />
          <Route path="/test6" element={<PythonListTuplePresentation />} />
          <Route path="/test7" element={<PythonSetDictPresentation />} />
          <Route path="/test8" element={<PythonModulesPresentation />} />

          {/* <Route path="/test4" element={<ReactLifecyclePresentation />} /> */}
          <Route path="/test5" element={<ReactRenderingPresentation />} />
          <Route
            path="/pemrograman-web/javascript-dasar"
            element={<JavaScriptDasar />}
          />
          <Route
            path="/pemrograman-web/nextgen-javascript"
            element={<JavaScriptNextGen />}
          />
          <Route path="/pemrograman-web/react-dasar" element={<ReactDasar />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
