This CRA uses the [Heroku Buildpack for create-react-app](https://github.com/mars/create-react-app-buildpack) to deploy to Heroku. 

It's a data-driven app using an API I made with Flask and Python. Very much beta version.

It's hosted on free plans on Heroku, so it takes a while to load - also the API has to do a lot of web scraping to build up the latest data to serve.

The app will automatically update once it's loaded up. No need to refresh the page (Unless the error message pops up, in which case for now you need to refresh to bring it back to life).