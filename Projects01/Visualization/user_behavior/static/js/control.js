// Ajax获取每个问题的数据


function get_q1_data(){
    $.ajax({
        url:"/q1",
        success:function(data){
            ec_left_1_option.xAxis[0].data=data.day_11
            ec_left_1_option.series[0].data=data.b_count_11
            ec_left_1_option.series[1].data=data.v_count_11
            ec_left_1.setOption(ec_left_1_option)
        },
        error:function(xhr,type,errorThrown){
            alert("图表1请求数据失败!");
        }
    })
}

function get_q2_data(){
    $.ajax({
        url:"/q2",
        success:function(data){
            ec_left_2_option.xAxis[0].data=data.day_12
            ec_left_2_option.series[0].data=data.b_count_12
            ec_left_2_option.series[1].data=data.v_count_12
            ec_left_2.setOption(ec_left_2_option)
        },
        error:function(xhr,type,errorThrown){
            alert("图表2请求数据失败!");
        }
    })
}

function get_q3_data(){
    $.ajax({
        url:"/q3",
        success:function(data){
            ec_center_option.series[0].data=data.data
            ec_center.setOption(ec_center_option)
        },
        error:function(xhr,type,errorThrown){
            alert("图表请求数据失败!");
        }
     })
}

// function get_q4_data(){
//     $.ajax({
//         url:"/q4",
//         success:function(data){
//             a_b=data
//             console.log(typeof a_b)
//             console.log(a_b)
//             alert(a_b)
//         },error:function(xhr,type,errorThrown){
//             alert("表格获取数据失败")
//         }
//     })
// }

function get_q5_data(){
    $.ajax({
        url:"/q5",
        success:function(data){
            ec_right_2_option.xAxis[0].data=data.time
            ec_right_2_option.series[0].data=data.b_u
            ec_right_2.setOption(ec_right_2_option)
        },
        error:function(xhr,type,errorThrown){
            alert("图表请求数据失败!");
        }
     })
}

get_q1_data()
get_q2_data()
get_q3_data()
// get_q4_data()
get_q5_data()
