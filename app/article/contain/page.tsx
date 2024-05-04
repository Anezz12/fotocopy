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
                <h2 className="text-2xl font-bold mb-4">
                  4 Metode Duplikasi Yang Digunakan Pada Mesin Fotocopy
                </h2>
                <span className="list-decimal list-inside mb-6">
                  <h3 className="font-bold">1. Fotokopi Elektronstatis</h3>
                  <p className="text-gray-700">
                    Metode ini memanfaatkan partikel tinta kering yang termuati
                    listrik dan ditransfer ke kertas untuk membuat salinan
                    dokumen. Populer karena murah dan berkualitas tinggi.
                  </p>

                  <h3 className="font-bold">2. Fotokopi Proyeksi</h3>
                  <p className="text-gray-700">
                    Metode ini memproyeksikan gambar dari dokumen asli ke
                    permukaan fotokonduktor sensitif, lalu mentransfer gambar ke
                    kertas menggunakan toner atau tinta cair.
                  </p>

                  <h3 className="font-bold">3. Fotolusi</h3>
                  <p className="text-gray-700">
                    Metode ini menggunakan cahaya untuk mencetak gambar atau
                    tulisan dari master ke kertas. Dokumen asli akan diekspos ke
                    sebuah master menggunakan cahaya untuk membentuk gambar
                    terbalik.
                  </p>

                  <h3 className="font-bold">4. Fotokopi Kontrol</h3>
                  <p className="text-gray-700">
                    Metode ini menggunakan sinar laser untuk mencetak gambar
                    atau tulisan dari dokumen ke kertas. Gambar dibentuk dengan
                    mengontrol sinar laser untuk membuat gambar pada permukaan
                    fotokonduktor, lalu ditransfer ke kertas menggunakan toner
                    atau tinta.
                  </p>
                </span>
                <div className="bg-yellow-100 rounded-lg p-4">
                  <p className="text-gray-700">
                    Silahkan hubungi kami untuk informasi lebih lanjut atau jika
                    Anda memiliki pertanyaan lain.
                  </p>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mt-4">
                    Hubungi Kami
                  </button>
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
