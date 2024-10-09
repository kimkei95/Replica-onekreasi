import Button from "@/components/atoms/Buttons";
import Heading from "@/components/atoms/Headings";
import Text from "@/components/atoms/Text";
import Image from "next/image";

const Contents = () => {
  return (
    <section className="flex items-center justify-between bg-white py-16 px-6">
      {/* Bagian konten kiri */}
      <div className="max-w-lg">
        {/* Judul Tentang Perusahaan */}

        {/* Subjudul */}
        <h2 className="text-4xl font-bold mt-4 text-black">
          Siap Membuat Web Bersama Kami?
        </h2>

        {/* Deskripsi Perusahaan */}
        <Text className="mt-4 text-black">
          Percayakan website yang anda ingin miliki dengan kami. Merupakan suatu
          kehormatan bisa membantu anda memiliki website yang diidamkan.
        </Text>

        {/* Icon dan Teks Kualitas Unggulan dan Harga Bersahabat */}
        <div className="mt-6 flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Image
              src="/vecter.jpg"
              alt="Kualitas Unggulan"
              width={40}
              height={40}
            />
            <Text className="text-black">Kualitas Unggulan</Text>
          </div>

          <div className="flex items-center space-x-2">
            <Image
              src="/affordable-icon.png"
              alt="Harga Bersahabat"
              width={40}
              height={40}
            />
            <Text className="text-black">Harga Bersahabat</Text>
          </div>
        </div>

        {/* Tombol Hubungi Kami */}
        <Button href="https://wa.me/your-link">Hubungi Kami</Button>
      </div>

      {/* Bagian Gambar */}
      <div className="relative">
        <Image src="/b.jpg" alt="Speaker" width={500} height={500} />
      </div>
    </section>
  );
};

export default Contents;
