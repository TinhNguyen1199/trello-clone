import Box from "@mui/material/Box";
import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import ContentCut from "@mui/icons-material/ContentCut";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import Cloud from "@mui/icons-material/Cloud";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Tooltip } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddCardIcon from "@mui/icons-material/AddCard";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import ListCard from "./ListCard/ListCard";
import { mapOrder } from "~/utils/sort";

const Column = ({ columnData }) => {
	const orderArrCard = mapOrder(columnData?.cards, columnData?.cardOrderIds, "_id");

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			{/* Board column */}
			<Box
				sx={{
					width: 300,
					height: "fit-content",
					bgcolor: (theme) => (theme.palette.mode === "dark" ? "#333643" : "#ebecf0"),
					ml: 2,
					borderRadius: 1,
					maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(2)})`,
				}}>
				{/* Header */}
				<Box sx={{ p: 2, display: "flex", justifyContent: "space-between", alignItems: "center", height: (theme) => theme.trello.taskColumnHeader }}>
					<Typography sx={{ fontWeight: "bold", cursor: "pointer" }}>Column title</Typography>
					<Tooltip title="More option">
						<ExpandMoreIcon
							sx={{ color: "text.primary", cursor: "pointer" }}
							id="basic-button-column-dropdown"
							aria-controls={open ? "basic-menu-column-header" : undefined}
							aria-haspopup="true"
							aria-expanded={open ? "true" : undefined}
							onClick={handleClick}
						/>
					</Tooltip>
					<Menu
						id="basic-menu"
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						MenuListProps={{
							"aria-labelledby": "basic-button-column-dropdown",
						}}>
						<MenuList>
							<MenuItem>
								<ListItemIcon>
									<AddCardIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText>Add new card</ListItemText>
							</MenuItem>
							<MenuItem>
								<ListItemIcon>
									<ContentCopy fontSize="small" />
								</ListItemIcon>
								<ListItemText>Copy</ListItemText>
							</MenuItem>
							<MenuItem>
								<ListItemIcon>
									<ContentCut fontSize="small" />
								</ListItemIcon>
								<ListItemText>Cut</ListItemText>
							</MenuItem>
							<MenuItem>
								<ListItemIcon>
									<ContentPaste fontSize="small" />
								</ListItemIcon>
								<ListItemText>Paste</ListItemText>
							</MenuItem>

							<Divider />
							<MenuItem>
								<ListItemIcon>
									<DeleteForeverIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText>Remove this column</ListItemText>
							</MenuItem>
							<MenuItem>
								<ListItemIcon>
									<Cloud fontSize="small" />
								</ListItemIcon>
								<ListItemText>Archive this column</ListItemText>
							</MenuItem>
						</MenuList>
					</Menu>
				</Box>

				{/* Card list */}
				<ListCard cards={orderArrCard} />

				{/* Footer */}
				<Box sx={{ p: 2, display: "flex", justifyContent: "space-between", alignItems: "center", height: (theme) => theme.trello.taskColumnFooter }}>
					<Button startIcon={<AddCardIcon />}>Add new card</Button>
					<Tooltip title="Drag to move">
						<DragHandleIcon sx={{ cursor: "pointer" }} />
					</Tooltip>
				</Box>
			</Box>
		</>
	);
};

export default Column;
