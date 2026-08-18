const Cart = ({ cartItems = [] }) => {
  return (
    <div className="min-h-screen bg-[#0b0f0d] px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[4px] text-orange-500">
            Your Selection
          </p>
          <h1 className="mt-2 text-4xl font-bold">Shopping Cart</h1>
          <p className="mt-2 text-gray-500">
            {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your cart
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex min-h-[400px] items-center justify-center rounded-3xl border border-[#29302c] bg-[#121714]/80">
            <div className="text-center">
              <h2 className="text-2xl font-bold">Your cart is empty</h2>
              <p className="mt-2 text-gray-500">Add some products to get started.</p>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-5 rounded-2xl border border-[#29302c] bg-[#121714]/80 p-5"
              >
                <div className="h-32 w-32 shrink-0 overflow-hidden rounded-xl bg-[#1a201d]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain p-3"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <p className="mb-1 text-xs uppercase tracking-widest text-orange-500">
                      {item.category}
                    </p>
                    <h2 className="text-lg font-semibold leading-6 text-white">
                      {item.title}
                    </h2>
                  </div>
                  <p className="mt-4 text-xl font-bold">${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
