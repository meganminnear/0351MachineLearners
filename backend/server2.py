from flask import Flask, request, Response
from emotion_analysis import analyze_text
app = Flask(__name__)

@app.route("/api/emotions", methods=["POST"])
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
        return analyze_text(text)
    except Exception as e:
        return Response(
            "Server error: " + str(e),
            status=500)

if __name__ == "__main__":
    app.run(host="0.0.0.0")
