import {
  FETCH_POSTS,
  NEW_POST
} from './types';

export const fetchPosts = () => herach => {  
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts =>
      herach({
        type: FETCH_POSTS,
        payload: posts
      }));
};
export const createPost = (postData) => herach => {  
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post => herach({
      type: NEW_POST,
      payload: post
    }));
};