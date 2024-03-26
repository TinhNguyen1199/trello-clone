import Box from "@mui/material/Box";
import React from "react";
import TrelloCard from "./Card/TrelloCard";

const ListCard = ({ cards }) => {
	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: 1,
					p: "0 5px",
					m: "0 5px",
					overflowY: "auto",
					maxHeight: (theme) =>
						`calc(${theme.trello.boardContentHeight} - ${theme.spacing(2)} - ${theme.trello.taskColumnHeader} - ${theme.trello.taskColumnFooter})`,
				}}>
				{cards.map((card) => (
					<TrelloCard key={card?._id} cardData={card} />
				))}
			</Box>
		</>
	);
};

export default ListCard;
