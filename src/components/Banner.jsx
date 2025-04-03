const Banner = () => {
    return (
      <div className="relative w-full h-screen">
        <img src="https://lh3.googleusercontent.com/p/AF1QipNdF_MUxpL_1T2f39-09cMLmkjz_BuGa13FFuFS=s870-k-no" alt="" className="absolute inset-0 w-full h-full object-cover"/>        
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-lg sm:text-xl max-w-2xl">Discover the best products and services tailored for you.</p>
          <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg">Get Started</button>
        </div>
      </div>
    );
  };
  
  export default Banner;
  