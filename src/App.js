import './App.css';
import Header from './components/header';
import About from "./components/about"
import Footer from './components/footer';
import Sections from './components/sections';
function App() {
    return (
        <div className="App">
            <Header />
            <About />
            <Sections />
            <Footer />
        </div>
    )
}

export default App;
