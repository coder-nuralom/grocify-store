import React from "react";
import { useParams } from "react-router-dom";
import initialProducts from "../Data/initialProducts";
import Cards from "../components/Cards";
import Banner from "../components/Banner";
import categoryData from "../Data/categoryData";

const AllSameCatProducts = () => {
  const { categoryName } = useParams(); // [fruits/dairy/seafood]
  const currentCategory = categoryData.find(
    (item) => item.slug === categoryName
  );
  const filteredProducts = initialProducts.filter((item) =>
    currentCategory.productCategories.includes(item.category)
  );
  return (
    <section className="pb-20 pt-10">
      <Banner />
      <div className="container mx-auto px-3 mt-10 md:mt-15">
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-9">
          {filteredProducts.map((item) => (
            <Cards key={item.id} singleProduct={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllSameCatProducts;
{
  /* <div className="flex flex-wrap gap-3 max-[576px]:gap-2 justify-center mt-10 mb-15">
          {availableCategories.map((category) => (
            <button
              onClick={() => setSelectedCategroy(category)}
              key={category}
              className={`px-5 max-[576px]:px-4 py-2 text-base max-[576px]:text-[15px] font-semibold rounded-md capitalize transition duration-200 cursor-pointer ${
                selectedCategroy == category
                  ? "bg-gradient-to-b from-orange-400 to-orange-500 text-white"
                  : "bg-zinc-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div> */
}

{
  /* <div className="mt-13 max-[576px]:mt-10 w-fit mx-auto">
          <Button content="View All" />
        </div> */
}
