import headphones from '../images/headphones.jpg';
import iphone from '../images/iphone.jpg';
import nikon from '../images/nikon.jpg';

const products = [
    {
        photo: headphones,
        name: 'Headphones',
        productNumber: '#384814187917',
        date: 'Aug 12, 2020',
        category: 'Fashion',
        brand: 'Swallow',
        price: '$99.89',
        status: 'Available',
        viewers: '18k'
    },
    {
        photo: iphone,
        name: 'Smartphone',
        productNumber: '#384815185923',
        date: 'Aug 12, 2020',
        category: 'Gadget',
        brand: 'Mito',
        price: '$499.89',
        status: 'Available',
        viewers: '24k'
    },
]

const recentProducts = [
    {
        photo: iphone,
        time: '2',
        brand: 'Redmi 4X',
        price: '$499.89'
    },
    {
        photo: headphones,
        time: '4',
        brand: 'Acer E1-421',
        price: '$80.00'
    },
    {
        photo: nikon,
        time: '16',
        brand: 'Nikon',
        price: '$980.00'
    },
]

export { products, recentProducts };