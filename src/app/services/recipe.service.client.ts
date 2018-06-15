export class RecipeServiceClient {

  RECIPE_URL = 'http://localhost:4000/api/recipe';
  USER_LIKE_URL = 'http://localhost:4000/api/user/likedRecipe';

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
