import "./css/App.css";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import { BrowserRouter } from "react-router-dom";
import Bottom from "./components/Bottom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <div className="row pt-3 recipe-row">
          <div className="col-lg-4 col-md-4">
            <Category />
          </div>
          <div className="col-lg-8 col-md-8">
            <Search />
            <Pages />
          </div>
        </div>
        <Bottom />
      </BrowserRouter>
    </div>
  );
}

export default App;
