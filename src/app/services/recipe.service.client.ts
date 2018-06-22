export class RecipeServiceClient {

  LOCAL_URL = 'http://localhost:4000';
  REMOTE_URL = 'https://eze-cuisine-nodejs-server.herokuapp.com';

  VARIABLE_URL = this.LOCAL_URL;

  RECIPE_URL = this.VARIABLE_URL + '/api/recipe';
  CREATED_RECIPE_URL = this.VARIABLE_URL + '/api/user/createdRecipe';

  createRecipe(result) {
    const recipe = {
      name: result['name'],
      ingredients: result['ingredientLines'].join('\n'),
      imageUrl: result['images'][0]['imageUrlsBySize'][360],
      totalTime: result['totalTime'],
      numberOfServings: result['numberOfServings'],
      yummlyRating: result['rating'],
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

  createChefsRecipe(newRecipe, chefId) {
    const recipe = {
      name: newRecipe['name'],
      ingredients: newRecipe['ingredients'],
      imageUrl: newRecipe['imageUrl'],
      totalTime: newRecipe['totalTime'],
      numberOfServings: newRecipe['numberOfServings'],
      createdBy: 'Chef',
      chef: chefId
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

  findRecipesBySearchQuery(searchText) {
    return fetch(this.RECIPE_URL + '/search/' + searchText)
      .then(response => response.json());
  }

  findCreatedRecipes() {
    return fetch(this.CREATED_RECIPE_URL, {
      credentials: 'include'
    }).then(response => response.json());
  }
}
