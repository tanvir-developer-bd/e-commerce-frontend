import { Skeleton, Button } from "antd";

const ProductCardSkeleton = () => {
  return (
    <div className="border rounded-lg overflow-hidden shadow animate-pulse">
      {/* Skeleton for Image */}
      <div className="w-full h-48 bg-gray-200 relative">
        <Skeleton.Image active className="w-full h-full" />
      </div>

      {/* Skeleton for Info */}
      <div className="p-4">
        <Skeleton.Input active size="default" style={{ width: "60%", marginBottom: 8 }} />
        <Skeleton.Input active size="small" style={{ width: "40%", marginBottom: 8 }} />
        <Skeleton.Input active size="small" style={{ width: "30%" }} />
      </div>

      {/* Skeleton Button */}
      <div className="p-4">
        <Skeleton.Button active style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
