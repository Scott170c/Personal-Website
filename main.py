from flask import Flask, render_template, redirect, request, make_response
import os

os.system('clear')

app = Flask(__name__)

@app.route('/')
def index():
  return render_template('index.html')

@app.route('/test')
def test():
  return render_template('test.html')

@app.route('/projects')
def projects():
  return render_template('projects.html')

@app.errorhandler(404)
def page_not_found(error):
  return render_template('404.html'), 404

app.run(host="0.0.0.0", port=8080, debug=True)