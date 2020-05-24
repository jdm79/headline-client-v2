import React from 'react'
import About from './About'
import Loader from 'react-loader-spinner'
// import Timecode from 'react-timecode';


import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const data = [
  {"paper": "Daily mirror", "headline": "Boris tries to save Dominic Cummings' job by declaring 'it's not like he was visiting a lover' as maverick ally is accused of visiting parents' Durham home a SECOND time and breaking lockdown rules by 'strolling in bluebell wood' with his wife"},
  {"paper": "The Independent", "headline": "Boris tries to save Dominic Cummings' job by declaring 'it's not like he was visiting a lover' as maverick ally is accused of visiting parents' Durham home a SECOND time and breaking lockdown rules by 'strolling in bluebell wood' with his wife"},
  {"paper": "Daily Mail", "headline": "Boris tries to save Dominic Cummings' job by declaring 'it's not like he was visiting a lover' as maverick ally is accused of visiting parents' Durham home a SECOND time and breaking lockdown rules by 'strolling in bluebell wood' with his wifeTrump heads to golf course as US coronavirus death toll nears 100,000"},
  {"paper": "Daily Mirror", "headline": "Trump heads to golf courBoris tries to save Dominic Cummings' job by declaring 'it's not like he was visiting a lover' as maverick ally is accused of visiting parents' Durham home a SECOND time and breaking lockdown rules by 'strolling in bluebell wood' with his wifese as US coronavirus death toll nears 100,000"},
  {"paper": "Financial Times", "headline": "Trump Boris tries to save Dominic Cummings' job by declaring 'it's not like he was visiting a lover' as maverick ally is accused of visiting parents' Durham home a SECOND time and breaking lockdown rules by 'strolling in bluebell wood' with his wife to golf course as US coronavirus death toll nears 100,000"},
  {"paper": "Evening Standard", "headline": "Trump Boris tries to save Dominic Cummings' job by declaring 'it's not like he was visiting a lover' as maverick ally is accused of visiting parents' Durham home a SECOND time and breaking lockdown rules by 'strolling in bluebell wood' with his wife to golf course as US coronavirus death toll nears 100,000"},
  {"paper": "Daily Express", "headline": "Trump heads tBoris tries to save Dominic Cummings' job by declaring 'it's not like he was visiting a lover' as maverick ally is accused of visiting parents' Durham home a SECOND time and breaking lockdown rules by 'strolling in bluebell wood' with his wifeo golf course as US coronavirus death toll nears 100,000"},
  {"paper": "The i", "headline": "Trump heads to golf course as US coronavirus death toll nears 100,000"},
  {"paper": "Metro", "headline": "Trump heads to golfBoris tries to save Dominic Cummings' job by declaring 'it's not like he was visiting a lover' as maverick ally is accused of visiting parents' Durham home a SECOND time and breaking lockdown rules by 'strolling in bluebell wood' with his wife course as US coronavirus death toll nears 100,000"},
  {"paper": "Daily Star", "headline": "Trump heads to golf course as US coronavirus death toll nears 100,000"},
  {"paper": "The Sun", "headline": "Boris tries to save Dominic Cummings' job by declaring 'it's not like he was visiting a lover' as maverick ally is accused of visiting parents' Durham home a SECOND time and breaking lockdown rules by 'strolling in bluebell wood' with his wifeTrump heads to golf course as US coronavirus death toll nears 100,000  nic Cummings' job by declaring 'it's not like he was visiting a lover' as maverick ally is accused of visiting parents' Durham home a SECOND time and breaking lockdown rules by 'strolling in bluebell wood' with his wifeTrump heads to golf course as US coronavirus death toll nears 100,000  "},
  {"paper": "Morning Star", "headline": "Trump heads to golf course as US coronavirus death toll nears 100,000"},
  {"paper": "Irish Sun", "headline": "Trump heads to golf course as US coronavirus death toll nears 100,000"},
  {"paper": "The Scotsman", "headline": "Trump Boris tries to save Dominic Cummings' job by declaring 'it's not like he was visiting a lover' as maverick ally is accused of visiting parents' Durham home a SECOND time and breaking lockdown rules by 'strolling in bluebell wood' with his wife to golf course as US coronavirus death toll nears 100,000"},
  {"paper": "Telegraph", "headline": "Trump heads to golf course as US coronavirus death toll nears 100,000"},
  {"paper": "Times", "headline": "Boris tries to save Dominic Cummings' job by declaring 'it's not like he was visiting a lover' as maverick ally is accused of visiting parents' Durham home a SECOND time and breaking lockdown rules by 'strolling in bluebell wood' with his wife"},
]

class TestHeadlinesList extends React.Component {
  intervalID

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      copyright: "© James Malvern 2020",
      date: new Date().toLocaleTimeString()
    };
  }

  componentDidMount() {

    this.setState({
      isLoaded: true,
      items: data,
    })

    this.getDate()
  }

  componentWillUnmount() {

    clearInterval(this.intervalID);
  }

  getDate() {
    var date = { currentTime: new Date().toLocaleTimeString() };
  }
        
  render() {
    const { error, isLoaded, items } = this.state
    if (error) {
      return <div className="errorMessage">I've fallen asleep. Refresh the browser (⌘R) to bring me back. 
        I am hosted on a free dyno, so I will go to sleep after a while.</div>
    } else if (!isLoaded) {
      return(
        <div className="loading">
          <div className="loadingMessage">
          This app is hosted on a free plan, so the server will go to sleep from time to time. 
          It takes about 10 seconds to load on initial fire-up. 
          After that, the headlines automatically refresh. No need to do anything.
          </div>
          <Loader className="spinner"
            type="Bars"
            color="#ec1701"
            height={200}
            width={200}
            timeout={20000}
          /> 
        </div>
      )      
    } else {
      return (
      

        <div>
          <h6 className="updated">Updated at: {this.state.date}</h6>
        <ul>
          {items.map(item => (
            <div className="container" key={item.paper}>
              <div className="content" >
                <h3><span className="newspaperTitle">{item.paper}</span> </h3>
              </div>
              <div className="overlay">
          <h3><span className="headlineTitle">{item.headline}</span></h3>
              </div>
            </div>  
          ))}
        </ul>
        <div className="footer">
        <p class="copyright">{this.state.copyright}<span><About /></span></p>
      </div>
      </div>
      )
    }
  }
}

export default TestHeadlinesList