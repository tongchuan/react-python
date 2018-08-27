#!/usr/bin/python
# -*- coding: UTF-8 -*-

from flask import Flask, request
import json
# from flask_cors import CORS
from flask import render_template
from flask import url_for


from functools import wraps
from flask import make_response

'''
def allow_cross_domain(fun):
  @wraps(fun)
  def wrapper_fun(*args, **kwargs):
    rst = make_response(fun(*args, **kwargs))
    rst.headers['Access-Control-Allow-Origin'] = '*'
    rst.headers['Access-Control-Allow-Methods'] = 'PUT,GET,POST,DELETE'
    allow_headers = "Referer,Accept,Origin,User-Agent"
    rst.headers['Access-Control-Allow-Headers'] = allow_headers
    return rst
  return wrapper_fun
'''


# from flask import Blueprint
from api.index import api
from api.user import User
# from api.index import api
API = api()
user = User()

charset = "UTF-8"
#   
# response.setCharacterEncoding(charset);  

app = Flask(__name__)
# CORS(app, supports_credentials=True)
import api.index

@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization,session_id')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,HEAD')
  # 这里不能使用add方法，否则会出现 The 'Access-Control-Allow-Origin' header contains multiple values 的问题
  response.headers['Access-Control-Allow-Origin'] = '*'
  return response


@app.route('/')
def main():
  return render_template('index.html')

@app.route('/admin')
def admin():
  return render_template('admin.html')

@app.route('/ana', methods=['POST', 'GET'])
# @allow_cross_domain
def ana():
  # request.setCharacterEncoding(charset)
  if(request.method=='GET'):
    name = request.args.get('name')
    return name
  # print(request.method)
  if(request.method=='POST'):
    data = request.get_data()
    print(data)
    if(data):
      j_data = json.loads(data)
      print(j_data['name'])
      return (json.dumps(j_data))
    
    # print(request.form['name'])
    print(request.form.get('name'))
    print(request.form.get('age'))
    # name = request.form.get('name')
    # print(name)
    return 'dddddd'
    # return name
  # data = request.get_data()
  # print(data)
  # if(data):
  #   j_data = json.loads(data)
  #   return j_data
  # else:
  #   print("Hello, World")
  #   return data

# def apiIndex():
#   return 'api.index'
# apiIndex.provide_automatic_options = False
# apiIndex.methods = ['GET', 'OPTIONS']

app.add_url_rule('/api/index','api/indexddd', API.index)
# app.view_functions['api/index1'] = API.index
app.add_url_rule('/api/user/list/<start>/<end>','user.list', user.userList)
app.add_url_rule('/api/user/item/<ids>','user.item', user.userItem)
if __name__ == '__main__':
  app.debug = True
  app.run(host='0.0.0.0',port=8888)