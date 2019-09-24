# Sentiment-Analyzer-Chrome-Extension
This chrome extension extract titles (text that appears when we hover over a link) of all the links of the post and send these text to the server that is running the Sentiment Analyzer model (Transformer network based GPT2 model fine tuned on the imdb dataset). Upon request is served by the model output i.e. list of positive or negative sentiment is sent to the webpage that has initiated the request. To initiate a request, just refresh the page and chrome extension installed will do the work of sending the request to the server in the background.

# Demo video: Sentiment Analyzer_Demo.mp4

# Chrome extension installation
0. Download and extract the above code
1. Open the Chrome browser
2. type: chrome://extensions in the url bar
3. On the top-right corner, turn on the developer mode
4. On the top-left, click the "Load unpacked" and select the folder that has this downloded code
5. Now, chrome extension has started its work

# Sentiment Analyzer model 
0. Go to the ModelServe folder
1. Run the finetune-transformer-on-imdb5k.ipynb file, it'll train the model
2. Run test.ipynb file, it'll start the server which listens to the POST request from the chrome extension
