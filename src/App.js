import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar'
import profileimg from './assets/img/IMG_20171021_234301.jpg'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Sidebar {...props}/>
    </div>
  );
}
const brandprops = {
  image: profileimg,
  title: "Evelyn Kuo",
  description: "GIS Web Developer",
  list: [
    {
      icon: "fas fa-utensils",
      color: "lightBlue",
      text: "Real Foodie",
    },
    { icon: "fas fa-running", color: "emerald", text: "Yoga Lover" },
    {
      icon: "fab fa-github",
      color: "cyan",
      text: "github.com/yilingkuo",
    },
    {
      icon: "fab fa-linkedin-in",
      color: "cyan",
      text: "github.com/yilingkuo",
    },
  ],
}
const props = {
  brand: brandprops,
  activeColor: "lightBlue",
  items: [
    { divider: true },
    { title: "專案經驗" },
    {
      icon: "fas fa-tv",
      text: "Emergency Data Platform (EDP)",
      active: true,
      link: { href: "#pablo" },
    },
    {
      icon: "fas fa-tools",
      text: "Page 2 for Section 1",
      link: { href: "#pablo" },
    },
    {
      icon: "fas fa-table",
      text: "Page 3 for Section 1",
      link: { href: "#pablo" },
    },
    { divider: true },
    { title: "Side Project" },
    {
      icon: "fas fa-map-marked",
      text: "Taiwan COVID 3D Visualization",
      link: { href: "https://github.com/yilingkuo" },
    },
    {
      icon: "fas fa-fingerprint",
      text: "Page 2 for Section 2",
      link: { href: "#pablo" },
    },
    {
      icon: "fas fa-clipboard-list",
      text: "Page 3 for Section 2",
      link: { href: "#pablo" },
    },
  ],
}

export default App;
