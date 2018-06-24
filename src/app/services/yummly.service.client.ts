export class YummlyServiceClient {

  YUMMLY_SEARCH_API_URL =
    'https://api.yummly.com/v1/api/recipes?_app_id=41920347&_app_key=d97a6b528e767eaa3c6e63d0cd99d6e7&' +
    'q=QUERY&' +
    'maxResult=10&' +
    'start=STARTINDEX&' +
    'requirePictures=true';

  YUMMLY_GET_API_URL =
    'https://api.yummly.com/v1/api/recipe/RECIPEID?_app_id=41920347&_app_key=d97a6b528e767eaa3c6e63d0cd99d6e7';

  findAllRecipes(query, pageNumber) {
    const startIndex = (pageNumber - 1) * 10;
    return fetch(this.YUMMLY_SEARCH_API_URL
      .replace('QUERY', query)
      .replace('STARTINDEX', (startIndex).toString()))
      .then(response => response.json());
  }

  findRecipeById(recipeId) {
    return fetch(this.YUMMLY_GET_API_URL
      .replace('RECIPEID', recipeId))
      .then(response => response.json());
  }
}
