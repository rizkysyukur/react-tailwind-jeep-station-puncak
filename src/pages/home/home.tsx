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
          <span className="text-[#F5B754] font-bold">Jeep</span> Station Puncak
        </p>
        <p className="relative text-white text-sm mt-2 font-light italic">
          Rasakan sensasi petualangan seru dengan fun offroad di Jeep Station
          Puncak, Bogor! Nikmati adrenalin dan pemandangan alam yang menakjubkan
          bersama keluarga dan teman-teman.
        </p>
      </div>
      <div className="w-full p-5 -translate-y-20">
        <div className="bg-[#F5B754] font-light rounded-xl mb-5 relative h-48">
          <div
            className="text-[#1B1B1B] absolute bottom-0 right-0 translate-x-3 translate-y-24"
            style={{ fontSize: "14em", fontWeight: "bolder" }}
          >
            1
          </div>
          <h3 className="ps-5 pt-10 font-bold text-xl">Aman dan Nyaman</h3>
          <p className="pe-20 pt-2 ps-5">
            Nikmati adrenalin offroad yang aman dan nyaman dengan driver
            profesional.
          </p>
        </div>
        <div className="bg-[#F5B754] font-light rounded-xl mb-5 relative h-48">
          <div
            className="text-[#1B1B1B] absolute bottom-0 right-0 translate-x-3 translate-y-24"
            style={{ fontSize: "14em", fontWeight: "bolder" }}
          >
            2
          </div>
          <h3 className="ps-5 pt-10 font-bold text-xl">
            Pemandangan Luar Biasa
          </h3>
          <p className="pe-20 pt-2 ps-5">
            Lihat pemandangan spektakuler Puncak Bogor dengan semua perhatian
            pada keindahan alam.
          </p>
        </div>
        <div className="bg-[#F5B754] font-light rounded-xl mb-5 relative h-48">
          <div
            className="text-[#1B1B1B] absolute bottom-0 right-0 translate-x-3 translate-y-24"
            style={{ fontSize: "14em", fontWeight: "bolder" }}
          >
            3
          </div>
          <h3 className="ps-5 pt-10 font-bold text-xl">
            Petualangan Tanpa Batas
          </h3>
          <p className="pe-20 pt-2 ps-5">
            Temukan petualangan seru dengan berbagai rintangan dan medan yang
            menantang.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
