import { Box, Checkbox, FormControlLabel, FormGroup, Grid, MenuItem, TextField, Typography } from "@mui/material";
import { useState } from "react";

import useInput from "../../hooks/useInput";
import { Visitor } from "./CustomTable";
import { tableActions } from "../../store/table-slice";
import { useAppDispatch } from "../../store/hooks";
import CustomButton from "./CustomButton";

const departments = [
    { value: "Marketing", label: "Marketing" },
    { value: "IT", label: "IT" },
    { value: "Sales", label: "Sales" },
    { value: "Managment", label: "Managment" },
    { value: "Accounting", label: "Accounting" },
];

const MainForm = () => {
    const [department, setDepartment] = useState(departments[0].value);
    const [checked, setChecked] = useState(false);

    const dispatch = useAppDispatch();

    const {
        enteredValue: enteredName,
        enteredValueHandler: nameChangeHandler,
        isTouchedHandler: nameIsTouchedHandler,
        isValid: nameIsValid,
        reset: resetName,
    } = useInput((value: string) => value.trim() !== "");

    const {
        enteredValue: enteredEmail,
        enteredValueHandler: emailChangeHandler,
        isTouchedHandler: emailIsTouchedHandler,
        isValid: emailIsValid,
        reset: resetEmail,
    } = useInput((value: string) => value.includes("@"));

    const checkBoxChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    const resetButtonHandler = () => {
        setChecked(false);
        setDepartment(departments[0].value);
        resetName();
        resetEmail();
    };

    const depChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setDepartment(event.target.value as string);
    };

    let formValid = false;

    if (nameIsValid && emailIsValid) {
        formValid = true;
    } else {
        formValid = false;
    }

    const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!formValid) return;

        const data: Visitor = { visitor: enteredName, email: enteredEmail, department: department };

        dispatch(tableActions.addVisitorToTable(data));

        resetButtonHandler();
    };

    return (
        <Box
            component="form"
            onSubmit={formSubmitHandler}
            sx={{ minWidth: "400px", gap: 3, display: "flex", flexDirection: "column", padding: "26px 24px" }}
        >
            <Typography variant="h6" paddingBottom={"7px"}>
                Add new visitor
            </Typography>
            <TextField
                required
                label="Full name"
                value={enteredName}
                onBlur={nameIsTouchedHandler}
                onChange={nameChangeHandler}
                fullWidth
            />
            <TextField
                required
                type="email"
                label="Email address"
                value={enteredEmail}
                onChange={emailChangeHandler}
                onBlur={emailIsTouchedHandler}
                fullWidth
            />
            <TextField select fullWidth label="Department" value={department} onChange={depChangeHandler}>
                {departments.map((department) => (
                    <MenuItem key={department.value} value={department.value}>
                        {department.label}
                    </MenuItem>
                ))}
            </TextField>
            <FormGroup>
                <FormControlLabel
                    checked={checked}
                    required
                    control={<Checkbox onChange={checkBoxChangeHandler} />}
                    label="I agree to be added to the table"
                />
            </FormGroup>
            <Grid container spacing={3}>
                <Grid item xs="auto">
                    <CustomButton variant="outlined" onClick={resetButtonHandler}>
                        RESET FORM
                    </CustomButton>
                </Grid>
                <Grid item xs>
                    <CustomButton type="submit" fullWidth>
                        Add new Visitor
                    </CustomButton>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MainForm;
