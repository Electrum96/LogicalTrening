import { PRODUCT_DATA_ARRAY } from "../assets/data/productData";
import { makeAutoObservable } from "mobx";

class ProductStore {

    constructor() {
        makeAutoObservable(this)
    }

    filterTitle = {
        classTab: 'Main'
    };

    productListAll = PRODUCT_DATA_ARRAY;
    productFiltered = PRODUCT_DATA_ARRAY;

    filterProduct = tab => {
        this.productFiltered = this.productListAll.filter(product => product.classTab === tab.classTab)
        this.filterTitle = tab;
    }

   
    findProduct = (id) => {
        return this.productListAll.find((item) => item.id === id) 
    }

    add = (id) => {
        const product = this.findProduct(id);
        console.log(product);
        product.inBasket = true;
        console.log(product.inBasket);
    }
    remove = (id) => {
        const product = this.findProduct(id);
        console.log(product);
        product.inBasket = false;
        console.log(product.inBasket);
    }


    increment = (id) => {
        const product = this.findProduct(id);
        console.log(product);

        if (product) { product.count += 1 }

    }

    decrement = (id) => {
        const product = this.findProduct(id);
        if (product && product.count > 1) { product.count -= 1 } else { this.remove(id) }

    }

    clear = () => {
        this.basketList.forEach(elem => {
          elem.inBasket = false;
        //   elem.count = 1;
        });
      };


    get basketList() {
        return this.productListAll.filter((product) => product.inBasket)
    };

    get totalPrice() { return this.basketList.reduce((acc, product) => acc + product.count * product.price, 0) }

}

export default new ProductStore();
