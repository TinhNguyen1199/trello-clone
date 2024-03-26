import Box from "@mui/material/Box";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Chip from "@mui/material/Chip";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import BoltIcon from "@mui/icons-material/Bolt";
import FilterListIcon from "@mui/icons-material/FilterList";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const MENU_STYLE = {
	color: "white",
	bgcolor: "transparent",
	border: "none",
	px: "5px",
	borderRadius: "4px",
	"& .MuiSvgIcon-root": { color: "white" },
	"&:hover": { bgcolor: "primary.50" },
};

const BoardBar = ({board}) => {
	return (
		<Box
			sx={{
				height: (theme) => theme.trello.boardBarHeight,
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				gap: 2,
				overflowX: "auto",
				px: 2,
				// borderBottom: "1px solid #00bfa5",
				bgcolor: (theme) => (theme.palette.mode === "dark" ? "##34495e" : "#1976d2"),
			}}>
			<Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
				<Chip sx={MENU_STYLE} icon={<DashboardIcon />} label={board.title} clickable />
				<Chip sx={MENU_STYLE} icon={<VpnLockIcon />} label={board.type} clickable />
				<Chip sx={MENU_STYLE} icon={<AddToDriveIcon />} label="Add to google drive" clickable />
				<Chip sx={MENU_STYLE} icon={<BoltIcon />} label="Automation" clickable />
				<Chip sx={MENU_STYLE} icon={<FilterListIcon />} label="Filter" clickable />
			</Box>
			<Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
				<Button startIcon={<PersonAddIcon />} variant="outlined" sx={{ color: "white", borderColor: "white", "&:hover": { borderColor: "white" } }}>
					Invite
				</Button>

				<AvatarGroup max={3} sx={{ "& .MuiAvatar-root": { width: 28, height: 28, fontSize: 16 } }}>
					<Tooltip title="Tinh Nguyen">
						<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
					</Tooltip>
					<Tooltip title="Tinh Nguyen">
						<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
					</Tooltip>
					<Tooltip title="Tinh Nguyen">
						<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
					</Tooltip>
					<Tooltip title="Tinh Nguyen">
						<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
					</Tooltip>
				</AvatarGroup>
			</Box>
		</Box>
	);
};

export default BoardBar;
