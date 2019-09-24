#!/usr/bin/env python3

from bottle import route, run

@route('/message')
def hello():
    return "Today is a beautiful day"  

run(host='localhost', port=8080, debug=True)