import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountryDetailPage from "./pages/CountryDetailPage";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import DefaultPage from "./pages/DefaultPage";

function App() {

  const {  isAuthenticated,user } = useAuth0();
  // console.log(isAuthenticated,user)

  return (
    <div>
      <Navbar />
      <div className="mx-auto justify-center items-center">
        
            {
              isAuthenticated && user.email_verified
              ? <BrowserRouter>
              <Routes>
                
                <Route path="/" element={<Homepage />} />
                <Route path="/:country" element={<CountryDetailPage />} />
              </Routes>
            </BrowserRouter>:
            <DefaultPage/>
            }
      </div>
    </div>
  );
}

export default App;
