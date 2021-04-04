from flask import Flask
import NTLK
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hey, we have Flask in aww Docker container!'
