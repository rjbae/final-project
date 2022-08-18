// import React from 'react';

// export default class UserPost extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       posts: []
//     };
//   }

//   componentDidMount() {
//     const req = {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'X-Access-Token': localStorage.getItem('react-context.jwt')
//       }
//     };
//     fetch('/api/posts', req)
//       .then(response => response.json())
//       .then(data => this.setState({ posts: data }));
//   }

//   render() {
//     return (
//       <>
//       <div className='d-flex justify-content-center'>
//         {this.state.posts.map(post =>
//           <div key={post.postId}>
//             <img src={post.photoUrl}></img>
//           </div>
//         )}
//       </div>
//       </>
//     );
//   }
// }
