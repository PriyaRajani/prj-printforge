import { getAllModels, getModelById } from "@/app/lib/models";
import Link from "next/link";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
type Model = {
  id: number;
  name: string;
  description: string;
  likes: number;
  image: string;
  category: string;
  dateAdded: string;
};
type ModelDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};
export default async function ModelDetailPage({
  params,
}: ModelDetailPageProps) {
  const { id } = await params;
  const model = await getModelById(id);
  return (
    <div className="flex flex-col justify-center items-center">
      <Link href={"/3d-models"} className="text-xl text-gray-600 block ">
        Back To Overview
      </Link>
      <div className="overflow-hidden container  p-5 flex flex-col lg:flex lg:flex-row  lg:items-center lg:gap-6 lg:justify-center">
       
        <div className="relative aspect-square lg:h-150 ">
          <img
            src="/image.png"
            alt={model.name}
            className="absolute inset-0 object-cover w-full  h-full"
          />
        </div>
        <div>
        <div className="flex items-center mt-2 text-gray-600">
          <FaRegHeart
            className="w-5 h-5 mr-1 text-gray-400"
            aria-hidden="true"
          />
          <span>{model.likes}</span>
        </div>
        <div className="flex justify-between  ">
          <h2
            id={`model-${model.id}-title`}
            className="text-3xl font-bold text-gray-800 line-clamp-3"
          >
            {model.name}
          </h2>
        </div>
        <div className="py-2">
          <span
            className={`inline-block bg-transparent border border-gray-400 rounded-full px-3 py-1 text-sm text-gray-800 `}
          >
            {model.category}
          </span>
        </div>
        <div className="text-xl text-left py-2 line-clamp-2">
          {model.description}
        </div>
        <div className="bottom-0 text-sm text-gray-600">
          Added on {model.dateAdded.slice(0,9).replaceAll('-','/')}
        </div>
        </div>
      </div>
    </div>
  );
}
