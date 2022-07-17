import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import GlobalResetStyle from "../assets/css/GlobalResetStyle.css";
import GlobalStyle from "../assets/css/GlobalStyle";
import Login from "./Login/Login";
import Home from "./Home/Home";
import SearchStudent from "./SearchStudent/SearchStundet";
import SignupStudents from "./SignupStudents/SignupStudents";
import ShowInformation from "./SearchStudent/ShowInformation";
import EditStudentInformation from "./EditStudentInformation/EditStudentInformation";
import Receipt from "./Receipt/Receipt";

export default function App() {
	const [renderFinds, setRenderFinds] = useState([]);
	const [editInformation, setEditInformation] = useState({});
	return (
		<>
			<GlobalResetStyle />
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/home" element={<Home />} />
					<Route
						path="/students"
						element={
							<SearchStudent
								setRenderFinds={setRenderFinds}
								renderFinds={renderFinds}
							/>
						}
					/>
					<Route path="/newstudent" element={<SignupStudents />} />
					<Route
						path="/studentinfo/:id"
						element={
							<ShowInformation
								renderFinds={renderFinds}
								setEditInformation={setEditInformation}
							/>
						}
					/>
					<Route
						path="/edit"
						element={
							<EditStudentInformation
								editInformation={editInformation}
								setEditInformation={setEditInformation}
								setRenderFinds={setRenderFinds}
							/>
						}
					/>
					<Route path="/receipt" element={<Receipt />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
