import Image from "next/image";
import { Meal } from "../Home/Product";
import { Typography } from "antd";
import { Button } from "antd/es/radio";

const { Title, Text } = Typography;

interface ProductCardProps {
    product: Meal;
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition transform hover:-translate-y-1">
            {/* Product Image */}
            <div className="relative w-full h-48">
                <Image
                    src={product.strMealThumb}
                    alt={product.strMeal}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Product Info */}
            <div className="p-4">
                <Title level={4} className="mb-1">
                    {product.strMeal}
                </Title>
                <Text type="secondary" className="block mb-2">
                    {product.strCategory}
                </Text>
                <Text strong className="text-lg text-green-600">
                    {product.idMeal}
                </Text>
            </div>
            <Button type="primary">Buy Now</Button>
        </div>
    );
};

export default ProductCard;
