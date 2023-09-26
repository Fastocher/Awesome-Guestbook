import { Box, Checkbox, Container, ThemeProvider, Typography } from "@mui/material";
import CustomTable from "./CustomTable";
import { ColorButton } from "./MainForm";
import { theme } from "./Theme";

const Managment = () => {
    return (
        <Container sx={{ padding: 3 }}>
            <ThemeProvider theme={theme}>
                <Box paddingTop={2} paddingBottom={2}>
                    <Typography variant="h4">Visitor management</Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 2, alignItems: "center", paddingTop: 2, paddingBottom: 2 }}>
                    <Checkbox />
                    <ColorButton>REMOVE</ColorButton>
                </Box>
                <CustomTable />
            </ThemeProvider>
        </Container>
    );
};

export default Managment;
