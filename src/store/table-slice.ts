import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Visitor } from "../components/ui/CustomTable";

const tableSlice = createSlice({
    name: "table",
    initialState: {
        visitors: [] as Visitor[],
        selected: [] as string[],
        changed: false,
    },
    reducers: {
        addVisitorToTable(state, action: PayloadAction<Visitor>) {
            const newUser = action.payload;

            const exist = state.visitors.find((visitor) => visitor.email === newUser.email);

            if (!exist) {
                state.visitors.push({
                    visitor: newUser.visitor,
                    email: newUser.email,
                    department: newUser.department,
                });
                state.changed = true;
            } else {
                console.log("exist");
            }
        },
        removeVisitorFromTable(state) {
            const result = state.visitors.filter((visitor) => !state.selected.includes(visitor.email));

            state.visitors = result;
            state.selected = [];
            state.changed = true;
        },
        updateSelectedVisitors(state, action: PayloadAction<readonly string[]>) {
            const selected = action.payload;
            console.log(selected);

            state.selected = selected.slice();
        },
        updateVisitors(state, action: PayloadAction<Visitor[]>) {
            state.visitors = action.payload;
        },
    },
});

export const tableActions = tableSlice.actions;

export default tableSlice;
