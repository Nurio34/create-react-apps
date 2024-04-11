import GlobalApp from "./GlobalApp";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <GlobalApp>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/create-react-apps/*" element={<Main />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </GlobalApp>
    );
}

export default App;
