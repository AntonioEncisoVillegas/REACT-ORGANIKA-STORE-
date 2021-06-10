import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css"

import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/footer";
import Catalog from "./components/catalog";
import { BrowserRouter,Route,Switch} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <NavBar></NavBar>

      <Switch>
        <Route path ="/" exact component={Home}></Route>
        <Route path ="/catalog" exact component={Catalog}></Route>
        <Route path ="/about" exact component={About}></Route>
        <Route path ="/admin" exact component={Admin}></Route>
      </Switch>

      <Footer></Footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
