import './App.css';
import Header from './components/header';
import About from "./components/about"
import Footer from './components/footer';
import Resume from './components/resume';
function App() {
    return (
        <div className="App">
            <Header />
            <About />
            <Resume />
            <Footer />
        </div>
    )
}

export default App;
