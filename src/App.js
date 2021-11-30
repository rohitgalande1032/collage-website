import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path ='/' component={Home}></Route>
                    <Route exact path ='/about' component={About}></Route>
                </Routes>
            </Router>
        </>
    )
}

export default App;
