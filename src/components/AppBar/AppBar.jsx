import Box from "@mui/material/Box";
import ModeSelect from "../ModeSelect/ModeSelect";

const AppBar = () => {
	return (
		<Box sx={{ height: (theme) => theme.trello.appBarHeight, backgroundColor: "primary.light", display: "flex", alignItems: "center" }}>
			<ModeSelect />
		</Box>
	);
};

export default AppBar;
