import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import { cyan, green, red } from "@mui/material/colors";

const theme = extendTheme({
	trello: {
		appBarHeight: "55px",
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
	components: {
		MuiButton: {
		  styleOverrides: {
			root: {
			  textTransform: 'none'
			},
		  },
		},
		MuiInputLabel: {
		  styleOverrides: {
			root: ({theme}) => ({
			  color: theme.palette.primary.main,
			  fontSIze: "0.875rem"
			})
		  },
		},
		MuiOutlinedInput: {
		  styleOverrides: {
			root: ({theme}) => ({
				color: theme.palette.primary.main,
				fontSize: "0.875rem",
				".MuiOutlinedInput-notchedOutline": {
					borderColor: "red"
				},
				'&:hover': {
					".MuiOutlinedInput-notchedOutline": {
						borderColor: "blue"
					},
				},
				"& fieldset": {
					boderWidth: "3px !important"
				}
			})
		  },
		},
	  },
});
export default theme;
