import Product from "./Product";

const ProductStore = ({ products }) => {
  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-80 mx-auto'>
      {products
        ?.slice(0, 4)
        .map(({ id, title, price, description, category, image }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}

      <div className='md:col-span-2'>
        {products
          ?.slice(4, 5)
          .map(({ id, title, price, description, category, image }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
      </div>
      <img
        className='md:col-span-full mx-auto'
        src='https://www.uckg.org/wp-content/uploads/2017/06/standing-in-the-gap-banner-.jpg'
        alt=''
      />

      {products
        ?.slice(5, 7)
        .map(({ id, title, price, description, category, image }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}

      {products
        ?.slice(7, products.length)
        .map(({ id, title, price, description, category, image }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}
    </div>
  );
};

export default ProductStore;
