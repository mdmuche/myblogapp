import { Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import Create from "./components/create/Create";
import Details from "./components/details/Details";
import Error from "./components/error/Error";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import Update from "./components/update/Update";


function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<Create />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/update" element={<Update />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
