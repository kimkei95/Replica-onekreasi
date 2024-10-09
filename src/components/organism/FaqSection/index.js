import Heading from "@/components/atoms/Headings";
import FAQItem from "@/components/molecules/FaqItems";

export default function FAQSection() {
  const faqs = [
    {
      id: "faq1",
      question: "Berapa lama pembuatan website di one kreasi",
      answer:
        "Waktu pengerjaan bervarian, untuk landing page sendiri 2-3 hari kerja, web company profile 3-5 hari kerja, web e-commerce 7-14 hari kerja. Itu semua bisa lebih cepat dari perkiraan jika anda memberikan bahan untuk website dengan lengkap.",
    },
    {
      id: "faq2",
      question:
        "Berapa harga website di semua jenis website yang ada di one kreasi?",
      answer:
        "Untuk harga website juga bervarian, kami memiliki beragam paket yang mungkin bisa menjadi solusi untuk mengembangkan bisnis anda.",
    },
    {
      id: "faq3",
      question: "Bagaimana sistem Pembayaran one kreasi?",
      answer:
        "Kami akan memberikan invoice pembayaran setelah anda sudah mengisi form customers yang sudah kami sediakan. Pembayaran dilakukan secara 2 tahap. Tahap pertama sebesar 50% untuk pengerjaan awal dan sisanya akan dibayarkan jika website selesai dan di publish. ",
    },
    {
      id: "faq4",
      question: "dimana lokasi one kreasi",
      answer:
        "One Kreasi Web Studio memiliki kantor di Jakarta, Tanjung Barat, Jakarta Selatan ",
    },
    {
      id: "faq5",
      question: "Apakah one kreasi studio merupakan perusahaan?",
      answer:
        "Yup, One Kreasi Web Studio merupakan perusahaan berbadan hukum dengan nama PT Kreasi Berdikari Infomedia. ",
    },
    {
      id: "faq6",
      question:
        "Apakah boleh mengundang team one kreasi web studio untuk meeting?",
      answer:
        "Boleh sekali, kami dengan senang hati memenuhi undangan anda. Meeting bisa dilakukan secara online maupun offline sesuai permintaan anda.",
    },
    {
      id: "faq7",
      question:
        "Apa Bedanya One Kreasi Web Studio dengan jasa website lainnya?",
      answer:
        "Kami menawarkan jasa website berkualitas yang bisa menjadi penunjang bisnis serta brand anda. Jangan khawatir setiap request anda akan selalu kami bantu untuk mewujudkan website impian anda.",
    },
    {
      id: "faq8",
      question:
        "Jika Ada masalah pada website saya, apakah bisa menghubungi one kreasi web studio?",
      answer:
        "Jangan ragu untuk menghubungi kami. Kami siap membantu menyelesaikan semua masalah yang ada pada website anda. Support kami 24 jam jadi anda bisa menghubungi kami kapanpun.",
    },
    {
      id: "faq9",
      question: "Jika saya tertarik mau membuat website, harus bagaimana?",
      answer:
        "Yuk segera hubungi team support kami. Ada logo whatsapp di bawah sebelah kanan website atau anda bisa mengunjungi akun sosial media kami.",
    },
  ];

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg text-black">
        <Heading>Frequently Asked Questions</Heading>
        {faqs.map((faq) => (
          <FAQItem
            key={faq.id}
            id={faq.id}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </section>
  );
}
