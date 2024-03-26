import Box from "@mui/material/Box";
import ListColumn from "./ListColumn/ListColumn";
import { mapOrder } from "~/utils/sort";

const BoardContent = ({board}) => {
	const orderArr = mapOrder(board?.columns, board?.columnOrderIds, '_id')
	return (
		<Box
			sx={{
				height: (theme) => theme.trello.boardContentHeight,
				bgcolor: (theme) => (theme.palette.mode === "dark" ? "#34495e" : "#1976d2"),
				display: "flex",
				overflowX: "auto",
				overflowY: "hidden",
			}}>
			<ListColumn columns={orderArr}/>
		</Box>
	);
};

export default BoardContent;
