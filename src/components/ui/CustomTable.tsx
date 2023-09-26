import { Chip, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

function createData(visitor: string, email: string, department: string) {
    return { visitor, email, department };
}

const rows = [
    createData("Frozen yoghurt", "123@mail.con", "Marketing"),
    createData("Ice cream sandwich", "321@mail.con", "IT"),
    createData("Ice cream sandwich", "321@mail.con", "IT"),
    createData("Ice cream sandwich", "321@mail.con", "IT"),
    createData("Ice cream sandwich", "321@mail.con", "IT"),
    createData("Ice cream sandwich", "321@mail.con", "IT"),
    createData("Ice cream sandwich", "321@mail.con", "IT"),
    createData("Ice cream sandwich", "321@mail.con", "IT"),
    createData("Ice cream sandwich", "321@mail.con", "IT"),
    createData("Ice cream sandwich", "321@mail.con", "IT"),
    createData("Ice cream sandwich", "321@mail.con", "IT"),
    createData("Ice cream sandwich", "321@mail.con", "IT"),
    createData("Ice cream sandwich", "321@mail.con", "IT"),
    createData("Ice cream sandwich", "321@mail.con", "IT"),
];

const CustomTable = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Visitor</TableCell>
                        <TableCell align="left">Email</TableCell>
                        <TableCell align="right">Department</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.visitor} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                {row.visitor}
                            </TableCell>
                            <TableCell align="left">{row.email}</TableCell>
                            <TableCell align="right">
                                <Chip label={row.department} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CustomTable;
