import Image from "next/image";
import { CiStar } from "react-icons/ci";
const Card = ({
  imageUrl,
  productName,
  brandName,
  discountRate,
  price,
  rating,
  tagsOnDesc,
  tagsOnImage,
  prefaceIconUrl,
  preface,
}) => {
  return (
    <div className="mb-10 rounded overflow-hidden relative">
      <div className="relative h-36">
        <Image
          src={imageUrl}
          alt={productName}
          layout="fill"
          objectFit="cover"
        />
        {tagsOnDesc && (
          <div className="absolute bg-[#009e8a] left-1 bottom-1 rounded-md w-24 text-white text-xs font-bold px-1 py-1 flex items-center">
            <Image
              src="/return-new.svg"
              alt="return Icon"
              width={10}
              height={10}
              className="mr-1"
            />
            <span>{tagsOnImage}</span>
          </div>
        )}
      </div>

      <div className="py-4">
        <div className="text-sm mb-2">
          {productName.length > 40
            ? `${productName.substring(0, 30)}...`
            : productName}
        </div>
        <div className="flex gap-1">
          <p className="text-red-500 text-base">{discountRate}% </p>
          <p className="text-base">{price} 원</p>
        </div>
        <p className="text-xs mt-1 text-red-500 ml-1 font-light">{tagsOnDesc}</p>
        <div className="flex mb-1 justify-between items-center">
          <div className="flex items-center">
            <CiStar color="black" />
            <span className="text-sm  ml-1">{rating}</span>
          </div>
        </div>
        {preface && (
          <div className="absolute bottom-0 right-0 p-1 bg-white shadow-lg rounded-md border-2 border-gray-100 flex items-center">
            <Image width={16} height={16} src={prefaceIconUrl} alt="" />
            <p className="text-xs ml-1 font-light">{preface}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
