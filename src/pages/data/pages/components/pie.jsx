import React from 'react';
import ReactEcharts from 'echarts-for-react';

class Pie extends React.Component {
    get getOption() {
        const { seriesData } = this.props;
        const option = {
            title: {
                text: '文档词频分析',
                subtext: '出现次数大于等于5次',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: seriesData.map(item => item.name)
            },
            series: [
                {
                    name: '语料词频',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: seriesData,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        return option;
    }
    render() {
        return (
            <div>
                <ReactEcharts
                    option={this.getOption}
                    notMerge={true}
                    lazyUpdate={true}
                />
            </div>
        );
    }
}
export default Pie;