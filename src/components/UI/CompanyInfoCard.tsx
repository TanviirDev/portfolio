import React from "react";
import Image from "next/image";
import Card from "./Card";
import Link from "./Link";

interface CompanyInfoProp {
  company: {
    image: string;
    name: string;
    bio: string;
    link: string;
  };
}
function CompanyInfoCard({ company }: CompanyInfoProp) {
  return (
    <div className="company  xl:justify-start xl:flex-1 py-2">
      <Card className="justify-start items-start px-5 relative z-10 ">
        <div className="w-35 h-10 mt-4 relative mb-2">
          <Image
            className=" object-cover rounded-lg"
            src={company.image}
            alt={company.name}
            fill
          ></Image>
        </div>

        <p className="text-start xl:text-lg ">{company.bio}</p>
        <Link link={company.link} className="my-4" text="View Company"></Link>
      </Card>
    </div>
  );
}

export default CompanyInfoCard;
