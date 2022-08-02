This is a simple Api that generates a set of fake Art works with the following schema:

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "Category": {
      "description": "The format of the art piece",
      "type": "string"
    },
    "Size": {
      "description": "Measurements in centimeters",
      "type": "string"
    },
    "Price": {
      "description": "Price without GST in USD",
      "type": "number"
    },
    "Title": {
      "type": "string"
    },
    "ArtDescription": {
      "description": "A brief historic description",
      "type": "string"
    },
    "ArtDating": {
      "description": "Date created",
      "type": "string"
    },
    "ArtId": {
      "description": "An identifier in the store catalog",
      "type": "string"
    },
    "Artist": {
      "description": "Full name of the artist",
      "type": "string"
    },
    "ArtistBirthDate": {
      "type": "string"
    },
    "ArtistDeathDate": {
      "description": "The date of the artist death or alive if still alive",
      "type": "string"
    },
    "ArtistNationality": {
      "type": "string"
    },
    "id": {
      "description": "A unique identifier in the database",
      "type": "integer"
    }
  },
  "required": [
    "Category",
    "Size",
    "Price",
    "Title",
    "ArtDescription",
    "ArtDating",
    "ArtId",
    "Artist",
    "ArtistBirthDate",
    "ArtistDeathDate",
    "ArtistNationality",
    "id"
  ]
}
```

## Install Packages

```
npm install json-server lodash @faker-js/faker
```

## Create a generate.js file

To properly arrange things, create a folder in the root directory of your project where you will store the generate.js.

## Edit package.json

Add a little script to run the server nicely, your package.json should look like this:

```json
{
  "dependencies": {
    "@faker-js/faker": "^7.3.0",
    "json-server": "^0.17.0",
    "lodash": "^4.17.21"
  },
  "scripts": {
    "gen": "json-server ./db/generate.js"
  }
}
```

## Run Forrest, run!

`npm run gen`
