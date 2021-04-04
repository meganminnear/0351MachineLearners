import json
import numpy as np
import nltk
from deepmoji.sentence_tokenizer import SentenceTokenizer
from deepmoji.model_def import deepmoji_emojis
from deepmoji.global_variables import PRETRAINED_PATH, VOCAB_PATH

EMOJI_MAPPING_PATH = "emoji_to_emotion_mapping.json"

def top_elements(array, k):
    ind = np.argpartition(array, -k)[-k:]
    return ind[np.argsort(array[ind])][::-1]

maxlen = 30
batch_size = 32

print("Running NLTK download 'punkt'")
nltk.download('punkt')

print("Tokenizing using dictionary from {}".format(VOCAB_PATH))
with open(VOCAB_PATH, 'r') as f:
    vocabulary = json.load(f)
st = SentenceTokenizer(vocabulary, maxlen)

print("Loading model from {}".format(PRETRAINED_PATH))
model = deepmoji_emojis(maxlen, PRETRAINED_PATH)

print("Loading emoji mapping from {}".format(EMOJI_MAPPING_PATH))
with open(EMOJI_MAPPING_PATH, "r") as f:
    emoji_mapping = json.load(f)
emoji_mapping = {int(k) : v for k, v in emoji_mapping.items()}
emotions = {v for _, v in emoji_mapping.items()}

# TODO: split text into tokens or something
def analyze_text(text):
    print("Analyzing text: '{}'".format(text))
    sentences = nltk.sent_tokenize(text)
    print("Tokenized into {} sentences".format(len(sentences)))
    tokenized, _, _ = st.tokenize_sentences(sentences)
    pred = model.predict(tokenized)
    results = []
    for i, sentence in enumerate(sentences):
        ind_top = top_elements(pred[i], 5)
        output_emotions = {emotion : 0.0 for emotion in emotions}
        for idx in ind_top:
            output_emotions[emoji_mapping[idx]] += pred[i][idx]
        results.append({
            "text": sentence,
            "emotions": output_emotions
            })
    return {"tokens": results}
