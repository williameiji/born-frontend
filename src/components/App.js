import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalResetStyle from "../assets/css/GlobalResetStyle.css";
import GlobalStyle from "../assets/css/GlobalStyle";
import Login from "./Login/Login";
import Home from "./Home/Home";
import SearchStudent from "./SearchStudent/SearchStundet";
import SignupStudents from "../SignupStudents/SignupStudents";

export default function App() {
	return (
		<>
			<GlobalResetStyle />
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/home" element={<Home />} />
					<Route path="/students" element={<SearchStudent />} />
					<Route path="/newstudent" element={<SignupStudents />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
