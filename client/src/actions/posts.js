export const ADD_POST = 'ADD_POST'
export const GET_POSTS = 'GET_POSTS'
export const DELETE_POST = 'DELETE_POST'

export function addPost(comments, staffId, id) {
    return function (dispatch) {
      return fetch(`http://localhost:3001/posts/${id}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({comments, staffId}),
      })
        .then(res => res.json())
        .then(data => {
          dispatch({
            type: ADD_POST,
            payload: data.post,
          })             
        })
    }
  }
  
  
  export function getPosts() {
    return function (dispatch) {
      return fetch('http://localhost:3001/posts', {
         credentials: 'include' })
        .then((res) => res.json())
        .then(posts =>
          dispatch({
            type: GET_POSTS,
            payload: posts,
          })
        )
    }
  }
  
  export function deletePost(id) {
    return function (dispatch) {
      fetch(`http://localhost:3001/posts/${id}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(post => {
          dispatch({
            type: DELETE_POST,
            payload: post.id,
          })
        })
        
    }
  }