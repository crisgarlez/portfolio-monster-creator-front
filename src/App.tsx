import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MonstersPage from "./pages/MonstersPage";
import NewMonsterPage from "./pages/NewMonsterPage";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        {/* <ToastContainer /> */}
        <Routes>
          <Route path="/" element={<Navigate to="/monsters" />} />
          <Route path="/monsters" element={<MonstersPage />} />
          <Route path="/new-monster" element={<NewMonsterPage />} />
          <Route path="*" element={<Navigate to="/monsters" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
