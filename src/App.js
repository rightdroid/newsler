import './App.css';
import { BrowserRouter } from "react-router-dom";
import Header from './components/Header'
import Body from './components/Body'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Body />
            </div>
        </BrowserRouter>
    );
}

export default App;
