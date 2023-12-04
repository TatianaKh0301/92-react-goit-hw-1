import { SectionWrap, SectionStatistics, TitleStatistics, StatisticsList, ItemList, SpanStatisticsWrap, Label, Percentage } from "./Statistics.styled";

export const Statistics = ({title, stats=5}) => {
    // console.log(stats);
    return (
        <SectionWrap>
            <SectionStatistics>
                <TitleStatistics>Upload stats</TitleStatistics>
                    <StatisticsList>
                        {   
                        stats.map(data => (
                            <ItemList key={data.id} style={{backgroundColor: `${getRandomHexColor()}`}}>
                                <SpanStatisticsWrap>
                                    <Label>{data.label}</Label>
                                    <Percentage>{data.persentage}</Percentage>
                                </SpanStatisticsWrap>                            
                            </ItemList>
                        ))
                        }              
                    </StatisticsList>
            </SectionStatistics>
        </SectionWrap>        
    );
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}