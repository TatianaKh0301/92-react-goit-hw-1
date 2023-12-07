import styled from "@emotion/styled";

export const TransactionHistoryTable = styled.table`
    box-shadow: 0.5px 0.5px 0.5px 0.5px rgb(197, 194, 194);
    border: 1px solid rgb(197, 194, 194);
    border-collapse: collapse;
    background-color: white;
    width: 900px;
    text-align: center;
    margin: 0 auto;
`;

export const TableRow = styled.tr`
    height: 50px;

    &:nth-of-type(even) {
        background-color: rgb(233, 238, 241);    
    }
`;

export const TableHead = styled.th`
    border: 0.5px solid rgb(197, 194, 194);
    width: 100px;
    background-color: rgb(0, 204, 255);
    color: white;
    text-transform: uppercase;
`;
