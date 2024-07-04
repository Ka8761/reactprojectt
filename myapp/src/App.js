import HomePage from "./pages/homepage/HomePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ServiceProviderInfo from "./pages/serviceProviderInfo/ServiceProviderInfo";
import NotFound from "./pages/notFound/NotFound";
import Navbar from "./components/navbar/Navbar";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/a" element={<ServiceProviderInfo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Navbar/>
    </>
  );
}

export default App;
