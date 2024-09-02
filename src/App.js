import "./style.css";
import { Icon } from "@iconify/react";
import Navigation from "./Navigation.js";
function App() {
  return (
    <div className="App">
      <Navigation />
      <h1>Main Heading Text</h1>
      <h2>Subheading Text</h2>
      <p>Paragraph Text</p>
      <Icon icon="mdi-light:home" className="home-icon" />
    </div>
  );
}

export default App;
