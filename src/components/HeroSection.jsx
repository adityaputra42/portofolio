
import me from "../assets/me.png";

export default function HeroSection() {
  return (
    <div id="home" className="pt-36">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-primary md:text-xl ">Hallo Semua👋, Saya
              <span className="block font-bold text-dark text-3xl mt-1 mb-1 lg:text-4xl">Aditya Putra Pratama</span>
            </h1>
            <h2 className="font-medium text-dark text-lg mb-5 lg:text-2xl">Full Stack App Developer</h2>
            <p className="font-medium text-secondary mb-10 leading-relaxed">Belajar membangun aplikasi mobile mudah dan menyenangkan bukan. <span className="font-bold text-dark">Bukan!</span></p>

            <a href="#" className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full
                     hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Hubungi Saya</a>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:mt-0 lg:right-0">
              <img src={me} alt="Aditya Putra Pratama" className="max-w-full mx-auto" />
              <span className="absolute bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
                <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#8b5cf6"
                    d="M43.1,-54.9C55.9,-49.9,66.5,-37.5,69.5,-23.7C72.5,-9.9,67.8,5.3,63.9,21.9C60.1,38.5,57.2,56.6,46.7,61.4C36.2,66.2,18.1,57.8,3,53.7C-12,49.5,-24.1,49.6,-31.8,43.9C-39.6,38.2,-43.2,26.7,-46.2,15.5C-49.2,4.2,-51.7,-6.7,-52.1,-20.4C-52.5,-34.2,-50.7,-50.8,-41.7,-57.1C-32.7,-63.4,-16.3,-59.3,-0.6,-58.4C15.1,-57.6,30.2,-60,43.1,-54.9Z"
                    transform="translate(100 100)  scale(1.1)" />
                </svg>

              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}