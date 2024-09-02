import React, { useState } from "react";
import "./BuySellDetails.css";

const BuySellDetails = () => {
  const product = {
    title: "Product Title",
    mainImage:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    price: 199.99,
    rating: 4,
    reviews: 120,
    description: "Detailed description of the product.",
    specifications: ["Feature 1", "Feature 2"],
  };

  const relatedProducts = [
    {
      title: "Related Product 1",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      price: 99.99,
    },
    {
      title: "Related Product 2",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      price: 149.99,
    },
  ];

  const categories = ["Category 1", "Category 2"];
  const priceRange = { min: 0, max: 1000 };
  const ratings = [1, 2, 3, 4, 5];
  const brands = ["Brand 1", "Brand 2"];

  const [filters, setFilters] = useState({
    categories: [],
    price: [0, priceRange.max],
    ratings: [],
    brands: [],
  });

  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);

  const handleFilterChange = (name, value, checked) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (name === "categories" || name === "ratings" || name === "brands") {
        if (checked) {
          updatedFilters[name] = [...updatedFilters[name], value];
        } else {
          updatedFilters[name] = updatedFilters[name].filter(
            (item) => item !== value
          );
        }
      } else if (name === "price") {
        updatedFilters.price = [0, value];
      }
      return updatedFilters;
    });
  };

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.title} to cart`);
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="buy-sell-details">
      <aside className="filters">
        <h2>Filters</h2>
        <div className="filter-category">
          <h3>Categories</h3>
          {categories.map((category, index) => (
            <label key={index}>
              <input
                type="checkbox"
                name="categories"
                value={category}
                checked={filters.categories.includes(category)}
                onChange={(e) =>
                  handleFilterChange("categories", category, e.target.checked)
                }
              />
              {category}
            </label>
          ))}
        </div>
        <div className="filter-price">
          <h3>Price Range</h3>
          <input
            type="range"
            min={priceRange.min}
            max={priceRange.max}
            value={filters.price[1]}
            onChange={(e) => handleFilterChange("price", e.target.value, true)}
          />
          <span>${filters.price[1]}</span>
        </div>
        <div className="filter-rating">
          <h3>Rating</h3>
          {ratings.map((rating, index) => (
            <label key={index}>
              <input
                type="checkbox"
                name="ratings"
                value={rating}
                checked={filters.ratings.includes(rating)}
                onChange={(e) =>
                  handleFilterChange("ratings", rating, e.target.checked)
                }
              />
              {rating} Stars
            </label>
          ))}
        </div>
        <div className="filter-brand">
          <h3>Brand</h3>
          {brands.map((brand, index) => (
            <label key={index}>
              <input
                type="checkbox"
                name="brands"
                value={brand}
                checked={filters.brands.includes(brand)}
                onChange={(e) =>
                  handleFilterChange("brands", brand, e.target.checked)
                }
              />
              {brand}
            </label>
          ))}
        </div>
      </aside>

      <main className="product-page">
        <section className="product-images">
          <img src={product.mainImage} alt={product.title} />
        </section>
        <section className="product-details">
          <h1>{product.title}</h1>
          <p className="price">${product.price}</p>
          <p className="rating">
            {"★".repeat(product.rating)} ({product.reviews} reviews)
          </p>
          <p className="description">{product.description}</p>
          <div className="specifications">
            <h3>Specifications:</h3>
            <ul>
              {product.specifications.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
          <div className="actions">
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
            />
            <button className="add-to-cart" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button
              className={`like ${liked ? "liked" : ""}`}
              onClick={handleLike}
            >
              {liked ? "Unlike" : "Like"}
            </button>
          </div>
        </section>
      </main>

      <section className="related-products">
        <h2>Related Products</h2>
        <div className="products-grid">
          {relatedProducts.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p className="price">${product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BuySellDetails;
