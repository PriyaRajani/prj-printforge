"use client";
import categoryData from "../data/categories.json";
import React, { useState } from "react";
import { getAllModels } from "../lib/models";
import ModelCard from "@/components/ModelCard";

type Model = {
  id: number;
  name: string;
  description: string;
  likes: number;
  image: string;
  category: string;
  dateAdded: string;
};

function ModelsPage() {
  const [category, setCategory] = useState("all");
  
  const models = getAllModels(category);
  return (
    <div className="container px-4 py-8 mx-auto lg:flex">
      <div className="container flex gap-5 overflow-x-scroll lg:flex-col lg:overflow-hidden lg:w-[200px]">
        <div
          onClick={() => {
            setCategory("all");
          }}
          className={`cursor-pointer ${(category === 'all')?'text-orange-500 border-b-orange-500 border-b-1 lg:border-l-1 lg:border-b-0 p-1':''}`}
        >
          ALL
        </div>
        {categoryData.map((categoryObj) => (
          <div
            key={categoryObj.slug}
            onClick={() => {
              setCategory(categoryObj.slug);
            }}
            className={`cursor-pointer text-nowrap ${(category === categoryObj.slug)?'text-orange-500 border--orange-500 border-b-1 lg:border-l-1 lg:border-b-0':''}`}
          >
            {categoryObj.displayName}
          </div>
        ))}
      </div>
      <div>
      <h1 className="font-bold text-3xl hidden lg:block">3D Models</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-2">
        {models.map((model: Model) => (
          <ModelCard key={model.id} model={model} />
        ))}
      </div>
      </div>
    </div>
  );
}

export default ModelsPage;
