import "./home.css";
import HomeImage from "../../assets/img/home.jpeg";

function Home() {
  return (
    <>
      <div
        className="relative h-96 w-full bg-cover bg-center p-4"
        style={{ backgroundImage: `url(${HomeImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <p className="relative text-[#F5B754] text-sm mt-20 tracking-widest font-light">
          * Fun Offroad
        </p>
        <p className="relative text-white text-3xl">
          <span className="text-[#F5B754] text-4xl">Jeep</span> Station Puncak
        </p>
        <p className="relative text-white text-sm mt-2 font-light">
          Rasakan sensasi petualangan seru dengan fun offroad di Jeep Station
          Puncak, Bogor! Nikmati adrenalin dan pemandangan alam yang menakjubkan
          bersama keluarga dan teman-teman.
        </p>
      </div>
    </>
  );
}

export default Home;
