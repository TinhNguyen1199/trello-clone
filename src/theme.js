import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const theme = extendTheme({
	trello: {
		appBarHeight: "55px",
		boardBarHeight: "58px",
	},
	colorSchemes: {
		// light: {
		// 	palette: {
		// 		primary: green,
		// 	},
		// },
		// dark: {
		// 	palette: {
		// 		primary: cyan,
		// 	},
		// },
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					"*::-webkit-scrollbar": {
						width: "8px",
						height: "8px",
					},
					"*::-webkit-scrollbar-thumb ": {
						background: "#bdc3c7",
						borderRadius: '8px'
					},
					"*::-webkit-scrollbar-thumb:hover ": {
						background: "#27ae60",
					},
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: "none",
				},
			},
		},
		MuiInputLabel: {
			styleOverrides: {
				root: ({ theme }) => ({
					// color: theme.palette.primary.main,
					fontSIze: "0.875rem",
				}),
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: ({ theme }) => ({
					// color: theme.palette.primary.main,
					// fontSize: "0.875rem",
					// ".MuiOutlinedInput-notchedOutline": {
					// 	borderColor: "red",
					// },
					// "&:hover": {
					// 	".MuiOutlinedInput-notchedOutline": {
					// 		borderColor: "blue",
					// 	},
					// },
					"& fieldset": {
						boderWidth: "0.5px !important",
					},
					"&:hover fieldset": {
						boderWidth: "1.5px !important",
					},
					"&.Mui-focused fieldset": {
						boderWidth: "1.5px !important",
					},
				}),
			},
		},
	},
});
export default theme;
