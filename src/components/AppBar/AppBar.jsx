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
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Profile from "~/pages/Boards/Menus/Profile";

const AppBar = () => {
	return (
		<Box px={2} sx={{ height: (theme) => theme.trello.appBarHeight, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
			<Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
				<AppsIcon sx={{ color: "primary.main" }} />
				<Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
					<SvgIcon sx={{ color: "primary.main" }} component={TrelloIcon} inheritViewBox />
					<Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }} variant="span">
						Trello
					</Typography>
				</Box>
				<WorkSpaces />
				<Recent />
				<Started />
				<Template />
				<Button variant="outlined">Create</Button>
			</Box>
			<Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
				<TextField id="outlined-search" size="small" label="Search field" type="search" />
				<ModeSelect />
				<Tooltip title="Notification">
					<Badge color="secondary" badgeContent={1} sx={{cursor: 'pointer'}}>
						<NotificationsIcon sx={{color: 'primary.main'}} />
					</Badge>
				</Tooltip>
				<Tooltip title="Help">
					<Badge color="secondary" badgeContent={0} sx={{cursor: 'pointer'}}>
						<HelpOutlineIcon sx={{color: 'primary.main'}} />
					</Badge>
				</Tooltip>
				<Profile />
			</Box>
		</Box>
	);
};

export default AppBar;
