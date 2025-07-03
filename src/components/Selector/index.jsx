import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Selector() {
    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl
                fullWidth
                sx={{
                    "& .MuiInputLabel-root": { color: "#F4F4F9" }, // Label color
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderColor: "#F4F4F9", // Default border
                        },
                        "&:hover fieldset": {
                            borderColor: "#A29BFE", // On hover
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "#A29BFE", // On focus
                        },
                    },
                    "& .MuiSelect-root": {
                        color: "#A29BFE", // Selected text
                    },
                    "& .MuiSvgIcon-root": {
                        color: "#F4F4F9", // Dropdown arrow
                    },
                }}
            >
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
