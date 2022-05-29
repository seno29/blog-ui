import './App.css';
import { routes } from './routes';
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
       {
         routes.map((route,index)=>{
           return(
            <Route
            key={index}
            path={route.path}
            exact={route.exact}
            element={route.component}
          />
           )
         })
       }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
