import { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import Home from "./Index";
import ShowInformation from "../../layouts/Dashboard/SearchStudent/ShowInformation";
import ShowPayments from "../../layouts/Dashboard/SearchStudent/ShowPayments";
import { useParams } from "react-router-dom";

import EditContext from "../../contexts/EditInformationContext";
import { TEditForm } from "../../layouts/Dashboard/EditStudentInformation/types";

type TMenu = {
	setRenderFinds: React.Dispatch<React.SetStateAction<[]>>;
	renderFinds: TEditForm[];
};

export default function MenuScreen({ renderFinds, setRenderFinds }: TMenu) {
	const [value, setValue] = useState("1");
	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};
	const params = useParams();
	const informationToEdit = useContext(EditContext);

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
							setEditInformation={informationToEdit.setEditInformation}
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
