import { useColorScheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import Box from "@mui/material/Box";

const ModeSelect = () => {
	const { mode, setMode } = useColorScheme();

	const handleChange = (event) => {
		setMode(event.target.value);
	};

	return (
		<>
			<FormControl sx={{ minWidth: 120 }} size="small">
				<InputLabel sx={{ color: "white", '&.Mui-focused': {color: 'white'} }} id="demo-select-small-label">
					Mode
				</InputLabel>
				<Select
					labelId="demo-select-small-label"
					id="demo-select-small"
					value={mode}
					label="Mode"
					sx={{ color: "white", 
					".MuiOutlinedInput-notchedOutline": { borderColor: "white" }, 
					"&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "white" }, 
					"&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "white" }, 
					'.MuiSvgIcon-root': {color: 'white'}
				}}
					onChange={handleChange}>
					<MenuItem value={"light"}>
						<Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}>
							<LightModeIcon fontSize="small" />
							Light
						</Box>
					</MenuItem>
					<MenuItem value={"dark"}>
						<Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}>
							<DarkModeIcon fontSize="small" /> Dark
						</Box>
					</MenuItem>
					<MenuItem value={"system"}>
						<Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}>
							<SettingsBrightnessIcon fontSize="small" /> System
						</Box>
					</MenuItem>
				</Select>
			</FormControl>
		</>
	);
};

export default ModeSelect;
