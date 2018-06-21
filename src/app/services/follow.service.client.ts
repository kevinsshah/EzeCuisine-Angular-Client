export class FollowServiceClient {

  LOCAL_URL = 'http://localhost:4000';
  REMOTE_URL = 'https://eze-cuisine-nodejs-server.herokuapp.com';

  VARIABLE_URL = this.LOCAL_URL;

  USER_URL = this.VARIABLE_URL + '/api/user/UID';

  follow(toUserId) {
    return fetch(this.USER_URL
      .replace('UID', toUserId) + '/follow', {
      method: 'post',
      credentials: 'include',
    });
  }

  getFollowers(userId) {
    return fetch(this.USER_URL
      .replace('UID', userId) + '/followers')
      .then(response => response.json());
  }

  getFollowing(userId) {
    return fetch(this.USER_URL
      .replace('UID', userId) + '/following')
      .then(response => response.json());
  }
}
