from flask import Flask, request, jsonify
from chat_controller import chat_controller

cc = chat_controller()

app = Flask(__name__)

@app.route('/textToText', methods=['POST'])
def process_text():
    data = request.json  # Assuming the text is sent as a JSON object
    if 'text' not in data:
        return jsonify({'error': 'No text provided'}), 400

    text = data['text']
    if text == '':
        return jsonify({'error': 'Empty text received'}), 400

    try:
        response = cc.send_text_to_text(text)
        return jsonify({'response': response}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/audioToText', methods=['POST'])
def process_audio():
    data = request.json  # Assuming the text is sent as a JSON object
    if 'audio' not in data:
        return jsonify({'error': 'No audio provided'}), 400

    audio = data['audio']
    try:
        response = cc.send_audio_to_text(audio)
        return jsonify({'response': response}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)