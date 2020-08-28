#coding=utf-8
import random
import pandas as pd

# 读取文件
fpath = ('C:/Users/lenovo/Desktop/small_user.csv')
df = pd.read_csv(fpath,low_memory=False)
# 删除指定字段
df = df.drop(['user_geohash','Unnamed: 6','Unnamed: 7'],axis=1)
# 修改分割时间字段
df['time'] = df['time'].str.split(' ',expand=True)[0]
# 加入id字段
n = len(df)+1
n_list = range(1,n)
df.insert(0,'id',n_list)
# 增加随机省份字段
print(df.shape[0])
city_list = ['北京','天津','河北','山西','内蒙古','辽宁','吉林','黑龙江','上海','江苏',
        '浙江','安徽','福建','江西','山东','河南','湖北','湖南','广东','广西',
        '海南','重庆','四川','贵州','云南','西藏', '陕西','甘肃','青海','宁夏',
        '新疆','香港','澳门','台湾']
li = []
for i in range(df.shape[0]):
    city = random.choice(city_list)
    li.extend([city])
print(len(li))
df['city']= li
# 查看一下
print(df.head())
# 导出文件
tpath = ('C:/Users/lenovo/Desktop/small_user_out.csv')
df.to_csv(path_or_buf=tpath,header = False,index = False,encoding="utf-8-sig")
