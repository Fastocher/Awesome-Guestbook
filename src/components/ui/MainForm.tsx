import {
    Box,
    Button,
    ButtonProps,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Grid,
    MenuItem,
    TextField,
    ThemeProvider,
    Typography,
    styled,
} from "@mui/material";
import { useState } from "react";
import { theme } from "./Theme";

const departments = [
    { value: "Marketing", label: "Marketing" },
    { value: "IT", label: "IT" },
    { value: "Sales", label: "Sales" },
    { value: "Managment", label: "Managment" },
    { value: "Accounting", label: "Accounting" },
];

export const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(theme.palette.primary.main),
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
        backgroundColor: theme.palette.primary.main,
    },
}));

const MainForm = () => {
    const [department, setDepartment] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        console.log(event.target.value);
        setDepartment(event.target.value as string);
    };

    return (
        <Box
            component="form"
            sx={{ minWidth: "400px", gap: 3, display: "flex", flexDirection: "column", padding: "26px 24px" }}
        >
            <ThemeProvider theme={theme}>
                <Typography variant="h6" paddingBottom={"7px"}>
                    Add new visitor
                </Typography>
                <TextField label="Full name" value={"John"} fullWidth />
                <TextField label="Email address *" value={"john@mail.com"} fullWidth />
                <TextField select fullWidth label="Department" value={department} onChange={handleChange}>
                    {departments.map((department) => (
                        <MenuItem key={department.value} value={department.value}>
                            {department.label}
                        </MenuItem>
                    ))}
                </TextField>
                <FormGroup>
                    <FormControlLabel required control={<Checkbox />} label="I agree to be added to the table" />
                </FormGroup>
                <Grid container spacing={3}>
                    <Grid item xs="auto">
                        <Button
                            variant="outlined"
                            sx={{
                                color: theme.palette.primary.main,
                                borderColor: theme.palette.primary.light,
                                ":hover": { borderColor: theme.palette.primary.light },
                            }}
                        >
                            RESET FORM
                        </Button>
                    </Grid>
                    <Grid item xs>
                        <ColorButton variant="contained" fullWidth>
                            Add new Visitor
                        </ColorButton>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </Box>
    );
};

export default MainForm;
