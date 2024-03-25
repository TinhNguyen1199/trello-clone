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
import { Card, CardActions, CardContent, CardMedia, Tooltip } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddCardIcon from "@mui/icons-material/AddCard";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import GroupIcon from "@mui/icons-material/Group";
import CommentIcon from "@mui/icons-material/Comment";
import AttachmentIcon from "@mui/icons-material/Attachment";
import theme from "~/theme";

const TASK_COLUMN_HEADER = "56px";
const TASK_COLUMN_FOOTER = "50px";

const BoardContent = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Box
			sx={{
				height: (theme) => theme.trello.boardContentHeight,
				bgcolor: (theme) => (theme.palette.mode === "dark" ? "#34495e" : "#1976d2"),
				display: "flex",
				overflowX: "auto",
				overflowY: "hidden",
			}}>
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
				<Box sx={{ p: 2, display: "flex", justifyContent: "space-between", alignItems: "center", height: TASK_COLUMN_HEADER }}>
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
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: 1,
						p: "0 5px",
						m: "0 5px",
						overflowY: "auto",
						maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(2)} - ${TASK_COLUMN_HEADER} - ${TASK_COLUMN_FOOTER})`,
					}}>
					<Card sx={{ cursor: "pointer", boxShadow: "0 1px 1px rgba(0,0,0,0.2)", overflow: "unset" }}>
						<CardMedia
							component="img"
							alt="green iguana"
							height="140"
							image="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
						/>
						<CardContent sx={{ p: 1, "&:last-child": { p: 1 } }}>
							<Typography>Tinh Nguyen work</Typography>
						</CardContent>
						<CardActions sx={{ p: 0.5, display: "flex", justifyContent: "center" }}>
							<Button size="small" startIcon={<GroupIcon />}>
								10
							</Button>
							<Button size="small" startIcon={<CommentIcon />}>
								15
							</Button>
							<Button size="small" startIcon={<AttachmentIcon />}>
								5
							</Button>
						</CardActions>
					</Card>
					<Card sx={{ cursor: "pointer", boxShadow: "0 1px 1px rgba(0,0,0,0.2)", overflow: "unset" }}>
						<CardContent sx={{ p: 1, "&:last-child": { p: 1 } }}>
							<Typography>Card 1</Typography>
						</CardContent>
					</Card>
					<Card sx={{ cursor: "pointer", boxShadow: "0 1px 1px rgba(0,0,0,0.2)", overflow: "unset" }}>
						<CardContent sx={{ p: 1, "&:last-child": { p: 1 } }}>
							<Typography>Card 1</Typography>
						</CardContent>
					</Card>
					<Card sx={{ cursor: "pointer", boxShadow: "0 1px 1px rgba(0,0,0,0.2)", overflow: "unset" }}>
						<CardContent sx={{ p: 1, "&:last-child": { p: 1 } }}>
							<Typography>Card 1</Typography>
						</CardContent>
					</Card>
					<Card sx={{ cursor: "pointer", boxShadow: "0 1px 1px rgba(0,0,0,0.2)", overflow: "unset" }}>
						<CardContent sx={{ p: 1, "&:last-child": { p: 1 } }}>
							<Typography>Card 1</Typography>
						</CardContent>
					</Card>
					<Card sx={{ cursor: "pointer", boxShadow: "0 1px 1px rgba(0,0,0,0.2)", overflow: "unset" }}>
						<CardContent sx={{ p: 1, "&:last-child": { p: 1 } }}>
							<Typography>Card 1</Typography>
						</CardContent>
					</Card>
					<Card sx={{ cursor: "pointer", boxShadow: "0 1px 1px rgba(0,0,0,0.2)", overflow: "unset" }}>
						<CardContent sx={{ p: 1, "&:last-child": { p: 1 } }}>
							<Typography>Card 1</Typography>
						</CardContent>
					</Card>
					<Card sx={{ cursor: "pointer", boxShadow: "0 1px 1px rgba(0,0,0,0.2)", overflow: "unset" }}>
						<CardContent sx={{ p: 1, "&:last-child": { p: 1 } }}>
							<Typography>Card 1</Typography>
						</CardContent>
					</Card>
					<Card sx={{ cursor: "pointer", boxShadow: "0 1px 1px rgba(0,0,0,0.2)", overflow: "unset" }}>
						<CardContent sx={{ p: 1, "&:last-child": { p: 1 } }}>
							<Typography>Card 1</Typography>
						</CardContent>
					</Card>
					<Card sx={{ cursor: "pointer", boxShadow: "0 1px 1px rgba(0,0,0,0.2)", overflow: "unset" }}>
						<CardContent sx={{ p: 1, "&:last-child": { p: 1 } }}>
							<Typography>Card 1</Typography>
						</CardContent>
					</Card>
				</Box>

				{/* Footer */}
				<Box sx={{ p: 2, display: "flex", justifyContent: "space-between", alignItems: "center", height: TASK_COLUMN_FOOTER }}>
					<Button startIcon={<AddCardIcon />}>Add new card</Button>
					<Tooltip title="Drag to move">
						<DragHandleIcon sx={{ cursor: "pointer" }} />
					</Tooltip>
				</Box>
			</Box>
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
				<Box sx={{ p: 2, display: "flex", justifyContent: "space-between", alignItems: "center", height: TASK_COLUMN_HEADER }}>
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
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: 1,
						p: "0 5px",
						m: "0 5px",
						overflowY: "auto",
						maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(2)} - ${TASK_COLUMN_HEADER} - ${TASK_COLUMN_FOOTER})`,
					}}>
					<Card sx={{ cursor: "pointer", boxShadow: "0 1px 1px rgba(0,0,0,0.2)", overflow: "unset" }}>
						<CardMedia
							component="img"
							alt="green iguana"
							height="140"
							image="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
						/>
						<CardContent sx={{ p: 1, "&:last-child": { p: 1 } }}>
							<Typography>Tinh Nguyen work</Typography>
						</CardContent>
						<CardActions sx={{ p: 0.5, display: "flex", justifyContent: "center" }}>
							<Button size="small" startIcon={<GroupIcon />}>
								10
							</Button>
							<Button size="small" startIcon={<CommentIcon />}>
								15
							</Button>
							<Button size="small" startIcon={<AttachmentIcon />}>
								5
							</Button>
						</CardActions>
					</Card>
					<Card sx={{ cursor: "pointer", boxShadow: "0 1px 1px rgba(0,0,0,0.2)", overflow: "unset" }}>
						<CardContent sx={{ p: 1, "&:last-child": { p: 1 } }}>
							<Typography>Card 1</Typography>
						</CardContent>
					</Card>
				</Box>

				{/* Footer */}
				<Box sx={{ p: 2, display: "flex", justifyContent: "space-between", alignItems: "center", height: TASK_COLUMN_FOOTER }}>
					<Button startIcon={<AddCardIcon />}>Add new card</Button>
					<Tooltip title="Drag to move">
						<DragHandleIcon sx={{ cursor: "pointer" }} />
					</Tooltip>
				</Box>
			</Box>
		</Box>
	);
};

export default BoardContent;
