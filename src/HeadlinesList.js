import React from 'react'

class HeadlinesList extends React.Component {
  intervalID


  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {

    this.getData()

    this.intervalID = setInterval(this.getData.bind(this), 300000);
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
          error
        })
      }
    ) 
  }
        
  render() {
    const { error, isLoaded, items } = this.state
    if (error) {
      return <div>Error: {error.message}. Don't worry, I've just fallen asleep. Refresh the browser (⌘R) to bring me back. 
        I am hosted on a free dyno, so will go to sleep after a while.</div>
    } else if (!isLoaded) {
      return <div className="loading">This app takes about 10 seconds to load on initial fire-up. After that, it automatically refreshes. No need to do anything. Hang tight! It's loading...</div>;
    } else {
      return (
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
      )
    }
  }
}

export default HeadlinesList