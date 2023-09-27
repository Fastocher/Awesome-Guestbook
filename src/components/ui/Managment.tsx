import { Box, Checkbox, Container, Typography } from "@mui/material";
import { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { tableActions } from "../../store/table-slice";
import CustomButton from "./CustomButton";
import CustomTable from "./CustomTable";

const Managment = () => {
    const dispatch = useAppDispatch();
    const [checked, setChecked] = useState(false);
    const [error, setError] = useState(false);

    console.log(checked);
    const handle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    const removeClickHandler = () => {
        if (checked) {
            dispatch(tableActions.removeVisitorFromTable());

            setError(false);
            setChecked(false);
        } else {
            setError(true);
        }
    };
    const highlight = !checked && error;

    return (
        <Container sx={{ padding: 3 }} maxWidth="xl">
            <Typography variant="h4" sx={{ paddingTop: 2, paddingBottom: 2 }}>
                Visitor management
            </Typography>

            <Box sx={{ display: "flex", gap: 2, alignItems: "center", padding: 2, paddingLeft: 0.5 }}>
                <Checkbox onClick={handle} checked={checked} sx={{ color: `${highlight ? "red" : ""}` }} />
                <CustomButton onClick={removeClickHandler}>REMOVE</CustomButton>
            </Box>
            <CustomTable />
        </Container>
    );
};

export default Managment;
