// import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import { Home } from "./Home/Home"
import About from "./components/about"
function App() {
    return (
        <div className="App">
            <Header />
            <About />
            <Home />
        </div>
    )
}

export default App;
