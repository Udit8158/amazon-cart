export default function OrderSummary() {
  return (
    <div className="bg-gray-200 py-10 px-5 rounded-2xl flex flex-col justify-between h-fit gap-6">
      <p className="text-2xl font-bold">Order Summary</p>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p>Items (2):</p>
          <p>2478</p>
        </div>
        <hr className="text-gray-800 block " />
        <div className="flex justify-between">
          <p className="font-bold text-lg">Order Total:</p>
          <p className="font-bold text-lg">2478</p>
        </div>
      </div>
      <button className="bg-yellow-400  py-2">Proceed to Buy</button>
    </div>
  );
}
