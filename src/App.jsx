import Nav from "./component/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./component/footer";
const App = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
