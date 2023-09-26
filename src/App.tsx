import { Stack } from "@mui/material";
import "./App.css";
import MainForm from "./components/ui/MainForm";
import Managment from "./components/ui/Managment";
import Header from "./components/ui/Header";

function App() {
    return (
        <>
            <Header />
            <Stack direction="row" spacing={0}>
                <MainForm />
                <Managment />
            </Stack>
        </>
    );
}

export default App;
