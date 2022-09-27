import Image from "next/image";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="text-gray-400 bg-black body-font">
      <div data-aos="zoom-in" className="max-w-7xl  sm:px-6 lg:px-8 container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p className="mb-4 leading-relaxed">{`I'm Murali`}</p>
          <h1 className="title-font sm:text-4xl text-3xl font-medium text-white">
            Your friendly neighborhood <br />
          </h1>
          <h1 className="title-font text-indigo-400 text-3xl font-medium mb-4">
              <Typewriter
                options={{loop:true}}
                onInit={(typewriter: any) => {
                  typewriter
                    .typeString("Programmer")
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString("Developer")
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString("Engineer")
                    .start();
                }}
              />
            </h1>

          <div className="flex justify-center">
            <p>Worked at</p>
          </div>
          <div>{`Jp morgan & Chase`}</div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 text-center">
          <Image
            height={200}
            width={200}
            alt=""
            src="/programmer.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
