import { tableActions } from "./table-slice";
import { Visitor } from "../components/ui/CustomTable";
import { AppDispatch } from ".";

export const fetchTableData = () => {
    return (dispatch: AppDispatch) => {
        const fetchData = (): Visitor[] => {
            const data = localStorage.getItem("visitors");

            if (!data) return [];

            return JSON.parse(data);
        };

        try {
            const tableData = fetchData();
            dispatch(tableActions.updateVisitors(tableData));
        } catch (error) {
            //notify about error
        }
    };
};

export const sendTableData = (visitors: Visitor[]) => {
    return (dispatch: AppDispatch) => {
        // notify that loading...

        const sendRequest = () => {
            localStorage.setItem("visitors", JSON.stringify(visitors));
        };

        try {
            sendRequest();

            // notify that success...
        } catch (error) {
            // notify that failed...
        }
    };
};
