import { TransactionHistoryDataRow } from "components/TransactionHistoryDataRow/TransactionHistoryDataRow";
import { TransactionHistoryTable, TableRow, TableHead } from "./TransactionHistory.styled";

export const TransactionHistory = ({items}) => {
    return(
        <TransactionHistoryTable class="transaction-history">
            <thead>
                <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Currency</TableHead>
                </TableRow>
            </thead>

            <tbody>
                {items.map(item => (
                    <TableRow key={item.id}>
                        <TransactionHistoryDataRow type={item.type} amount={item.amount} currency={item.currency}/>
                    </TableRow>
                ))}
            </tbody>
        </TransactionHistoryTable>
    );
};