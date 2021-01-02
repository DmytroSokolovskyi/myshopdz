export class ProductsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = 'https://fakestoreapi.com/products'
    }

    getProducts() {
      return   this.httpClient.get(this.baseUrl)
    }
}
