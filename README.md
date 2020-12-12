# Newsler - a simple lightweight news reader app

## Functionalities

* Browse news listing
* Open individual news items
* Navigate to original/source URL
* Open news story straight via news id, eg `/story/{storyId}`
* Dark mode and Contrast mode for accessibility
* Read comments
* Add comments

## Technologies used

_Newsler_ is based on ReactJs, utilizing GraphQL for content fetching.

* Node.js
* React.js for UI framework
* Bootstrap for premade UI components and icons
* Emotion for writing CSS in JS
* Apollo Client for GraphQL integration

See live demo [here](http://demo.spinaldev.com/newsler/).

## Running locally

To run locally:

1. Clone this repository
2. Run `npm i` to install modules
3. Run `npm start`
4. Follow the instructions in console

## Deployment

To build and run the app on a webserver, do the following:

1. Clone this repository
2. Run `npm i` to install modules
3. Run `npm run build` to build the app
4. Copy the contents of `/build` folder into your desired folder on your webserver

### Making direct linking to stories work

In order to let your webserver know where to fetch stories from, we
need to tell it to redirect all subfolder requests to `index.html` file. We
can do that with a simple `.htaccess` file.

1. Create `.htaccess` file in the app's root folder.
2. Paste the following inside it:

```Apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

## TODO

* Update Apollo Client cache after mutation (comment creation) to reflect changes while not doing a refetch
* Make clicking on comments scroll to comments section
* Tests

## ROADMAP

* Implement better state management (eg Redux)