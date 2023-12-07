import { TableData } from "./TransactionHistoryDataRow.styled";

export const TransactionHistoryDataRow = ({type, amount, currency}) => {
    return(
        <>
            <TableData>{type}</TableData>
            <TableData>{amount}</TableData>
            <TableData>{currency}</TableData>
        </>        
    );
};