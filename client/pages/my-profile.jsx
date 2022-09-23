import React from 'react';
// import UserPost from '../components/user-post-details';

export default class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      posts: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const req = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Access-Token': localStorage.getItem('react-context-jwt')
      }
    };
    fetch('/api/posts', req)
      .then(response => response.json())
      .then(data => this.setState({ posts: data }));
  }

  // handleClick() {
  //   if (!this.state.isClicked) {
  //     return (
  //       <>
  //         <UserPost />
  //       </>
  //     );
  //   }
  // }

  render() {
    return (
      <>
      <div className='d-flex justify-content-between'>
        <h2 className='profile-header'>My Profile</h2>
        <h2 className='post-header'>Post <a href='#create-post'><i className="fas fa-plus"></i></a></h2>
      </div>
      <div className='profile-container justify-content-evenly align-items-center'>
            {this.state.posts.map(post =>
            <div key={post.postId} className='row'>
              <div className='col-sm-3'>
                <a href='#post-details' onClick={() => {
                    <div key={post.postId}>
                      <img src={post.photoUrl}></img>
                    </div>;
                }}>
                <img src={post.photoUrl} className='profile-posts'></img>
                </a>
              </div>
            </div>
            )}
      </div>
      </>
    );
  }
}
