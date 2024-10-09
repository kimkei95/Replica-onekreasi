import Button from "@/components/atoms/Buttons";
import Image from "next/image";

const CallToAction = () => {
  return (
    <div
      className="relative bg-cover bg-center h-96 w-full flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/working.png')" }}
    >
      {/* Overlay untuk background agar lebih gelap */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Konten */}

      {/* Gambar kecil di kanan bawah */}
      <div className="absolute bottom-5 right-5">
        <Image
          src="/b.jpg"
          alt="Small Image"
          width={150}
          height={100}
          className="rounded-full"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-10"></div>
      <div className="relative z-10 max-w-2xl text-center">
        <h2 className="text-4xl font-bold mb-4">
          Dapatkan solusi terbaik untuk digital marketing anda hanya disini.
        </h2>
        <Button href="https://wa.me/your-link" className="mt-4">
          Hubungi Kami
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
