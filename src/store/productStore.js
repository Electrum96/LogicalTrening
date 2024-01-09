import { PRODUCT_DATA_ARRAY } from "../assets/data/productData";
import { makeAutoObservable } from "mobx";

class ProductStore {

    constructor() {
        makeAutoObservable(this)
    }

    productListAll = PRODUCT_DATA_ARRAY;


    findProduct = (id) => {
        return this.productListAll.find((item) => item.id === id);
    }

    filterProduct = (classTab) => {
        if (classTab === 'All') { return this.productListAll } else {
             return this.productListAll.filter((product) => product.classTab === classTab)}
        }

        increment = (id) => {
            const product = this.findProduct(id);

            if (product) { product.count += 1 }

        }
        decrement = (id) => {
            const product = this.findProduct(id);
            if (product && product.count > 1) { product.count -= 1 } else { this.remove(id) }

        }

        add = (id) => {
            const product = this.findProduct(id);
            product.inBasket = true;
        }
        remove = (id) => {
            const product = this.findProduct(id);
            product.inBasket = false;
        }
    
    get productList() { return this.productListAll.filter((product) => true) };
    
    get basketList() {
            return this.productListAll.filter((product) => product.inBasket)
        };

    get totalPrice() { return this.basketList.reduce((acc, product) => acc + product.count * product.price, 0) }

    } 

export default new ProductStore();
