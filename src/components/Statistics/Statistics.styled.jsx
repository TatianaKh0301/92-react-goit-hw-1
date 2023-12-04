import styled from "@emotion/styled";

export const SectionWrap = styled.div`
    background-color: rgb(210, 210, 247);
    width: 100vw;
`;

export const SectionStatistics = styled.section`
    background-color: white;
    width: 500px;
    margin: 0 auto;
`;

export const TitleStatistics = styled.h2`
    text-align: center;
    text-transform: uppercase;
    padding-top: 30px;
    margin-bottom: 30px;
`;

export const StatisticsList = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
`;

export const ItemList = styled.li`
    position: relative;
    width: 100px;
    height: 80px;
    color: white;
`;

export const SpanStatisticsWrap = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const Label = styled.span`
    display: block;
    font-size: 20px;
`;

export const Percentage = styled.span`
    font-size: 25px;
    font-weight: bold;
`;
