import { Stack } from "@mui/material";
import "./App.css";
import MainForm from "./components/ui/MainForm";
import Managment from "./components/ui/Managment";
import Header from "./components/ui/Header";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { fetchTableData, sendTableData } from "./store/table-actions";

let isInit = true;

function App() {
    const dispatch = useAppDispatch();
    const table = useAppSelector((state) => state.table);

    useEffect(() => {
        dispatch(fetchTableData());
    }, []);

    useEffect(() => {
        if (isInit) {
            isInit = false;
            return;
        }

        if (table.changed) {
            dispatch(sendTableData(table.visitors));
        }
    }, [table]);

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
