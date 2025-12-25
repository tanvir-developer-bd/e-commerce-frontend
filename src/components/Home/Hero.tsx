'use client';

import { Button, Typography } from "antd";
import Image from "next/image";
import img from "@/public/hero.png"
const { Title, Text } = Typography;

const Hero = () => {
  return (
    <div className="bg-[#bce3c9] min-h-[89vh]">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 custom-container ">
      {/* Text Content */}
      <div className="flex-1 space-y-4">
        <Title level={1} style={{fontWeight: "bold"}}>Fresh Food Bangladeshi</Title>
        <Text className="text-gray-700 text-base md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, eum praesentium culpa suscipit voluptatum accusamus voluptates. Laudantium accusamus necessitatibus sed eligendi porro repellat numquam. Architecto quisquam magni omnis tempora repudiandae?
        </Text>
       <div>
         <Button
          type="primary"
          size="large"
          style={{ backgroundColor: "#3bb77e", borderColor: "#3bb77e", fontWeight: 600, marginTop: "15px" }}
        >
          Shop Now
        </Button>
       </div>
      </div>

      {/* Image */}
      <div className="flex-1 flex justify-center md:justify-end mt-5">
        <Image
          src={img}
          width={400}
          height={400}
          alt="Hero Image"
          className="rounded-lg object-cover"
        />
      </div>
    </div>
    </div>
  );
};

export default Hero;
