export const Statistics = ({title, stats}) => {
    return (
        <section class="statistics">
            <h2 class="title">Upload stats</h2>
            <ul class="stat-list">
                {
                    stats.map(data => (
                        <li key={data.id} class="item" style={{backgroundColor: `${getRandomHexColor()}`}}>
                            <span class="label">{data.label}</span>
                            <span class="percentage">{data.persentage}</span>
                        </li>
                    ))
                }              
            </ul>
        </section>
    );
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}