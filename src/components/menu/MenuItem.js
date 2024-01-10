export default function MenuItem() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
      <div className="text-center">
        <img
          src="/pizza.png"
          className="block mx-auto max-h-auto max-h-24 "
          alt="pizza"
        />
      </div>
      <h4 className="fond-semibold text-xl my-3">Cheese Pizza</h4>
      <p className="text-gray-500 text-sm">Lorem lorem lorem lorem</p>
      <button className="mt-4 bg-primary text-white rounded-full px-8 py-2">
        Add to cart $12
      </button>
    </div>
  );
}
