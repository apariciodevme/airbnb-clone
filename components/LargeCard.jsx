import Image from "next/image";

const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image src={img} fill className="object-cover rounded-2xl" />
      </div>

      <div className="absolute top-32 left-12">
        <h3 className="w-64 mb-3 text-4xl font-semibold ">{title}</h3>
        <p className="font-semibold text-md">{description}</p>

        <button className="px-4 py-2 mt-5 text-sm text-white bg-gray-900 rounded-2xl ">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
