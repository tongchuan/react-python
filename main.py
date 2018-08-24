#!/usr/bin/python
# -*- coding: UTF-8 -*-

from flask import Flask
from flask_cors import CORS
from flask import render_template
from flask import url_for
# from flask import Blueprint
from api.index import api
from api.user import User
# from api.index import api
API = api()
user = User()

app = Flask(__name__)
CORS(app, supports_credentials=True)
import api.index
@app.route('/')
def main():
  return render_template('index.html')

@app.route('/admin')
def admin():
  return render_template('admin.html')

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