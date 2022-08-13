import Image from "next/image";

const Hero = () => {
  return (
    <section className="text-gray-400 bg-black body-font">
      <div className="max-w-7xl  sm:px-6 lg:px-8 container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p className="mb-4 leading-relaxed">I'm MURALI</p>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Your friendly neighborhood <br/>
            <p className="text-indigo-400">Developer</p>
          </h1>

          <div className="flex justify-center">
            <p>Worked at</p>
          </div>
          <div>Jp morgan & Chase</div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 text-center">
          <Image
            height={200}
            width={200}
            src="https://dummyimage.com/720x600"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
