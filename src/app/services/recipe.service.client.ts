export class RecipeServiceClient {

  LOCAL_URL = 'http://localhost:4000';
  REMOTE_URL = 'https://eze-cuisine-nodejs-server.herokuapp.com';

  VARIABLE_URL = this.LOCAL_URL;

  RECIPE_URL = this.VARIABLE_URL + '/api/recipe';

  createRecipe(result) {
    const recipe = {
      name: result['name'],
      ingredients: result['ingredientLines'].join('\n'),
      imageUrl: result['images'][0]['imageUrlsBySize'][360],
      yield: result['yield'],
      totalTime: result['totalTime'],
      numberOfServings: result['numberOfServings'],
      course: result['attributes']['course'],
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

  findRecipeById(yummyId) {
    return fetch(this.RECIPE_URL + '/' + yummyId)
      .then(response => response.text())
      .then((text) => text.length ? JSON.parse(text) : {});
  }

  findRecipesBySearchQuery(searchText) {
    return fetch(this.RECIPE_URL + '/search/' + searchText)
      .then(response => response.json());
  }
}
