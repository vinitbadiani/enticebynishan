export default function Home() {
  return (
    <div className="px-4 sm:px-8 py-10 max-w-4xl mx-auto">
      <section className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Entice by Nishan</h1>
        <p className="text-gray-500 text-lg sm:text-xl max-w-xl mx-auto">
          Locally-sourced home-cooked meals delivered to your door
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base font-mono text-gray-800">
          <li>Choose your meals from our weekly rotating menu</li>
          <li>We cook everything fresh with local ingredients</li>
          <li>Meals are delivered to your door on your chosen day</li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Delivery Info</h2>
        <p className="text-gray-700 text-sm sm:text-base">
          We currently deliver across <span className="font-bold">Metro Detroit</span> every{" "}
          <span className="font-semibold">Tuesday, Wednesday</span>, and{" "}
          <span className="font-semibold">Thursday</span>.
        </p>
      </section>

      <div className="text-center">
        <button className="bg-black text-white px-6 py-3 rounded-full font-semibold text-sm sm:text-base hover:scale-105 hover:bg-gray-800 transition-all duration-200">
          View Menu (Coming Soon)
        </button>
      </div>
    </div>
  );
}
