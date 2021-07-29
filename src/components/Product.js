import Image from "next/image";
import { StarIcon } from "@heroicons/react/outline";
import accounting from "accounting";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

const Product = ({ id, title, price, description, category, image }) => {
  const dispatch = useDispatch();
  const addItemToBasket = (e) => {
    e.preventDefault();
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
    };
    dispatch(addToBasket(product));
  };
  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
      <p className='absolute top-2 right-2 text-xs italic text-gray-400'>
        {category}
      </p>
      <h4 className='my-3'>{title}</h4>
      <div className='flex'>
        <StarIcon className='h-5 text-yellow-500' />
        <StarIcon className='h-5 text-yellow-500' />
        <StarIcon className='h-5 text-yellow-500' />
      </div>
      <Image src={image} height={200} width={200} objectFit='contain' />
      <p className='text-xs my-2 line-clamp-2 mb-5'>{description}</p>
      <div className='flex items-center justify-between absolute bottom-0  '>
        <p className='text-cutt_colors-light text-xl font-bold mr-5'>
          {accounting.formatMoney(price, "€  ")}
        </p>
        <button onClick={addItemToBasket} className='mt-auto button'>
          Add to Basket
        </button>
      </div>
    </div>
  );
};

export default Product;
