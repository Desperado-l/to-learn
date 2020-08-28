
// 问题4生成表格

(function ($) {
    // 给 $ 的原型添加方法
    $.fn.table = function (arrTableHead, arrTableBody) {
        // this 是调用table方法的 jQ 对象
        // arrTableHead, arrTableBody 分别生成表头和主体
        var list = [];
        list.push('<table>')
        // 生成表头
        list.push('<thead>');
        list.push('<tr>');
        for (var i = 0; i < arrTableHead.length; i++) {
            list.push('<th>');
            list.push(arrTableHead[i]);
            list.push('</th>');
        }
        list.push('</tr>');

        list.push('</thead>');

        // 生成主体
        list.push('<tbody>');

        for (var i = 0; i < arrTableBody.length; i++) {
            list.push('<tr>');

            for (var key in arrTableBody[i]) {
                list.push('<td>');
                list.push(arrTableBody[i][key]);
                list.push('</td>');
            }


            list.push('</tr>');
        }

        list.push('</tbody>');
        list.push('</table>');
        console.log(list.join(""));
        // 把list里面的内容拼接成字符串
        this.html(list.join(""));
    }
}(jQuery));
var a_h = ['top','user_id','购买数量','城市']
var a_b = [{'top': 1, 'id': 103794013, 'count': 3, 'city': '浙江'}, {'top': 2, 'id': 103794013, 'count': 3, 'city': '江西'}, {'top': 3, 'id': 101490976, 'count': 3, 'city': '广东'}, {'top': 4, 'id': 102650143, 'count': 3, 'city': '云南'}, {'top': 5, 'id': 10095384, 'count': 3, 'city': '甘肃'}, {'top': 6, 'id': 101686429, 'count': 2, 'city': '安徽'}, {'top': 7, 'id': 101490976, 'count': 2, 'city': '西藏'}, {'top': 8, 'id': 103995979, 'count': 2, 'city': '内蒙古'}, {'top': 9, 'id': 101847145, 'count': 2, 'city': '福建'}, {'top': 10, 'id': 103995979, 'count': 2, 'city': '湖北'}]
function handle(){
    console.log(typeof a_h)
    console.log(a_b)

    $('#c').table(a_h,a_b);
}
$('#c').table(a_h,a_b);
