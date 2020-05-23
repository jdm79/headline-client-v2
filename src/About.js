import React from "react"
import Popup from "reactjs-popup"

export default About => (
  <Popup trigger={<button className="button"> More info here </button>} modal>
    {close => (
      <div className="modal">
       
        <div className="aboutHeader"> About UK Headline Checker </div>
        <div className="aboutContent">
          {" "}
          This app updates automatically every five minutes.It's designed to be viewed on a large screen in a newsroom,
          in order to monitor the national discourse (as directed by the newspapers).
          It's also viewable on a mobile and iPad, but it's not designed primarily for these devices.
          <br />
           <br />
          It scrapes 16 UK (& Eire) newspapers for their main headlines. 
          The newspapers are ordered roughly by political alignment, with The Guardian on the left,
          The Daily Mail on the right. Having the papers positioned like this makes it easier to view
          how major stories are spun by different organisations.
           <br />
           <br />
          The Daily Mirror, Daily Star and Daily Post are all owned by Reach PLC, and they have done
          a great job trying to stop people scraping their html. Sometimes the API cannot scrape them. 
          Usually it can though.
           <br />
           <br />
          UK Headline Checker was made with React on the front end, and a Flask Python API on the back end.
          The web scraper uses the Beautiful Soup library. State management is default React state manager.
          It's hosted on Heroku on a free plan, so it does take a while to wake up when first loading - 
          but this is also because the API is making a new scrape of all the national main headlines.
        </div>
        <div className="actions">
          
          <button
            className="closeButton"
            onClick={() => {
              console.log("modal closed ")
              close()
            }}
          >Close
          </button>
        </div>
      </div>
    )}
  </Popup>
)