import React from 'react'
import About from './About'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


// my local server API and the Heroku-hosted API
// I switch these around when testing things
const url = "https://flask-headlines-api.herokuapp.com/headlines"
const urlDev = "http://127.0.0.1:5000/headlines"

class HeadlinesList extends React.Component {
  intervalID

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      copyright: "© James Malvern 2020",
      date: null
    };
  }

  // this all gets run on first loading
  // sleep timer to run every 5 mins 
  componentDidMount() {
    this.getData()
    this.intervalID = setInterval(this.getData.bind(this), 300000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  // this is a vain attempt to revive the app if it times out
  // zombie() {
  //   if (this.error != null) {
  //     this.getData()
  //   } else {
  //     return
  //   }
  // }
  
  getData = () => {
    fetch(url)
    .then(res => res.json())
    .then(
      (data) => {
        this.setState({
          isLoaded: true,
          items: data.data,
          date: new Date().toLocaleTimeString() 
        })
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error,
        })
      }
    ) 
  } 

  // this is where the HTML is created
  // once the loading is complete, it will map over the items array and display
  // I can't put comments inside the render function. crashes the app
  // From the items array I have access to the paper and headline variables
  render() {
    const { error, isLoaded, items } = this.state
    if (error) {
      return <div className="errorMessage"> 
          I am hosted on a free dyno, so I will go to sleep after a while.
          Refresh the browser to bring me back.
        </div>
    } else if (!isLoaded) {
      return(
        <div className="loading">
          <div className="loadingMessage">
            This app uses a free dyno, so it may take a while to load. Once loaded, it updates automatically
          </div>
          <Loader className="spinner"
            type="Bars"
            color="#ec1701"
            height={200}
            width={200}
            timeout={30000}
          /> 
        </div>
      )      
    } else {
      return (
        <div>
          <h6 className="updated">Updated at: {this.state.date}</h6>
          <div className="divider"></div>
        <ul>
          {items.map(item => (
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <div className="container" key={item.paper}>
                <div className="content" >
                  <h3><span className="newspaperTitle">{item.paper}</span> </h3>
                </div>
                <div className="overlay">
                  <h3><span className="headlineTitle">{item.headline}</span></h3>
                </div>
              </div> 
            </a>
            
          ))}
        </ul>
        <div className="footer">
          <p className="copyright">
            <span><About /></span>
            <a href="https://jamesmalvern.com" target="_blank" rel="noopener noreferrer">{this.state.copyright}</a>
            <div>
              <a href="https://twitter.com/UkHeadline">
                <img src="https://img.icons8.com/android/48/000000/twitter.png"/>
              </a>
            </div>
          </p>
        </div>
      </div>
      )
    }
  }
}

export default HeadlinesList
