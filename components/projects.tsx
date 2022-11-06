const RecentBlogs = () => {
  return (
    <section 
    // data-aos="fade-up" 
    className="text-gray-400 bg-black body-font">
      <h1 className="text-2xl text-indigo-400 text-center title-font mb-4">
        Recent Blogs
      </h1>
      <div className="container max-w-7xl px-5 py-10 mx-auto">
        <div className="flex flex-wrap -m-4">
          {[1, 2, 3].map(() => blogCard())}
        </div>
      </div>
    </section>
  );
};

export default RecentBlogs;

function blogCard() {
  return (
    <div 
    // data-aos="fade-up" 
    className="p-3 lg:w-1/3">
      <div className="h-full bg-gray-800 bg-opacity-40 px-8 pt-10 pb-5 rounded-lg overflow-hidden text-center relative">
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
          CATEGORY
        </h2>
        <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
          Raclette Blueberry Nextious Level
        </h1>
        <p className="leading-relaxed mb-3">
          Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
          microdosing tousled waistcoat.
        </p>
        <a className="text-indigo-400 inline-flex items-center">
          Learn More
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
