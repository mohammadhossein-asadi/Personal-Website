import { Nextjs2, Nextjs, Nodejs, Profile, Redux, Reactjs } from "../assets";
import Resume from "../assets/MohammadhosseinAsadi.pdf";

const Header = ({ darkMode }) => {
  return (
    <div className="w-full flex flex-col lg:flex-row px-4 md:px-10 gap-10 2xl:gap-20 py-20">
      <div
        className="flex flex-col mb-20 lg:mb-0"
        data-aos="fade-down"
        data-aos-offset="100"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <span className="text-lg font-bold text-orange-600">
          FRONT-END DEVELOPER
        </span>
        <div className="flex gap-4 items-center my-4">
          <h1 className="text-gray-800 dark:text-neutral-100 text-4xl md:text-5xl 2xl:text-7xl font-bold text-center">
            I'm a
          </h1>
          <div className="flex items-center justify-center text-white shadow-lg bg-blue-800 dark:bg-[#224cff10] dark:text-[#224cff] rounded-full">
            <p className="text-3xl 2xl:text-5xl font-bold px-5 py-2 pb-2 text-center">
              Developer
            </p>
          </div>
        </div>

        <h1 className="text-5xl 2xl:text-7xl font-extrabold text-black dark:text-neutral-100 tracking-wider xss:text-[2rem] ">
          Mohammadhossein
        </h1>

        <p className="text-md text-black dark:text-gray-100 mt-5 2xl:mt-10">
          Experienced Front-end developer specialized in ReactJS and NextJS,
          with two years of professional experience. Strong team player familiar
          with agile methodology, passionate about continuous learning.
        </p>

        <div className="mt-10 flex gap-10">
          <a href={Resume} download>
            <button className="bg-orange-700 text-lg text-white font-semibold rounded-md py-3 px-5">
              Resume
            </button>
          </a>
          <a href="#projects">
            <button className="text-lg text-white font-semibold rounded-md py-3 px-5 bg-black dark:bg-[#224cff10]">
              Projects
            </button>
          </a>
        </div>
      </div>

      <div className="w-full flex-1 flex justify-center">
        <div className="w-[300px] h-[290px] md:w-[400px] md:h-[400px] 2xl:w-[500px] 2xl:h-[500px]  border rounded-full border-gray-600 dark:border-gray-200 relative  md:mt-20 lg:mt-0 flex items-center justify-center">
          <img
            src={Profile}
            loading="lazy"
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            className="w-auto h-full absolute top-[0.25rem] md:top-0"
          />
          <div
            className="relative w-full h-full rounded-full"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
          >
            <img
              src={Reactjs}
              loading="lazy"
              className="absolute top-7 md:top-[4rem] left-[-0.25rem] md:-left-3 2xl:left-2 w-12 h-12 md:w-16 md:h-16"
            />
            <img
              src={Redux}
              loading="lazy"
              className="absolute bottom-7 left-[-0.25rem] md:bottom-10 2xl:left-4 w-12 h-12 md:w-16 md:h-16"
            />
            <img
              src={darkMode ? Nextjs : Nextjs2}
              loading="lazy"
              className="absolute top-7 md:top-14 right-[-0.25rem] md:-right-3 2xl:right-2 w-12 h-12 md:w-16 md:h-16"
            />
            <img
              src={Nodejs}
              loading="lazy"
              className="absolute bottom-7 right-[-0.25rem] md:bottom-10 2xl:right-4 w-12 h-12 md:w-16 md:h-16"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
