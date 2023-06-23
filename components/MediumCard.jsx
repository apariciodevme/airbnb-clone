import Image from "next/image";

const MediumCard = ({ img, title }) => {
  return (
    <div className="transition duration-200 ease-out transform cursor-pointer hover:scale-105">
      <div className="relative w-80 h-80">
        <Image src={img} fill className="rounded-lg" />
      </div>
      <h3 className="mt-3 text-2xl">{title}</h3>
    </div>
  );
};

export default MediumCard;
