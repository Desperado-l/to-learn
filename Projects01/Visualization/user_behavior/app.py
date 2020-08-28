#conding=utf-8
from flask import Flask
from flask import render_template
import utils
from flask import jsonify
app = Flask(__name__)

@app.route('/')
def template():
    return render_template("main.html")

@app.route('/q1')
def get_q1_data():
    data = utils.get_q1_data()
    day,b_count,v_count = [],[],[]
    for a,b,c in data[:]:
        day.append(int(a))
        b_count.append(b)
        v_count.append(c)
    print(day)
    print(b_count)
    print(v_count)
    return jsonify({"day_11": day, "b_count_11": b_count, "v_count_11": v_count})

@app.route('/q2')
def get_q2_data():
    data = utils.get_q2_data()
    day,b_count,v_count = [],[],[]
    for a,b,c in data[:]:
        day.append(int(a))
        b_count.append(b)
        v_count.append(c)
    print(day)
    print(b_count)
    print(v_count)
    return jsonify({"day_12": day, "b_count_12": b_count, "v_count_12": v_count})

@app.route('/q3')
def get_q3_data():
    lis = []
    for tup in utils.get_q3_data():
        lis.append({"name":tup[0],"value":int(tup[1])})
    return jsonify({"data":lis})

@app.route('/q4')
def get_q4_data():
    lis = []
    i = 0
    for tup in utils.get_q4_data():
        i += 1
        lis.append({"top":i,"id":tup[0],"count":int(tup[1]),"city":tup[2]})
    print(lis)
    return jsonify(lis)

@app.route('/q5')
def get_q5_data():
    data = utils.get_q5_data()
    time,b_u = [],[]
    for a,b in data[:]:
        time.append(a)
        b_u.append(b)
    print(time)
    print(b_u)
    return jsonify({"time": time, "b_u": b_u})

if __name__ == '__main__':
    app.run()