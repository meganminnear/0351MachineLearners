# The Sentimental Image

## Release Notes version 1.0
### New Features
-	Now able to download a CSV file containing raw emotion/sentiment data from the algorithms.
-	Now able to download the linear graph as an image file.
-	Randomized orientation for non-spherical shapes for a better look.
-	Removed random variable positions for non-spherical shapes.
-	Changed the color of the Canvas background to a gradient pink/green color.
-	Added z-axis.
-	Completed About page.
-	Removed automatic rotations of shapes.


### Bug Fixes
-	Rendered shapes no longer have their positions re-randomized every keystroke into the textbox.

### Known Bugs
-	Downloading the abstract image currently downloads an empty image.
-	Downloading the linear image may not work for some browsers.

## Install Guide
### Pre-requisites
-	You must have Python3 installed. [https://www.python.org/downloads/](https://www.python.org/downloads/)
-	You must have npm installed. Pull up your terminal/command prompt/console and enter in this line:
```
npm install -g npm
```
-	You must have pip installed for Python3. It should already be installed if you have Python3 version 3.4 for greater. You can check if you have pip installed if you type:  

Mac: 
```
python -m pip --version 
```
Windows: 
```
py -m pip --version
```
If you do not have pip installed, follow the instructions here: [https://pip.pypa.io/en/stable/installing/ ](https://pip.pypa.io/en/stable/installing/)

### Dependencies
-	NOTE: If you need help navigating through the directories, check out the “Running Application” part of the Install Guide.
-	For the frontend: there are many npm dependencies used, to install them, navigate in your console to the frontend directory (after downloading the ZIP file described below), where there should be a package.json file. Use npm install and the needed dependencies will be downloaded. 
-	For the backend: Navigate your console to the backend directory. There are many Python3 packages used. To install them all, in the console, type:
pip install “package”
for each “package” in the following list:
    * Flask
    * Flask-Cors
    * numpy
    * nltk
    * sklearn
    * keras
    * h5py
    * tensorflow
    * emoji <br />
- Additionally, the weights used by deepmoji is a very large file and should be downloaded separately. Download the file from this link [https://www.dropbox.com/s/xqarafsl6a8f9ny/deepmoji_weights.hdf5?dl=0](https://www.dropbox.com/s/xqarafsl6a8f9ny/deepmoji_weights.hdf5?dl=0), and place it in backend/model.

### Download
-	Go to the GitHub for this project: https://github.com/meganminnear/0351MachineLearners.git
-	Select the green button “Code” near the top right, then click “Download ZIP”.
- Alternatively, to clone the repository using the command line:
    -	Select the green button “Code” near the top right on the main page, then copy the corresponding URL of this project.
    -	Open terminal/command prompt and change the working directory to the location where you want this cloned directory.
    -	In the terminal/command prompt, type git clone, and paste the copied URL. It should look like: 
```
git clone https://github.com/meganminnear/0351MachineLearners.git
```

### Build
-	No build is needed for this project!

### Installation
- No installation is required.

### Running Application
-	In terminal/command prompt/console, navigate to the frontend directory. For example, if the file path to the frontend directory is /Documents/GitHub/0351MachineLearners/frontend, you would type in each line:
```
cd Documents
```
```
cd GitHub
```
```
cd 0351MachineLearners
```
```
cd frontend
```
- Then you would be in the frontend directory. Afterwards, type in the console:
```
npm start
```
- And the front end part of the project should run.
-	In order to run the backend, navigate to the backend directory using the same method as listed above (except type “backend” instead of “frontend”), and then run in your console:
```
python server2.py
```
- The server will be hosted on your ip on port 5000. The path to access it is 
http://”insert-ip-here”:5000. 

### Troubleshooting
-	If your computer doesn’t recognize the `python` or `pip` keywords, trying using `python3` or `pip3` instead.

