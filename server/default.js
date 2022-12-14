
import { products } from './constants/data.js';
import Product from './models/productSchema.js';

const DefaultData = async () => {
    try {
        await Product.insertMany(products);

        console.log('Data Imported Successfully!');
    }
    catch(err) {
        console.log('Error while inserting default data ', err.message);
    }
};

export default DefaultData;