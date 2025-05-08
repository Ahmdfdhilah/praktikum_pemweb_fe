import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import JavaScriptDasar from './pages/JavaScriptDasar';
import LandingPage from './pages/LandingPage';
// import MengenalReactPresentation from "./pages/p7/Test";
// import JSXPresentation from "./pages/p7/test2";
// import ComponentsPropsStatePresentation from "./pages/p7/test3";
// import ReactLifecyclePresentation from "./pages/p7/test4";
import ReactRenderingPresentation from './pages/p7/ReactRenderingPresentation';
import UTSReact from './pages/UTS';
import JavaScriptNextGen from './pages/NextGenJavascript';
import ReactDasar from './pages/ReactDasar';
// import PengantarPythonPresentation from "./pages/p9/PengantarPythonPresentation";
// import PythonOperatorPresentation from "./pages/p9/PythonOperatorPresentation";
// import TipeDataPythonPresentation from "./pages/p9/TipeDataPythonPresentation";
// import PythonControlFlowPresentation from "./pages/p9/PythonControlFlowPresentation";
// import PythonOOPPresentation from "./pages/p10/PythonOOPPresentation";
// import { PythonClassObjectPresentation } from "./pages/p10/test";
// import PythonAttributePresentation from "./pages/p10/test2";
import PythonDasar from './pages/PythonDasar';
import PyramidPresentation from './pages/p11/IntroToPyramid';
import PyramidArchitecture from './pages/p11/PyramidArchitecture';
import PyramidInstallation from './pages/p11/PyramidInstallation';
import PyramidRouting from './pages/p11/tests';
// import PythonControlFlowPresentation from './pages/p9/PythonControlFlowPresentation';
// import PythonOOPPresentation from './pages/p10/PythonOOPPresentation';
// import { PythonClassObjectPresentation } from './pages/p10/test';
// import PythonAttributePresentation from './pages/p10/test2';
// import PythonDasar from './pages/PythonDasar';
import PythonOOPPraktikum from './pages/PythonOOPPraktikum';
import DatabaseWebDevPraktikum from './pages/DatabasePyramid';
import PyramidFrameworkPraktikum from './pages/PyramidFrameworkPraktikum';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/pemrograman-web/uts" element={<UTSReact />} />
          <Route
            path="/pemrograman-web/pertemuan/database"
            element={<DatabaseWebDevPraktikum />}
          />
          <Route path="/test" element={<PyramidPresentation />} />
          <Route path="/test2" element={<PyramidArchitecture />} />
          <Route path="/test3" element={<PyramidInstallation />} />
          <Route path="/test4" element={<PyramidRouting />} />
          {/* <Route path="/test5" element={<PythonFunctionPresentation />} />
          <Route path="/test6" element={<PythonListTuplePresentation />} />
          <Route path="/test7" element={<PythonSetDictPresentation />} />
          <Route path="/test8" element={<PythonModulesPresentation />} /> */}

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
          <Route
            path="pemrograman-web/pemrograman-python"
            element={<PythonDasar />}
          />
          <Route
            path="/pemrograman-web/OOPPython"
            element={<PythonOOPPraktikum />}
          />
          <Route
            path="/pemrograman-web/Pyramid"
            element={<PyramidFrameworkPraktikum />}
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
