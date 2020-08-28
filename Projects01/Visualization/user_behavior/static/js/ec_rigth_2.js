// 问题5 echarts代码

var ec_right_2 = echarts.init(document.getElementById('q5'),'white');

var ec_right_2_option = {
    title:{
        text:'每日购买率',
        left:'center',
        bottom:10
    },
    tooltip:{},
    xAxis: [{
        type: 'category',
        data: []
    }],
    yAxis: {
        type: 'value'
    },
    series: [{
        name:"购买率",
        data: [],
        type: 'line'
    }]
};
ec_right_2.setOption(ec_right_2_option)