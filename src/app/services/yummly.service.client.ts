export class YummlyServiceClient {

  YUMMLY_SEARCH_API_URL =
    'http://api.yummly.com/v1/api/recipes?_app_id=708820df&_app_key=5fca28c93b86e595f47404b7877a94d5&' +
    'q=QUERY&' +
    'maxResult=10&' +
    'start=STARTINDEX&' +
    'requirePictures=true';

  YUMMLY_GET_API_URL =
    'http://api.yummly.com/v1/api/recipe/RECIPEID?_app_id=708820df&_app_key=5fca28c93b86e595f47404b7877a94d5';

  findAllMeals(query, pageNumber) {
    const startIndex = (pageNumber - 1) * 10;
    return fetch(this.YUMMLY_SEARCH_API_URL
      .replace('QUERY', query)
      .replace('STARTINDEX', (startIndex).toString()))
      .then(response => response.json());
  }

  findMealById(mealId) {
    return fetch(this.YUMMLY_GET_API_URL
      .replace('RECIPEID', mealId))
      .then(response => response.json());
  }
}
