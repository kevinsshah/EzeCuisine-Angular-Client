export class YummlyServiceClient {

  YUMMLY_API_URL =
    'http://api.yummly.com/v1/api/recipes?_app_id=708820df&_app_key=5fca28c93b86e595f47404b7877a94d5&q=QUERY&maxResult=100&start=10';

  findAllResults(query) {
    return fetch(this.YUMMLY_API_URL.replace('QUERY', query))
      .then(response => response.json());
  }
}
