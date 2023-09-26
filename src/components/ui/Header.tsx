import { Typography, AppBar, Box, Toolbar, ThemeProvider } from "@mui/material";
import { theme } from "./Theme";

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <ThemeProvider theme={theme}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            News
                        </Typography>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </Box>
    );
};

export default Header;
