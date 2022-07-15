import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalResetStyle from "../assets/css/GlobalResetStyle.css";
import GlobalStyle from "../assets/css/GlobalStyle";
import Login from "./Login/Login";
import Home from "./Home/Home";
import SearchStudent from "./SearchStudent/SearchStundet";

export default function App() {
	return (
		<>
			<GlobalResetStyle />
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/home" element={<Home />} />
					<Route path="/students" element={<SearchStudent />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
