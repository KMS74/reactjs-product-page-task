const ProductCategories = () => {
  const categories = [
    'Men',
    'Women',
    'Kids',
    'Best Sellers',
    'New Arrivals',
    'Offers',
  ];
  return (
    <div className="container-fluid bg-black text-white p-3">
      <div className="container d-flex justify-content-between align-items-center">
        {categories.map((category, index) => (
          <div className="" key={index}>
            <p
              className="m-0 p-0"
              style={{
                cursor: 'pointer',
              }}
            >
              {category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
