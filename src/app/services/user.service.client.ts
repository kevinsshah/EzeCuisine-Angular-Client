export class UserServiceClient {

  LOCAL_URL = 'http://localhost:4000';
  REMOTE_URL = 'https://eze-cuisine-nodejs-server.herokuapp.com';

  VARIABLE_URL = this.LOCAL_URL;

  USER_URL = this.VARIABLE_URL + '/api/user';
  USER_PROFILE_URL = this.VARIABLE_URL + '/api/profile';
  USER_LOGIN_URL = this.VARIABLE_URL + '/api/login';
  USER_LOGOUT_URL = this.VARIABLE_URL + '/api/logout';


  login(username, password) {
    const user = {
      username,
      password
    };

    return fetch(this.USER_LOGIN_URL, {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  logout() {
    return fetch(this.USER_LOGOUT_URL, {
      method: 'post',
      credentials: 'include'
    });
  }

  createUser(username, password, userRole) {
    const user = {
      username,
      password,
      role: userRole
    };

    return fetch(this.USER_URL, {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  profile() {
    return fetch(this.USER_PROFILE_URL,
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.text())
      .then(text => text.length ? JSON.parse(text) : {});
  }

  update(user) {
    return fetch(this.USER_PROFILE_URL, {
      credentials: 'include',
      method: 'put',
      body: JSON.stringify(user),
      headers: {
        'content-type' : 'application/json'
      }
    }) ;
  }

  profileOfUser(userId) {
    return fetch(this.USER_PROFILE_URL + userId)
      .then(response => response.json());
  }
}
