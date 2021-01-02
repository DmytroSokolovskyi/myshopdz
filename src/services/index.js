import {httpClient} from "./http-client";
import {ProductsService} from './products-service';


export const services = {
    productsService: new ProductsService(httpClient)
};

export const userServices = () => {
    return services;
};
