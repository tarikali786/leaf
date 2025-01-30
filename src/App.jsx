import "./App.css";
import HomeImg from "./assets/logo.png";
import Typewriter from "typewriter-effect";
function App() {
  return (
    <div className="app">
      <div className="content">
        <div className="logo-card">
          <img src={HomeImg} alt="Halo Leaf Logo" className="logo" />
        </div>
        <h1 className="">
          <Typewriter
            options={{
              strings: ["Website Coming Soon..."],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      </div>
    </div>
  );
}

export default App;
