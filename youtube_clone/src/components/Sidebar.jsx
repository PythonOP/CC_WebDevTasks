import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
import { Category } from "@mui/icons-material";

const Sidebar = () => (
    <Stack
    direction='row'
    sx={{
        overflowY:"auto",
        height:{ sx:'auto',md:'95%'},
        flexDirection:{ md:'column'},
    }}
    >
        {categories.map((Category) =>(
            <button>
                <span>{Category.icon}</span>
                <span>{Category.name}</span>
            </button>
        ))}
    </Stack>
);

export default Sidebar