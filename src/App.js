import "./css/App.css";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <div className="row">
          <div className="col-lg-4">
            <Category />
          </div>
          <div className="col-lg-8">
            <Search />
            <Pages />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
