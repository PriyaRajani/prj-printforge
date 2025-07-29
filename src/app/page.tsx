import Image from "next/image";
import img from "/home_image.png";
import Link from "next/link";
export default function Home() {
  return (
    <main className=" flex flex-col flex-wrap  mt-5 flex-1  md:flex-row md:justify-center md:items-center ">
      <div className="flex flex-col gap-4 p-5">
        <p className="hidden uppercase text-sm text-gray-600 md:block">
          Your go-to platform for 3D printing files{" "}
        </p>
        <h1 className="text-4xl font-bold md:text-5xl max-w-[500px] md:leading-14">
          Discover what’s possible with 3D printing
        </h1>
        <p className="text-xl text-gray-700 text-left font-medium max-w-[450px]">
          Join our community of creators and explore a vast library of
          user-submitted models.
        </p>
        <div className="mt-2 md:mt-8">
          <Link href="/3d-models">
            {" "}
            <button className="px-6 py-3 text-black transition duration-100 bg-white border-2 border-black hover:bg-black hover:text-white">
              BROWSE MODELS
            </button>
          </Link>
        </div>
      </div>

      <Image
        src="/home_image.png"
        alt="image"
        width={600}
        height={600}
        className="p-1"
      />
    </main>
  );
}
