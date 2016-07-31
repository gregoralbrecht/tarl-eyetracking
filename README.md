# tarl-eyetracking
Project to host all code samples used for the TARL eye tracking study

[http://gregoralbrecht.github.io/tarl-eyetracking/](http://gregoralbrecht.github.io/tarl-eyetracking/)


## Commands
`middleman server` to start a local preview server

`middleman article NAME` to create a new code sample

`rake publish` to deploy to Github pages


## Images for the survey
To resize the images to match the survey, simply run
`convert *.png -resize 214x214 -set filename:f '%t' small/'%[filename:f]_v2.png'` inside a directory with graph images. Replace vX with new version so the image does not get cached by questback.
