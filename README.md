# tarl-eyetracking
Project to host all code samples used for the TARL eye tracking study

[http://gregoralbrecht.github.io/tarl-eyetracking/](http://gregoralbrecht.github.io/tarl-eyetracking/)


## Commands
`middleman server` to start a local preview server

`middleman article NAME` to create a new code sample

`rake publish` to deploy to Github pages


## Images for the survey
To resize the images to match the survey, simply run
`mogrify -resize 220x220 -quality 100 -path small *.PNG` inside a directory with graph images.
