export class RatingServiceClient {
  LOCAL_URL = 'http://localhost:4000';
  REMOTE_URL = 'https://eze-cuisine-nodejs-server.herokuapp.com';

  VARIABLE_URL = this.LOCAL_URL;

  RECIPE_URL = this.VARIABLE_URL + '/api/recipe';
  USER_RATING_URL = this.VARIABLE_URL + '/api/user/ratedRecipe';

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

  findRatedRecipesForUser() {
    return fetch(this.USER_RATING_URL, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  findRatedUsersForRecipe(recipeId) {
    return fetch(this.RECIPE_URL + '/' + recipeId + '/ratedUser')
      .then(response => response.json());
  }
}
