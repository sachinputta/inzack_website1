from flask_mysqldb import MySQL
import calendar
import datetime
import time
from flask import Flask, session, redirect, url_for, escape, request, render_template,jsonify
from hashlib import md5
import MySQLdb
from flask_mysqldb import MySQL
from flask import Response
import json

app = Flask(__name__)

MySQL_HOST = 'localhost'
MySQL_USER = 'root'
MySQL_PASSWORD = 'sachin@123'
MYSQL_DB = 'inzack'

@app.route("/")
def index(): 
		
		 return render_template('index.html')

@app.route("/contact")
def contact(): 
		
		 return render_template('contact-us.html')


@app.route("/about")
def about(): 
		
		 return render_template('about.html')


if __name__ == '__main__':
	app.run(debug=True,port=6500,host="0.0.0.0")

