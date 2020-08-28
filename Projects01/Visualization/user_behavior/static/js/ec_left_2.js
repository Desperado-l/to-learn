// 问题2 echarts代码

var ec_left_2 = echarts.init(document.getElementById('q2'),'white');
var ec_left_2_option = {   
    title: {
        text: '2014年12月日浏览量和购买量',
        x: 'center',
        bottom:10
    },
    legend: {
        data: ['购买数量','浏览数'],
        top:10
    },
    toolbox: {
        top:10,
        feature: {
            magicType: {
                type: ['stack', 'tiled']
            },
            dataView: {},
            saveAsImage: {
                pixelRatio: 2
            }
        }
    },
    tooltip: {},
    xAxis: [{
        data: [],
    }],
    yAxis: [{
    }],
    series: [
        {
            name: '购买数量',
            type: 'bar',
            data: [],
            barMaxWidth:"50%"
        },
        {
            name:'浏览数',
            type:'bar',
            data: [],
            barMaxWidth:"50%"
            }
    ]
};
ec_left_2.setOption(ec_left_2_option)