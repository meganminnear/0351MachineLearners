import React from 'react';

import "./About.css";

import profileImage from './profile-placeholder.png'

import Lillian from './TeamPhotos/Lillian.jpg'
import Heather from './TeamPhotos/Heather.jpg'
import Megan from './TeamPhotos/Megan.jpg'
import Neil from './TeamPhotos/Neil.jpg'
import Patrick from './TeamPhotos/Patrick.jpg'
import Shaan from './TeamPhotos/Shaan.jpg'
import Yaewon from './TeamPhotos/Yaewon.jpg'


import Image from 'react-bootstrap/Image';


class About extends React.Component {
    render() {
        return (
            <div className="About">
                <h2>about</h2>
                <p>Currently, there is a lack of tools that can be used by writers to visualize the sentiment and emotions of their writing. The Sentimental Image was created to provide writers with a tool that allows them to easily visualize their writings with the help of machine learning. Our website is open to anyone who writes and is looking for ways to visualize the sentiment of their writing and as well as to machine learning enthusiasts.</p>
                <h2>how to use?</h2>
                <p>Enter in any writing into the text box on the home page, and the algorithm will then generate an output for you.  The output can be a 3D abstract representation of the writing or a linear representation that will plot the sentiment of the writing.  You can freely choose which version they want to see by clicking on the tabs at the top left. Additionally, you can download the image, download a CSV file that contains the raw data of the sentiments in your writing, and you can share this website with your friends on social media!</p>
                <h2>how does it work?</h2>
                <p>When you enter in some text, two separate algorithms are running to produce two different representations.  For the linear representation, the algorithm that is being used is the NLKT sentiment intensity analyzer.  This is a python package that can be imported and installed easily (see links below).  What this algorithm does is it takes in an input in the form of some sort of text and then produces a score between +1 and -1 that models how positive and negative the writing is, +1 being very positive and -1 being very negative.  The way we decided to implement it was by first cleaning the text, meaning we deleted neutral words such as “the”, “that”, “these”, etc... This helps to get a more accurate score because a lot of these words are filler words (also called stop words, see links below).  Then we break the text up into chunks (based on text size) and then feed those chunks into the algorithm to produce all the sentiment scores.  We then graph a running average and a global average of the words and plot all the points onto a graph which is what is displayed in the linear representation. </p>
                <p>For the 3D representation, we use an open-licensed model called Deep Moji.  Deep Moji is a machine learning model that takes in some text and produces gives a score for each emoji.  Deep Moji is built and trained using tweets (for more information and GitHub see links below).  With the scores that we have obtained we pull only the top few emojis and map each emoji to an emotion.  We then map the emotions to some colors, shapes, and positions. Those geometric figures then make the picture that is displayed in the 3D representation.  We are essentially taking the results of Deep Moji and converting the output into a picture by taking each sentence and converting it into a geometric figure.  The way we chose the mapping for emotions to shapes and colors is by conducting a survey and collecting what shapes and colors people associate with different emotions.</p>
                <h2>team</h2>
                <div className="row">
                    <div className="column">
                        <div className="profileCard">
                            <Image width="100%" src={Lillian} ref="abstractImage" />
                            <h4>Lillian-Yvonne Bertram</h4>
                        </div>
                    </div>
                    <div className="column">
                        <div className="profileCard">
                            <Image width="100%" src={Heather} ref="profileImage" />
                            <h4 style={{paddingTop: 29, paddingBottom: 29}}>Heather Zhu</h4>
                        </div>
                    </div>
                    <div className="column">
                        <div className="profileCard">
                            <Image width="100%" src={Megan} ref="abstractImage" />
                            <h4 style={{paddingTop: 29, paddingBottom: 29}}>Megan Minnear</h4>
                        </div>
                    </div>
                    <div className="column">
                        <div className="profileCard">
                            <Image width="100%" src={Neil} ref="abstractImage" />
                            <h4>Neil Thistlethwaite</h4>
                        </div>
                    </div>
                    <div className="column">
                        <div className="profileCard">
                            <Image width="100%" src={Patrick} ref="abstractImage" />
                            <h4 style={{paddingTop: 29, paddingBottom: 29}}>Patrick Li</h4>
                        </div>
                    </div>
                    <div className="column">
                        <div className="profileCard">
                            <Image width="100%" src={Shaan} ref="abstractImage" />
                            <h4 style={{paddingTop: 29, paddingBottom: 29}}>Shaan Gill</h4>
                        </div>
                    </div>
                    <div className="column">
                        <div className="profileCard">
                            <Image width="100%" src={Yaewon} ref="abstractImage" />
                            <h4 style={{paddingTop: 29, paddingBottom: 29}}>Yaewon Ahn</h4>
                        </div>
                    </div>
                    
                </div>
                <h2>additional resources</h2>
                <ul>
                    <li>NLTK Install: <a href="https://www.nltk.org/install.html">https://www.nltk.org/install.html</a></li>
                    <li>Stop Words: <a href="https://stackabuse.com/removing-stop-words-from-strings-in-python/">https://stackabuse.com/removing-stop-words-from-strings-in-python/</a></li>
                    <li>NLTK Sentiment: <a href="https://www.nltk.org/api/nltk.sentiment.html">https://www.nltk.org/api/nltk.sentiment.html</a></li>
                    <li>NLTK Sentiment Analysis: <a href="https://realpython.com/python-nltk-sentiment-analysis/ ">https://realpython.com/python-nltk-sentiment-analysis/</a></li>
                    <li>DeepMoji: <a href="https://deepmoji.mit.edu/">https://deepmoji.mit.edu/</a></li>
                    <li>DeepMoji GitHub: <a href="https://github.com/bfelbo/DeepMoji">https://github.com/bfelbo/DeepMoji</a></li>
                </ul>
                <br></br>
                <br></br>
            </div>
            
        );
    }
}

export default About;
