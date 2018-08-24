
#!/usr/bin/python
# -*- coding: UTF-8 -*-

import pymysql
import pymysql.cursors

class MysqlDb(object):
  __host='localhost'
  __user='root'
  __password='root'
  __db='pythondb'
  __port=3306
  __charset='utf8'
  def __init__(self):
    pass
  def count(self, sql):
    connection = pymysql.connect(host=MysqlDb.__host, user=MysqlDb.__user, password=MysqlDb.__password, db=MysqlDb.__db, port=MysqlDb.__port, charset=MysqlDb.__charset)
    cursor = connection.cursor()
    try:
      cursor.execute(sql)
      return cursor.fetchone()
    except Exception as e:
	    raise e
    finally:
      connection.close()
  def select(self,sql):
    connection = pymysql.connect(host=MysqlDb.__host, user=MysqlDb.__user, password=MysqlDb.__password, db=MysqlDb.__db, port=MysqlDb.__port, charset=MysqlDb.__charset)
    cursor = connection.cursor()
    try:
      cursor.execute(sql)
      # count = cursor.execute('SELECT FOUND_ROWS()')
      data = []
      for row in cursor.fetchall():
        dict1={}
        rowcount = 0
        for f in cursor.description:
          dict1[f[0]]=row[rowcount]
          rowcount=1+rowcount
        data.append(dict1)
      return data
    except Exception as e:
	    raise e
    finally:
      connection.close()
  def exec(self,sql):
    connection = pymysql.connect(host=MysqlDb.__host, user=MysqlDb.__user, password=MysqlDb.__password, db=MysqlDb.__db, port=MysqlDb.__port, charset=MysqlDb.__charset)
    cursor = connection.cursor()
    try:
      cursor.execute(sql)
      connection.commit()
    except Exception as e:
	    connection.rollback() 
    finally:
      connection.close()

