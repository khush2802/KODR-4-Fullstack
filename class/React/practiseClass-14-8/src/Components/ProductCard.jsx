const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="group w-full overflow-hidden rounded-2xl border border-[#303632] bg-[#101412] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#f97316]/50">

      {/* Product Image */}
      <div className="relative h-64 overflow-hidden bg-[#191e1b]">

        <img
          src={product.image}
          alt={product.title}
          className="
            h-full
            w-full
            object-contain
            p-6
            transition
            duration-500
            group-hover:scale-105
          "
        />

        {/* Category Badge */}
        <span className="absolute left-4 top-4 rounded-full bg-[#f97316] px-3 py-1 text-xs font-semibold capitalize text-[#101412]">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Product ID */}
        <p className="mb-2 text-xs uppercase tracking-widest text-[#f97316]">
          Product #{product.id}
        </p>

        {/* Title */}
        <h2 className="min-h-[48px] line-clamp-2 text-lg font-semibold leading-6 text-white">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-400">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-2">

          <div className="text-[#f97316]">
            ★★★★★
          </div>

          <span className="text-sm text-gray-400">
            {product.rating.rate}
          </span>

          <span className="text-xs text-gray-600">
            ({product.rating.count})
          </span>

        </div>

        {/* Price + Cart */}
        <div className="mt-5 flex items-center justify-between">

          {/* Price */}
          <div>
            <p className="text-xs text-gray-500">
              Price
            </p>

            <p className="text-2xl font-bold text-white">
              ${product.price.toFixed(2)}
            </p>
          </div>

          {/* Add Cart */}
          <button
            onClick={() => addToCart(product)}
            className="
              rounded-xl
              bg-[#f97316]
              px-5
              py-3
              text-sm
              font-bold
              text-[#101412]
              transition
              duration-200
              hover:bg-orange-500
              active:scale-95
            "
          >
            Add to Cart
          </button>

        </div>

      </div>
    </div>
  );
};

export default ProductCard;
