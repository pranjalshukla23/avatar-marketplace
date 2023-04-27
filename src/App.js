import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import PaginatedItems from "./components/PaginatedItems";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import UserProvider from "./contexts/UserProvider";

function App() {
  return (
    <UserProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<Product />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
