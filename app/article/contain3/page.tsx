import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div>
      <div>
        <div className=" py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=" rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h1 className="text-3xl font-bold mb-4">
                  Pengertian Mesin Fotocopy dan 3 Keunggulan Pemakaiannya
                </h1>
                <p className="text-gray-700 mb-6">
                  Secara umum, pengertian fotocopy adalah metode membuat tinjau
                  atau salinan dokumen pada kertas. Salinan tersebut dibuat
                  dengan memanfaatkan sinar, panas, atau tekanan untuk
                  mengalirkan tinta dari sebuah master ke kertas baru. Proses
                  ini memungkinkan Anda untuk membuat duplikasi dokumen secara
                  cepat dan hemat biaya.
                </p>
                <h2 className="text-2xl font-bold mb-2">Artikel Terkait:</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className=" rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">
                      4 Metode Duplikasi yang Digunakan Pada Mesin Fotocopy
                    </h3>
                    <p className="text-gray-700">
                      1. Fotokopi Elektronstatis 2. Fotokopi Proyeksi 3.
                      Fotolusi 4. Fotokopi Kontrol
                    </p>
                  </div>
                  <div className=" rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">
                      Inilah Kekurangan Mesin Fotocopy Jenis Stensil
                    </h3>
                    <p className="text-gray-700">
                      Mesin fotocopy jenis stensil memiliki beberapa kekurangan
                      seperti kualitas cetakan yang kurang baik, biaya
                      operasional yang tinggi, dan proses penyalinan yang
                      lambat.
                    </p>
                  </div>
                </div>
                <div className="tracking-wide">
                  <h2 className="text-2xl font-bold mb-4">
                    4 Metode Duplikasi Yang Digunakan Pada Mesin Fotocopy
                  </h2>
                  <span className="list-decimal list-inside mb-6">
                    <h3 className="font-bold">1. Fotokopi Elektronstatis</h3>
                    <p className="text-gray-700">
                      Metode ini memanfaatkan partikel tinta kering yang
                      termuati listrik dan ditransfer ke kertas untuk membuat
                      salinan dokumen. Populer karena murah dan berkualitas
                      tinggi.
                    </p>

                    <h3 className="font-bold">2. Fotokopi Proyeksi</h3>
                    <p className="text-gray-700">
                      Metode ini memproyeksikan gambar dari dokumen asli ke
                      permukaan fotokonduktor sensitif, lalu mentransfer gambar
                      ke kertas menggunakan toner atau tinta cair.
                    </p>

                    <h3 className="font-bold">3. Fotolusi</h3>
                    <p className="text-gray-700">
                      Metode ini menggunakan cahaya untuk mencetak gambar atau
                      tulisan dari master ke kertas. Dokumen asli akan diekspos
                      ke sebuah master menggunakan cahaya untuk membentuk gambar
                      terbalik.
                    </p>

                    <h3 className="font-bold">4. Fotokopi Kontrol</h3>
                    <p className="text-gray-700">
                      Metode ini menggunakan sinar laser untuk mencetak gambar
                      atau tulisan dari dokumen ke kertas. Gambar dibentuk
                      dengan mengontrol sinar laser untuk membuat gambar pada
                      permukaan fotokonduktor, lalu ditransfer ke kertas
                      menggunakan toner atau tinta.
                    </p>
                  </span>
                  <div className=" rounded-lg p-4 flex flex-col items-center">
                    <p className="text-gray-700">
                      Silahkan hubungi kami untuk informasi lebih lanjut atau
                      jika Anda memiliki pertanyaan lain.
                    </p>
                    <br />
                    <a
                      href="https://api.whatsapp.com/send?phone=6281230498560"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 bg-yellow-400 text-white hover:bg-yellow-500 transition-colors duration-300"
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                        <svg
                          role="img"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>WhatsApp</title>
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                      </svg>
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
