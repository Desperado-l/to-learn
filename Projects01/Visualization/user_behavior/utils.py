#conding=utf-8
import pymysql
def get_conn():
    conn = pymysql.connect(
        host="192.168.172.140",
        port=3306,
        user="root",
        password="123123",
        db="hive",
        charset="utf8"
    )
    cursor = conn.cursor()
    return conn,cursor

def close_conn(conn, cursor):
    cursor.close()
    conn.close()

def query(sql):
    conn, cursor = get_conn()
    cursor.execute(sql)
    res = cursor.fetchall()
    close_conn(conn, cursor)
    return res

def get_q1_data():
    sql = "select day,b_count,v_count " \
          "from fx_6 " \
          "where month=11 " \
          "order by day;"
    res = query(sql)
    print("q1 Query the database successfully")
    return res

def get_q2_data():
    sql = "select day,b_count,v_count " \
          "from fx_6 " \
          "where month=12 " \
          "order by day;"
    res = query(sql)
    print("q2 Query the database successfully")
    return res

def get_q3_data():
    sql = "select province,buy_count " \
          "from fx_3;"
    res = query(sql)
    print("q3 Query the database successfully")
    return res

def get_q4_data():
    sql = "select * " \
          "from fx_5 " \
          "order by b_count desc;"
    res = query(sql)
    print("q1 Query the database successfully")
    return res

def get_q5_data():
    sql = "select date_format(time,'%m-%d') as time,b_u " \
          "from fx_6; " \
          # "order by time;"
    res = query(sql)
    print("q5 Query the database successfully")
    return res