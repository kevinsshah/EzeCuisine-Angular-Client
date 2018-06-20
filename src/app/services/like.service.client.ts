export class LikeServiceClient {
  LOCAL_URL = 'http://localhost:4000';
  REMOTE_URL = 'https://eze-cuisine-nodejs-server.herokuapp.com';

  VARIABLE_URL = this.LOCAL_URL;

  RECIPE_URL = this.VARIABLE_URL + '/api/recipe';

  USER_LIKE_URL = this.VARIABLE_URL + '/api/user/likedRecipe';

  like(recipeId) {
    return fetch(this.RECIPE_URL + '/' + recipeId + '/like', {
      method: 'post',
      credentials: 'include'
    });
  }

  findLikedRecipesForUser() {
    return fetch(this.USER_LIKE_URL, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  findLikedUsersForRecipe(recipeId) {
    return fetch(this.RECIPE_URL + '/' + recipeId + '/likedUser')
      .then(response => response.json());
  }
}
