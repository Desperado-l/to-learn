// 问题3 echarts代码

var ec_center = echarts.init(document.getElementById('q3'),'white');

var mydata = []

var ec_center_option = {
    title:{
        text:'2014-12-12 全国各地销量一览',
        textStyle:{
            fontSize:25
        },
        subtext:'',
        left:'center',
        y:'',
        top:50,
    },
    tooltip:{
        trigger:'item'
    },
    // 左侧小导航图标
    visualMap: {
        min:0,
        max:25,
        left:"40%",
        bottom:60,
        text:['high','low'],
        calculable:true,
        orient: 'horizontal',
        inRange:{
            color:['yellow', 'orangered','red']
        }
    },
    //配置属性
    series: [{
        name: '购买人数',
        type: 'map',
        mapType: 'china',
        roam: false, //拖动和缩放
        itemStyle: {
            normal: {
                borderWidth: .5, //区域边框宽度
                borderColor: '#009fe8', //区域边框颜色
                areaColor: "#ffefd5", //区域颜色
            },
            emphasis: { //鼠标滑过地图高亮的相关设置
                borderWidth: .5,
                borderColor: '#4b0082',
                areaColor: "#fff",
            }
        },
        label: {
            normal: {
                show: true, //省份名称
                fontSize: 10,
            },
            emphasis: {
                show: true,
                fontSize: 12,
            }
        },
        data:[] //mydata //数据
    }]
};
ec_center.setOption(ec_center_option)
