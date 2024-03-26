import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Card, CardActions, CardContent, CardMedia, Tooltip } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import CommentIcon from "@mui/icons-material/Comment";
import AttachmentIcon from "@mui/icons-material/Attachment";
const TrelloCard = ({ cardData }) => {
	const showExpandCard = () => {
		return !!cardData?.attachments?.length || !!cardData?.comments?.length || !!cardData?.memberIds?.length;
	};
	return (
		<>
			<Card sx={{ cursor: "pointer", boxShadow: "0 1px 1px rgba(0,0,0,0.2)", overflow: "unset" }}>
				{cardData?.cover && <CardMedia component="img" alt="green iguana" height="140" image={cardData?.cover} />}
				<CardContent sx={{ p: 1, "&:last-child": { p: 1 } }}>
					<Typography>{cardData?.title}</Typography>
				</CardContent>

				{showExpandCard() && (
					<CardActions sx={{ p: 0.5, display: "flex", justifyContent: "center" }}>
						<Button size="small" startIcon={<GroupIcon />}>
							{cardData?.memberIds?.length}
						</Button>
						<Button size="small" startIcon={<CommentIcon />}>
							{cardData?.comments?.length}
						</Button>
						<Button size="small" startIcon={<AttachmentIcon />}>
							{cardData?.attachments?.length}
						</Button>
					</CardActions>
				)}
			</Card>
		</>
	);
};

export default TrelloCard;
