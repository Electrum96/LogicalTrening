import { PRODUCT_DATA_ARRAY } from "../assets/data/productData";
import { makeAutoObservable } from "mobx";

class ProductStore {

    constructor() {
        makeAutoObservable(this)
    }

    productListAll = PRODUCT_DATA_ARRAY;
    
    get productList() { return this.productListAll.filter((product) => true ) }



} 

export default new ProductStore();
