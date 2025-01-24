import Image from "next/image";
import Link from "next/link";


const Index = () => {
  return (
    <main className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className=" text-center py-16">
        <h1 className="text-5xl font-bold text-gray-800 transition-opacity duration-1000 opacity-100">
          Deco Plus Tunisia
        </h1>
        <p className="mt-4 text-lg text-gray-600 transition-opacity duration-1000 opacity-100 delay-200">
          Élégance et praticité se rencontrent ✨
        </p>
        <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
          <Link href="/products ">Découvrir nos Collections</Link>
        </button>
      </section>

      {/* Popular Products Section */}
      <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header className="text-center">
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>

      <p className="mx-auto mt-4 max-w-md text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
        dictLink incidunt est ipsam, officiLink dolor fugit natus?
      </p>
    </header>

    <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <li>
        <Link href="#" className="group block overflow-hidden">
        <Image
            src="/image/Table1.jpg"
            width={100}
            height={100}
            alt="table"
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative bg-white pt-3">
            <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
              Basic Tee
            </h3>

            <p className="mt-2">
              <span className="sr-only"> Regular Price </span>

              <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
            </p>
          </div>
        </Link>
      </li>

      <li>
        <Link href="#" className="group block overflow-hidden">
        <Image
            src="/image/Table1.jpg"
            width={100}
            height={100}
            alt="table"
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative bg-white pt-3">
            <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
              Basic Tee
            </h3>

            <p className="mt-2">
              <span className="sr-only"> Regular Price </span>

              <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
            </p>
          </div>
        </Link>
      </li>

      <li>
        <Link href="#" className="group block overflow-hidden">
        <Image
            src="/image/Table1.jpg"
            width={100}
            height={100}
            alt="table"
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative bg-white pt-3">
            <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
              Basic Tee
            </h3>

            <p className="mt-2">
              <span className="sr-only"> Regular Price </span>

              <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
            </p>
          </div>
        </Link>
      </li>

      <li>
        <Link href="#" className="group block overflow-hidden">
          <Image
            src="/image/Table1.jpg"
            width={100}
            height={100}
            alt="table"
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative bg-white pt-3">
            <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
              Basic Tee
            </h3>

            <p className="mt-2">
              <span className="sr-only"> Regular Price </span>

              <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
            </p>
          </div>
        </Link>
      </li>
    </ul>
  </div>
</section>
    </main>
  );
};

export default Index;
