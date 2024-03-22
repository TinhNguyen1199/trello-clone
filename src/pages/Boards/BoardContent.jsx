import Box from "@mui/material/Box";
import React from "react";

const BoardContent = () => {
	return (
		<Box
			sx={{
				height: (theme) => `calc(100vh - (${theme.trello.appBarHeight} + ${theme.trello.boardBarHeight}))`,
				backgroundColor: "primary.main",
				display: "flex",
				alignItems: "center",
			}}></Box>
	);
};

export default BoardContent;
