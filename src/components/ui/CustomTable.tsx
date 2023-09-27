import { Checkbox, Chip, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { tableActions } from "../../store/table-slice";

export interface Visitor {
    visitor: string;
    email: string;
    department: string;
}

const CustomTable = () => {
    const selected = useAppSelector((state) => state.table.selected);
    const tableData = useAppSelector((state) => state.table.visitors);

    const dispatch = useAppDispatch();
    const noData = tableData.length === 0;

    const handleClick = (event: React.MouseEvent<unknown>, email: string) => {
        const selectedIndex = selected.indexOf(email);
        let newSelected: readonly string[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, email);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }

        dispatch(tableActions.updateSelectedVisitors(newSelected));
    };

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = tableData.map((n) => n.email);
            dispatch(tableActions.updateSelectedVisitors(newSelected));
            return;
        }
        dispatch(tableActions.updateSelectedVisitors([]));
    };

    const isSelected = (name: string) => selected.indexOf(name) !== -1;

    const data = (
        <TableBody>
            {tableData.map((row, index) => {
                const isItemSelected = isSelected(row.email);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                    <TableRow
                        key={row.email}
                        role="checkbox"
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                        <TableCell padding="checkbox">
                            <Checkbox
                                color="primary"
                                onClick={(event) => handleClick(event, row.email)}
                                checked={isItemSelected}
                                inputProps={{
                                    "aria-labelledby": labelId,
                                }}
                            />
                        </TableCell>
                        <TableCell align="left">{row.visitor}</TableCell>
                        <TableCell align="left">{row.email}</TableCell>
                        <TableCell align="right">
                            <Chip label={row.department} />
                        </TableCell>
                    </TableRow>
                );
            })}
        </TableBody>
    );

    const CustomTableHead = (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        onChange={handleSelectAllClick}
                        indeterminate={selected.length > 0 && selected.length < tableData.length}
                        checked={tableData.length > 0 && selected.length === tableData.length}
                        inputProps={{
                            "aria-label": "select all desserts",
                        }}
                    />
                </TableCell>
                <TableCell sx={{ width: "33%" }}>Visitor</TableCell>
                <TableCell align="left" sx={{ width: "33%" }}>
                    Email
                </TableCell>
                <TableCell align="right" sx={{ width: "33%" }}>
                    Department
                </TableCell>
            </TableRow>
        </TableHead>
    );

    const noDataPlaceHolder = <caption style={{ textAlign: "center" }}>No visitors yet...</caption>;

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                {CustomTableHead}
                {noData ? noDataPlaceHolder : data}
            </Table>
        </TableContainer>
    );
};

export default CustomTable;
