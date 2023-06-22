import Image from "next/image"




const Banner = () => {
  return (
    <div className="relative  h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
        <Image
        src={'https://links.papareact.com/0fm'}
        fill
        className="object-fill"
        />
        <div className="absolute w-full text-center top-1/2">
            <p className="text-sm font-semibold sm:text-lg">Not sure where to go? Perfect</p>
            <button className="px-8 py-4 my-5 font-bold transition duration-150 bg-white rounded-full shadow-md text-rose-500 hover:shadow-xl active:scale-90 ">Im Flexible</button>
        </div>
    </div>
  )
}

export default Banner