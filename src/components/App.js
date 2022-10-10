import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import GlobalResetStyle from "../assets/css/GlobalResetStyle.css";
import GlobalStyle from "../assets/css/GlobalStyle";
import Login from "./Login/Login";
import Home from "./Home/Home";
import SearchStudent from "./SearchStudent/SearchStudent";
import NewStudentsScreen from "./NewStudents/NewStudentsScreen";
import EditStudentInformation from "./EditStudentInformation/EditStudentInformation";
import Receipt from "./Receipt/Receipt";
import SignupScreen from "./Signup/SignupScreen";
import Declaration from "./Declaration/Declaration";
import UserContext from "./Contexts/UserContext";
import ModalContext from "./Contexts/ModalContext";
import MenuScreen from "./SearchStudent/MenuScreen";
import PaymentScreen from "./Payment/PaymentScreen";
import InitialScreen from "./InitialScreen/InitialScreen";

export default function App() {
	const [renderFinds, setRenderFinds] = useState([]);
	const [editInformation, setEditInformation] = useState(null);
	const [userData, setUserData] = useState(localStorage?.getItem("token"));
	const [modalStatus, setModalStatus] = useState(null);

	return (
		<>
			<GlobalResetStyle />
			<GlobalStyle />
			<BrowserRouter>
				<UserContext.Provider value={{ userData, setUserData }}>
					<ModalContext.Provider value={{ modalStatus, setModalStatus }}>
						<Routes>
							<Route path="/" element={<InitialScreen />} />
							<Route path="/login" element={<Login />} />
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
							<Route
								path="/newstudent"
								element={<NewStudentsScreen setRenderFinds={setRenderFinds} />}
							/>
							<Route
								path="/studentinfo/:id"
								element={
									<MenuScreen
										renderFinds={renderFinds}
										setEditInformation={setEditInformation}
										setRenderFinds={setRenderFinds}
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
							<Route path="/payment" element={<PaymentScreen />} />
						</Routes>
					</ModalContext.Provider>
				</UserContext.Provider>
			</BrowserRouter>
		</>
	);
}
