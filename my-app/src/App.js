import React from 'react';
import axios from 'axios';
import Signup from './components/Signup.component';


//app.js
// import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import './App.css';
// import Posts from "./components/posts.component";
// import CreatePosts from "./components/create-posts.component";
// import Signup from './components/Signup.component';
// import Navbar from "./components/navbar.component";
// // function App() {
//   return (
//     <Router>
//       <Navbar /> 
//       <Route path="/posts" exact component={Posts} />
//       <Route path="/posts/new" exact component={CreatePosts} />
//       <Route path="/user/new" exact component={Signup} />
//       <Route path="/" exact component={Navbar} />
//     </Router>
//   );
// }
// export default App;




// Components are like functions that return HTML elements.
class App extends React.Component{

  // component properties should be kept in an object called state
  constructor() {
    super();
    this.state = {
      post: '',
      posts: []
    };
  }

  componentDidMount = () => {
    this.getBlogPost();
  }

  getBlogPost = () => {
    axios.get('/api/posts')
    .then((response) => {
      const data = response.data
      this.setState({posts: data})
      console.log('Data has been recieved');
    })
    .catch(() => {
      console.log('Error')
    })
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  };

  submit = (event) => {
    event.preventDefault();

    const post = {
      message: this.state.post
    };

    console.log(post)

    axios({
      url: '/api/posts',
      method: 'POST',
      data: post
    })

    .then(() => {
      console.log('Data has been sent to ther server');
    })
    .catch(() => {
      console.log('Error');
    });
  }

  displayPosts = (posts) => {
    if (!posts.length) return null;

    return posts.map((post, index) => (
      <div key={index} className="blog-post_display">
      <h4>{post.message}</h4>
      </div>
    ));
  };

// purpose of render is to display the specified HTML code inside the specified HTML element
  render(){
    console.log('State: ', this.state)
    return(
      <div>
        <h2> Welcome to Acebook </h2>
        <form onSubmit={this.submit}>
          <div className="form-input">
            <textarea
            name="post"
            placeholder="Enter your post"
            cols="30"
            rows="10"
            value={this.state.post}
            onChange={this.handleChange}>
            </textarea>
          </div>

          <button>Submit</button>
        </form>

        <div className="newsfeed">
          <h2>Timeline</h2>
          {this.displayPosts(this.state.posts)}
        </div>

        <div className="SignUp">
          <Signup/>
        </div>
      </div>
    );
  }
}

export default App;
