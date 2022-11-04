import './App.css';
import View from "./Views/Home/View";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Detail from './Views/Home/Detail';
import Cities from './Views/Home/savedCities';

const App =()=>{
  return (
    <>
      <Router>
          <Routes>
            <Route exact path='/' element={<View/>} />
            <Route path='/detail' element={<Detail/>} />
            <Route path='/cities' element={<Cities/>} />
          </Routes>
        </Router>
      </>
  );
}

export default App;
