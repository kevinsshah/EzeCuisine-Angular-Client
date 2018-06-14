export class UserServiceClient {

  USER_URL = 'http://localhost:4000/api/user';
  USER_PROFILE_URL = 'http://localhost:4000/api/profile';
  USER_LOGIN_URL = 'http://localhost:4000/api/login';
  USER_LOGOUT_URL = 'http://localhost:4000/api/logout';


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
    })
      .then(response => response.json());
  }

  createUser(username, password) {
    const user = {
      username,
      password
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
      .then(response => response.json());
  }
}
