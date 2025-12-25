"use client";
import { Suspense, useEffect, useState } from "react";
import ProductCard from "../card/ProductCard";
import ProductCardSkeleton from "../card/ProductCardSkeleton";

// export const freshFoodProducts = [
//     { id: 1, name: "Fresh Apples", image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg", category: "Fruits", price: "3.99/kg" },
//     { id: 2, name: "Organic Bananas", image: "https://images.pexels.com/photos/461208/pexels-photo-461208.jpeg", category: "Fruits", price: "2.79/kg" },
//     { id: 3, name: "Red Tomatoes", image: "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg", category: "Vegetables", price: "1.49/kg" },
//     { id: 4, name: "Fresh Broccoli", image: "https://images.pexels.com/photos/616404/pexels-photo-616404.jpeg", category: "Vegetables", price: "2.99/kg" },
//     { id: 5, name: "Green Cucumbers", image: "https://images.pexels.com/photos/20787/pexels-photo.jpg", category: "Vegetables", price: "1.99/kg" },
//     { id: 6, name: "Carrots", image: "https://images.pexels.com/photos/161519/pexels-photo-161519.jpeg", category: "Vegetables", price: "1.79/kg" },
//     { id: 7, name: "Fresh Strawberries", image: "https://images.pexels.com/photos/1021048/pexels-photo-1021048.jpeg", category: "Fruits", price: "5.49/kg" },
//     { id: 8, name: "Green Lettuce", image: "https://images.pexels.com/photos/1332186/pexels-photo-1332186.jpeg", category: "Vegetables", price: "2.49/unit" },
//     { id: 9, name: "Pineapple", image: "https://images.pexels.com/photos/615733/pexels-photo-615733.jpeg", category: "Fruits", price: "4.99/unit" },
//     { id: 10, name: "Blueberries", image: "https://images.pexels.com/photos/616959/pexels-photo-616959.jpeg", category: "Fruits", price: "6.99/kg" },
//     { id: 11, name: "Watermelon", image: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg", category: "Fruits", price: "1.99/kg" },
//     { id: 12, name: "Mango", image: "https://images.pexels.com/photos/661114/pexels-photo-661114.jpeg", category: "Fruits", price: "3.49/kg" },
//     { id: 13, name: "Oranges", image: "https://images.pexels.com/photos/42059/oranges-fruit-vitamins-healthy-eating-42059.jpeg", category: "Fruits", price: "2.99/kg" },
//     { id: 14, name: "Lemons", image: "https://images.pexels.com/photos/42059/pexels-photo-42059.jpeg", category: "Fruits", price: "3.29/kg" },
//     { id: 15, name: "Kiwis", image: "https://images.pexels.com/photos/1030949/pexels-photo-1030949.jpeg", category: "Fruits", price: "5.29/kg" },
//     { id: 16, name: "Peaches", image: "https://images.pexels.com/photos/1059655/pexels-photo-1059655.jpeg", category: "Fruits", price: "4.79/kg" },
//     { id: 17, name: "Pears", image: "https://images.pexels.com/photos/128420/pear-fruit-food-pear-tree-128420.jpeg", category: "Fruits", price: "3.89/kg" },
//     { id: 18, name: "Grapes", image: "https://images.pexels.com/photos/327482/pexels-photo-327482.jpeg", category: "Fruits", price: "3.49/kg" },
//     { id: 19, name: "Raspberries", image: "https://images.pexels.com/photos/461208/raspberries.jpeg", category: "Fruits", price: "7.99/kg" },
//     { id: 20, name: "Blackberries", image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg", category: "Fruits", price: "6.49/kg" },
//     { id: 21, name: "Spinach", image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg", category: "Vegetables", price: "2.19/kg" },
//     { id: 22, name: "Bell Peppers", image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg", category: "Vegetables", price: "3.99/kg" },
//     { id: 23, name: "Potatoes", image: "https://images.pexels.com/photos/45174/pexels-photo-45174.jpeg", category: "Vegetables", price: "1.29/kg" },
//     { id: 24, name: "Onions", image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg", category: "Vegetables", price: "1.59/kg" },
//     { id: 25, name: "Garlic", image: "https://images.pexels.com/photos/1190237/pexels-photo-1190237.jpeg", category: "Vegetables", price: "4.49/kg" },
//     { id: 26, name: "Cabbage", image: "https://images.pexels.com/photos/839471/pexels-photo-839471.jpeg", category: "Vegetables", price: "2.19/kg" },
//     { id: 27, name: "Cauliflower", image: "https://images.pexels.com/photos/65174/cauliflower-cabbage-vegetable-healthy-65174.jpeg", category: "Vegetables", price: "2.69/kg" },
//     { id: 28, name: "Eggplant", image: "https://images.pexels.com/photos/50710/pexels-photo-50710.jpeg", category: "Vegetables", price: "3.29/kg" },
//     { id: 29, name: "Zucchini", image: "https://images.pexels.com/photos/161236/pexels-photo-161236.jpeg", category: "Vegetables", price: "2.99/kg" },
//     { id: 30, name: "Sweet Corn", image: "https://images.pexels.com/photos/616407/pexels-photo-616407.jpeg", category: "Vegetables", price: "2.79/kg" },
//     { id: 31, name: "Sweet Potatoes", image: "https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg", category: "Vegetables", price: "1.99/kg" },
//     { id: 32, name: "Celery", image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg", category: "Vegetables", price: "2.49/kg" },
//     { id: 33, name: "Green Beans", image: "https://images.pexels.com/photos/593835/pexels-photo-593835.jpeg", category: "Vegetables", price: "3.19/kg" },
//     { id: 34, name: "Brussels Sprouts", image: "https://images.pexels.com/photos/1434825/pexels-photo-1434825.jpeg", category: "Vegetables", price: "4.29/kg" },
// ];

export interface ProductTypes {
    id: number;
    name: string;
    image: string;
    category: string;
    price: string;
}
export interface Meal {
    idMeal: string;
    strMeal: string;
    strCategory: string;
    strMealThumb: string;
}
const Product = () => {
    const [data, setData] = useState<Meal[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`) 
            .then((res) => res.json())
            .then((data) => {
                setData(data.meals || []); 
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching meals:", err);
                setLoading(false);
            });
    }, []);

    console.log(data);
    return (
        <div className="custom-container">
            <h1 className="text-2xl font-bold mb-6">Featured Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5">
                {data?.map((product: Meal) => (
                    <Suspense fallback={<ProductCardSkeleton />} key={product.idMeal}>
                        <ProductCard key={product.idMeal} product={product} />
                    </Suspense>
                ))}
            </div>
        </div>
    );
};

export default Product;
