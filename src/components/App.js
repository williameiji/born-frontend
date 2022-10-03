import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import GlobalResetStyle from "../assets/css/GlobalResetStyle.css";
import GlobalStyle from "../assets/css/GlobalStyle";
import Login from "./Login/Login";
import Home from "./Home/Home";
import SearchStudent from "./SearchStudent/SearchStudent";
import NewStudentsScreen from "./NewStudents/NewStudentsScreen";
import ShowInformation from "./SearchStudent/ShowInformation";
import EditStudentInformation from "./EditStudentInformation/EditStudentInformation";
import Receipt from "./Receipt/Receipt";
import SignupScreen from "./Signup/SignupScreen";
import Declaration from "./Declaration/Declaration";
import UserContext from "./Contexts/UserContext";
import ModalContext from "./Contexts/ModalContext";

export default function App() {
	const [renderFinds, setRenderFinds] = useState([]);
	const [editInformation, setEditInformation] = useState({});
	const [userData, setUserData] = useState(null);
	const [modalStatus, setModalStatus] = useState({ status: "", message: "" });

	return (
		<>
			<GlobalResetStyle />
			<GlobalStyle />
			<BrowserRouter>
				<UserContext.Provider value={{ userData, setUserData }}>
					<ModalContext.Provider value={{ modalStatus, setModalStatus }}>
						<Routes>
							<Route path="/" element={<Login />} />
							<Route path="/signup" element={<SignupScreen />} />
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
							<Route path="/newstudent" element={<NewStudentsScreen />} />
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
							<Route path="/declaration" element={<Declaration />} />
						</Routes>
					</ModalContext.Provider>
				</UserContext.Provider>
			</BrowserRouter>
		</>
	);
}
