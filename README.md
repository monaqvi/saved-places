# SavedPlaces

Find your favorite locations, categorize them, and write notes about them so you can easily refer to them later!

## Overview
[![Demo](https://github.com/smnaqvi89/saved-places/blob/master/demo.gif)](https://github.com/smnaqvi89/saved-places/)

### Codebase
1. Used Angular:
  * similarity to Ember in terms of Dependency Injection 
  * easy to get something complex setup with minimal code
  * organization of code into separate modules with factories, directives, and filters that can be easily used across the app
  * Angular router to handle different views
  * Material-UI is fully responsive and well-styled

2. Different patters to showcase knowledge of / flexibility with framework:
  * both _$scope_ and _this_ patterns within controllers
  * both components and HTML templates for different views
  * Angular provided + custom directives
  * Angular provided + custom filters

3. Error handling:
  * wait for google maps to load before allowing app use
  * default to mid-US as map center when current location is not known (if user does not allow location services in browser)
  * make sure place and category are provided before accepting input
  * redirect to home on invalid routes or place URLs


### Tech Stack
- [Angular](https://angularjs.org/)

## Usage
You'll need API keys for [Google Places](https://developers.google.com/places/web-service/get-api-key). Create a file in the 'app/api/' folder called 'keys.js'. Using 'keys.example.js' as a template, add your Google Places API key here.

If you neglect to do this step, the app will prompt you for your individual key.

## Requirements

- [Node 0.10.x or higher](https://nodejs.org/en/)
- [Google Places API key](https://developers.google.com/places/web-service/get-api-key)

## Development

### Installing Dependencies

From within the root directory:

```
npm install -g bower http-server
bower install
```

### Running Locally

Start the server by running:
```
http-server .
```

Visit `localhost:8080` in the browser.