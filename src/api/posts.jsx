import { BASE_URL, request } from './api';

export function getAllPosts() {
  return request(`${BASE_URL}/posts`);
}

export function deletePost(postId) {
  return request(`${BASE_URL}/posts/${postId}`, {
    method: 'DELETE',
  });
}

export function addNewPost(newPost) {
  return request(`${BASE_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(newPost),
  });
}

export function getPostDetails(postId) {
  return request(`${BASE_URL}/posts/${postId}`);
}
