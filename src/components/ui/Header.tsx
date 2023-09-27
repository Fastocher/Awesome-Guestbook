import { Typography, AppBar, Box, Toolbar } from "@mui/material";

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Application
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
