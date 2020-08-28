// 问题1 echarts代码

var ec_left_1 = echarts.init(document.getElementById('q1'),'white');

var ec_left_1_option = {   
    title: {
        text: '2014年11月日浏览量和购买量',
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
    series: [{
            name: '购买数量',
            type: 'bar',
            data: [],
            barMaxWidth:"50%"
    },{
            name:'浏览数',
            type:'bar',
            data: [],
            barMaxWidth:"50%"
    }]
};
ec_left_1.setOption(ec_left_1_option)