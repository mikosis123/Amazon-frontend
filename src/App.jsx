
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Routes ,Route  } from 'react-router-dom';
import Cheakout from './Cheakout';
import Login from './Login';
import { useStateValue } from './Statepro';
import { useEffect } from 'react';
import { auth } from './firebase';
import Payment from './Payment';
// import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
// const promise = loadStripe(
// 	'pk_test_51LYOu2JD92V5R3bzEuStNQJnwklA0aOM5GsskTa29CWQHl4OgF8ovsKM3ZbIle05jIos26F7Vor3AnvRIdAYA7Yb00FCbmkwmG'
// );


function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);





  return (
    <div>
    <Router>
    
    <div >

   
    <Routes>
    <Route exact path="/" element={ <><Header /><Home /></> } />
      <Route exact path="/Cheakout" element={<><Header /><Cheakout /> </>  } />
      <Route exact path="/login" element={<><Login /> </>} />
 
    </Routes>
    </div>
    </Router>
    </div>
  );
}

export default App;
