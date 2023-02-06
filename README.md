# A Faker API
You can run two types of server:
* One with freshly generated random fake art data. This will run a virtual json database that will last for the life of the server.
* Other using a prebuilt data set. This option runs from a file and persist the state of the data.

The json you'll get has the following schema:
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
## To use this project
1. Install Packages:
```
npm install
```
2. Run a server connected to a database prefilled with 30 random objects:
```
npm run generate
```
3. Alternatively, to run a server using the prebuilt `art.json` file as your database, run:
```
npm run art-db
```
Both options will run servers in your localhost (default is 3000) that you can send http requests to.
