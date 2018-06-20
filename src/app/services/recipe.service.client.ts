export class RecipeServiceClient {

  LOCAL_URL = 'http://localhost:4000';
  REMOTE_URL = 'https://eze-cuisine-nodejs-server.herokuapp.com';

  VARIABLE_URL = this.REMOTE_URL;

  RECIPE_URL = this.VARIABLE_URL + '/api/recipe';
  USER_LIKE_URL = this.VARIABLE_URL + '/api/user/likedRecipe';
  USER_RATING_URL = this.VARIABLE_URL + '/api/user/ratedRecipe';

  createRecipe(result) {
    const recipe = {
      name: result['name'],
      ingredients: result['ingredientLines'].join('\n'),
      imageUrl: result['images'][0]['imageUrlsBySize'][360],
      yummlyId: result['id']
    };
    return fetch(this.RECIPE_URL, {
      method: 'post',
      body: JSON.stringify(recipe),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  findRecipeById(yummyId) {
    return fetch(this.RECIPE_URL + '/' + yummyId)
      .then(response => response.text())
      .then((text) => text.length ? JSON.parse(text) : {});
  }

  like(recipeId) {
    return fetch(this.RECIPE_URL + '/' + recipeId + '/like', {
      method: 'post',
      credentials: 'include'
    });
  }

  rate(recipeId, rating) {
    const ratingObject = {rating}
    return fetch(this.RECIPE_URL + '/' + recipeId + '/rating', {
      method: 'post',
      credentials: 'include',
      body: JSON.stringify(ratingObject),
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  findLikedRecipesForUser() {
      return fetch(this.USER_LIKE_URL, {
        credentials: 'include'
      })
        .then(response => response.json());
  }

  findRatedRecipesForUser() {
    return fetch(this.USER_RATING_URL, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  findLikedUsersForRecipe(recipeId) {
      return fetch(this.RECIPE_URL + '/' + recipeId + '/likedUser')
        .then(response => response.json());
  }

  findRatedUsersForRecipe(recipeId) {
    return fetch(this.RECIPE_URL + '/' + recipeId + '/ratedUser')
      .then(response => response.json());
  }
}
