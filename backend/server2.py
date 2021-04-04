import json
from flask import Flask, request, Response
from emotion_analysis import analyze_emotion
from polarity_analysis import analyze_polarity
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"

@app.route("/api/emotions", methods=["POST"])
@cross_origin()
def get_emotions():
    data = request.json
    if data is None:
        return Response(
            "Invalid request, must be json",
            status=400)
    if "text" not in data:
        return Response(
            "Invalid request, json needs 'text' field",
            status=400)
    text = data["text"]
    try:
        return_object = {}
        return_object["tokens"] = analyze_emotion(text)
        return_object["x_values"] = analyze_polarity(text)
        return json.dumps(return_object)
    except Exception as e:
        print(e)
        return Response(
            "Server error: " + str(e),
            status=500)

if __name__ == "__main__":
    app.run(host="0.0.0.0")
