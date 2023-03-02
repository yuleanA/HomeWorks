import React, { useState } from "react";
import { GifGrid } from "./components/GifGrid";
import { AddCategory } from "./components/AddCategory";

export const GifExpert = () => {
  const [categories, setCategories] = useState(["Zodiac"]);

  const onAddcategory = (category) => {
    setCategories((list) => [...list, category]);
  };
  return (
    <>
      <h1>GifExpert</h1>
      <AddCategory Addcategory={onAddcategory} />

      {categories.map((category, key) => {
        return <GifGrid category={category} key={key} />;
      })}
    </>
  );
};
