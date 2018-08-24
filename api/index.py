#!/usr/bin/python
# -*- coding: UTF-8 -*-

import json
from utils.DbMysqlClass import MysqlDb
from utils.DateEncoderClass import DateEncoder

class api(object):
  def __init__(self):
    pass
  def index(self):
    db = MysqlDb()
    # sql="select id,user_code,user_name,user_pwd,create_time,modif_time,last_name,first_name,birthday,org_code,is_del,description,sex,qq,tel,mobile,email from python_user"
    sql="select SQL_CALC_FOUND_ROWS  * from python_user where is_del=1 limit 1,2"
    data = db.select(sql)
    sql2 = "select count(id) as count from python_user where is_del=1"
    count = db.count(sql2)
    dict2 = {}
    dict2['total'] = count[0]
    dict2['message'] = 'success'
    dict2['data'] = data
    dict2['code'] = 1000
    return json.dumps(dict2,cls=DateEncoder)
