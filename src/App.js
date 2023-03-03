import React, { useContext, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { UserContext } from "./contexts/userContext";
import { API, setAuthToken } from "./config/api"

//component
import LandingPage from "./pages/home";
import Navbar from "./component/navbar";
import PageDetail from "./pages/tenant/detail";
import MyProfile from "./pages/myProfile";
import BookingPage from "./pages/tenant/myBooking";
import MyHistory from "./pages/tenant/history";
import AddProperty from "./pages/owner/addProperty";
import IncomeTransaction from "./pages/owner/transaction";
import AddCity from "./pages/owner/addcity";
import HomeOwner from "./pages/owner/homeowner";
import HistoryOwner from "./pages/owner/history-owner";



function App() {
  const navigate= useNavigate();
  const [state, dispatch] = useContext(UserContext);

  useEffect(() => {
    
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    if (state.isLogin === false) {
      navigate('/');
    } else {
      if (state.user.listas === 'owner') {
        navigate('/income-transaction');
        console.log(state.user.listas)
      } else if (state.user.listas === 'tenant') {
        navigate('/')
        console.log(state.user.listas)
      }
    }
  }, [state]);

  const checkUserAuth = async () => {
    try {
      if (localStorage.token) { 
        setAuthToken(localStorage.token); 
        const response = await API.get("/check-auth"); 

        let payload = response.data.data; 
        payload.token = localStorage.token;
        console.log(localStorage.token);
   
        dispatch({ 
           type: "USER_SUCCESS", 
           payload, 
        }); 
     } 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUserAuth();
  }, [])

  return (
    <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/detail/:id" element={<PageDetail />} />
          <Route exact path="/my-profile" element={<MyProfile />} />
          <Route exact path="/my-booking" element={<BookingPage />} />
          <Route exact path="/my-history" element={<MyHistory />} />
          {/* admin */}
          <Route exact path="/add-property" element={<AddProperty />} />
          <Route exact path="/add-city" element={<AddCity/>} />
          <Route exact path="/income-transaction" element={<IncomeTransaction/>} />
          <Route exact path="/home-owner" element={<HomeOwner/>} />
          <Route exact path="/history" element={<HistoryOwner/>} />
        </Routes>
    </>
  );
}

export default App;
