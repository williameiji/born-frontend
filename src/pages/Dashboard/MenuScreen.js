import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import Home from "./Index";
import ShowInformation from "../../layouts/SearchStudent/ShowInformation";
import ShowPayments from "../../layouts/SearchStudent/ShowPayments";
import { useParams } from "react-router-dom";

export default function MenuScreen({
	renderFinds,
	setEditInformation,
	setRenderFinds,
}) {
	const [value, setValue] = useState("1");
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const params = useParams();

	return (
		<Home>
			<Box sx={{ width: "100%", typography: "body1", ml: "10px", mr: "10px" }}>
				<TabContext value={value}>
					<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
						<TabList onChange={handleChange} aria-label="lab API tabs example">
							<Tab label="Informações do Aluno" value="1" />
							<Tab label="Pagamentos realizados" value="2" />
						</TabList>
					</Box>
					<TabPanel value="1">
						<ShowInformation
							renderFinds={renderFinds}
							setEditInformation={setEditInformation}
							setRenderFinds={setRenderFinds}
						/>
					</TabPanel>
					<TabPanel value="2">
						<ShowPayments renderFinds={renderFinds} params={params.id} />
					</TabPanel>
				</TabContext>
			</Box>
		</Home>
	);
}
