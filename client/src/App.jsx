import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Button } from "flowbite-react";

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Button text-red-400>Click me</Button>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    );
}
