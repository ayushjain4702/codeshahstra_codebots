from flask import Flask, jsonify, render_template, request, send_file,url_for


app=Flask(__name__)


@app.route('/',methods=["POST","GET"])
def index():
    
    return jsonify()

if __name__=="__main__":
    app.run(debug=True)