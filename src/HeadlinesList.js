import React from 'react'
import About from './About'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


class HeadlinesList extends React.Component {
  intervalID


  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      copyright: "© James Malvern 2020"
    };
  }

  componentDidMount() {

    this.getData()

    this.intervalID = setInterval(this.getData.bind(this), 300000)
  }

  componentWillUnmount() {

    clearInterval(this.intervalID);
  }
  
  getData = () => {
    fetch("https://flask-headlines-api.herokuapp.com/headlines")
    .then(res => res.json())
    .then(
      (data) => {
        this.setState({
          isLoaded: true,
          items: data.data,
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
        
  render() {
    const { error, isLoaded, items } = this.state
    if (error) {
      return <div className="errorMessage"> 
          I am hosted on a free dyno, so I will go to sleep after a while.
          Refresh the browser (⌘R) to bring me back.
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
            timeout={25000}
          /> 
        </div>
      )      
    } else {
      return (
        <div>
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

export default HeadlinesList