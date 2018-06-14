export class RecipeServiceClient {

  RECIPE_URL = 'http://localhost:4000/api/recipe';

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
}
