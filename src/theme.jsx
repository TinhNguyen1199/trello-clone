import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import { cyan, green, red } from "@mui/material/colors";

const theme = extendTheme({
	trello: {
		appBarHeight: "48px",
		boardBarHeight: "58px",
	},
	colorSchemes: {
		light: {
			palette: {
				primary: green,
			},
		},
		dark: {
			palette: {
				primary: cyan,
			},
		},
	},
});
export default theme;
