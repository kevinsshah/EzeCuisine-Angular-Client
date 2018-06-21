export class RatingServiceClient {
  LOCAL_URL = 'http://localhost:4000';
  REMOTE_URL = 'https://eze-cuisine-nodejs-server.herokuapp.com';

  VARIABLE_URL = this.LOCAL_URL;

  RECIPE_URL = this.VARIABLE_URL + '/api/recipe';
  CURRENT_USER_RATING_URL = this.VARIABLE_URL + '/api/user/ratedRecipe';
  USER_RATING_URL = this.VARIABLE_URL + '/api/user/UID/ratedRecipe';

  rate(recipeId, rating) {
    const ratingObject = {rating};
    return fetch(this.RECIPE_URL + '/' + recipeId + '/rating', {
      method: 'post',
      credentials: 'include',
      body: JSON.stringify(ratingObject),
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  findRatedRecipesForCurrentUser() {
    return fetch(this.CURRENT_USER_RATING_URL, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  findRatedRecipesForUser(userId) {
    return fetch(this.USER_RATING_URL.replace('UID', userId))
      .then(response => response.json());
  }

  findRatedUsersForRecipe(recipeId) {
    return fetch(this.RECIPE_URL + '/' + recipeId + '/ratedUser')
      .then(response => response.json());
  }
}
