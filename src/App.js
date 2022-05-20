import BasicInfo from "./components/BasicInfo";
import Characteristics from "./components/Characteristics";
import Navbar from "./components/Navbar";
import PostsLinks from "./components/PostsLinks";
import './App.css';
import BreadCrum from "./components/BreadCrum";


function App() {
  return (
    <div>
      <div style={navbarBorderStyle} className="container-fluid">
        <Navbar ></Navbar>
      </div>
     
      <BasicInfo></BasicInfo>
      <Characteristics></Characteristics>
      <PostsLinks></PostsLinks>
    </div>
  );
}

const navbarBorderStyle = {
  boxShadow: '0 3px 8px -4px gray'
}

export default App;
