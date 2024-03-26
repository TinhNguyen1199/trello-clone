import Box from "@mui/material/Box";
import React from "react";
import Column from "./Column/Column";
import { Button } from "@mui/material";
import NoteAddIcon from "@mui/icons-material/NoteAdd";

const ListColumn = ({columns}) => {

	return (
		<>
			<Box sx={{ width: "100%", height: "100%", display: "flex", overflowX: "auto", overflowY: "hidden", "&::-webkit-scrollbar-track": { m: 2 } }}>
				{columns?.map(column => <Column key={column._id} columnData={column}/>)}
                
				<Box sx={{
							width: 200,
							height: "fit-content",
							bgcolor:'#ffffff3d',
							mx: 2,
							borderRadius: 1,
						}}>
					<Button
						sx={{color: 'white', width: "100%"}}
						startIcon={<NoteAddIcon />}>
						Add new column
					</Button>
				</Box>
			</Box>
		</>
	);
};

export default ListColumn;
