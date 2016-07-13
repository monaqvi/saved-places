# SavedPlaces

Find your favorite locations, categorize them, and write notes about them so you can easily refer to them later!

## Overview

### Tech Stack
- [Angular](https://angularjs.org/)

## Usage
You'll need API keys for [Google Places](https://developers.google.com/places/web-service/get-api-key). Create a file in the 'app/api/' folder called 'keys.js'. Using 'keys.example.js' as a template, add your Google Places API key here. 

## Requirements

- [Node 0.10.x or higher](https://nodejs.org/en/)
- [Google Places API key](https://developers.google.com/places/web-service/get-api-key)

## Development

### Installing Dependencies

From within the root directory:

```
npm install -g bower http-server
```

### Running Locally

In a separate shell, start the server by running:
```
bower install
http-server .
```

Visit `localhost:8080` in the browser.