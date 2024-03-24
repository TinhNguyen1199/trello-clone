import Box from "@mui/material/Box";
import ModeSelect from "../ModeSelect/ModeSelect";
import AppsIcon from "@mui/icons-material/Apps";
import SvgIcon from "@mui/material/SvgIcon";
import { ReactComponent as TrelloIcon } from "~/assets/trello.svg";
import Typography from "@mui/material/Typography";
import WorkSpaces from "~/pages/Boards/Menus/WorkSpaces";
import Recent from "~/pages/Boards/Menus/Recent";
import Started from "~/pages/Boards/Menus/Started";
import Template from "~/pages/Boards/Menus/Template";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Tooltip from "@mui/material/Tooltip";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Profile from "~/pages/Boards/Menus/Profile";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const AppBar = () => {
	const [searchValue, setSearchValue] = useState("");
	return (
		<Box
			px={2}
			sx={{
				height: (theme) => theme.trello.appBarHeight,
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				gap: 2,
				overflowX: "auto",
				bgcolor: (theme) => (theme.palette.mode === "dark" ? "#2c3e50" : "#1565c0"),
			}}>
			<Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
				<AppsIcon sx={{ color: "white" }} />
				<Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
					<SvgIcon sx={{ color: "white" }} component={TrelloIcon} inheritViewBox />
					<Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }} variant="span">
						Trello
					</Typography>
				</Box>
				<Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
					<WorkSpaces />
					<Recent />
					<Started />
					<Template />
					<Button startIcon={<LibraryAddIcon />} sx={{ color: "white", border: "none", "&:hover": { border: "none" } }} variant="outlined">
						Create
					</Button>
				</Box>
			</Box>
			<Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
				<TextField
					sx={{
						minWidth: 120,
						"& label": { color: "white" },
						"& input": { color: "white" },
						"& label.Mui-focused": { color: "white" },
						"& .MuiOutlinedInput-root": {
							"& fieldset": { borderColor: "white" },
							"&:hover fieldset": { borderColor: "white" },
							"& Mui-focused fieldset": { borderColor: "white" },
						},
					}}
					id="outlined-search"
					size="small"
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<SearchIcon sx={{ color: "white" }} />
							</InputAdornment>
						),
						endAdornment: <CloseIcon onClick={() => setSearchValue("")} sx={{ color: searchValue ? "white" : "transparent" }} />,
					}}
					label="Search field"
					type="text"
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
				/>
				<ModeSelect />
				<Tooltip title="Notification">
					<Badge color="secondary" badgeContent={1} sx={{ cursor: "pointer" }}>
						<NotificationsIcon sx={{ color: "white" }} />
					</Badge>
				</Tooltip>
				<Tooltip title="Help">
					<Badge color="secondary" badgeContent={0} sx={{ cursor: "pointer" }}>
						<HelpOutlineIcon sx={{ color: "white" }} />
					</Badge>
				</Tooltip>
				<Profile />
			</Box>
		</Box>
	);
};

export default AppBar;
