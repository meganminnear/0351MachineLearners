import numpy as np
import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer

def analyze_polarity(input_string):
    """s = SentimentIntensityAnalyzer()

    total = 0
    chunks = 15
    sentiments = []

    if len(input_string) < 20:
        for x in range(len(input_string)):
            currSenti = s.polarity_scores(input_string[x])["compound"]
            sentiments.append(currSenti)
    else:
        for i in range((len(input_string) - chunks) // 5):
            total += 1
            #currstr = ""
            for x in range(chunks):
                #currstr += input_string[i*5 + x]
                currSenti = s.polarity_scores(input_string[i*5 + x])["compound"]
                sentiments.append(currSenti)

    def moving_average(data, window_size):
        filter = np.ones((1,window_size))/window_size
        filter = filter[0,:]
        data = np.array(data)
        filtered_data = np.convolve(data, filter, 'same')
        return filtered_data

    movingAverage = moving_average(sentiments, min(50, max(1, len(input_string) // 3)))
    combined = {}
    combined["sentiments"] = sentiments
    combined["movingAverage"] = movingAverage.tolist()
    return combined"""
    analyzer = SentimentIntensityAnalyzer()
    sentences = nltk.sent_tokenize(input_string)
    sentiments = []
    for sentence in sentences:
        sentiments.append(analyzer.polarity_scores(sentence)["compound"])

    def moving_average(data, window_size):
        filter = np.ones((1,window_size))/window_size
        filter = filter[0,:]
        data = np.array(data)
        filtered_data = np.convolve(data, filter, 'same')
        return filtered_data

    movingAverage = moving_average(sentiments, min(50, max(1, len(sentences) // 3)))
    combined = {}
    combined["sentiments"] = sentiments
    combined["movingAverage"] = movingAverage.tolist()
    return combined
