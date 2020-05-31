import React from "react"
import Popup from "reactjs-popup"

export default About => (
  <Popup trigger={<button className="button"> Click for more info </button>} modal>
    {close => (
      <div className="modal">
       
        <div className="aboutHeader"> About UK Headline Checker </div>
        <div className="aboutContent">
          {" "}
          This app updates automatically every five minutes. It's designed to be viewed on a large screen in a newsroom,
          in order to monitor the national discourse (as directed by the newspapers).
          <br />
           <br />
          It scrapes 16 UK (& Eire) newspapers for their main headlines. 
          The newspapers are ordered roughly by political alignment. Having the papers positioned like this
          makes it easier to view
          how major stories are spun by different organisations.
           <br />
           <br />
          The Daily Mirror, Daily Star and Daily Post are all owned by Reach PLC, who have a great dev team 
          - my scraper sometimes doesn't get past their defences.
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