import Box from "@mui/material/Box";

const BoardBar = () => {
	return (
		<Box sx={{ height: (theme) => theme.trello.boardBarHeight, backgroundColor: "primary.dark", display: "flex", alignItems: "center" }}>
			Board Bar
		</Box>
	);
};

export default BoardBar;
