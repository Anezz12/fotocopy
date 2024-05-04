import React from "react";
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <div className=" flex flex-col items-center max-w-7xl mx-auto p-5 py-56">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src=""
            width="300"
            height="300"
            alt="some value"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 text-black">
              Pengertian Mesin Fotocopy dan 3 Keunggulan Pemakaiannya
            </h3>
            <p className="text-gray-600 mb-4">
              Secara umum, pengertian fotocopy adalah metode membuat tinjau atau
              salinan dokumen pada kertas...
            </p>
            <Link
              href="/article/contain"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              READ MORE
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src=""
            width="300"
            height="300"
            alt="some value"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-black mb-2">
              Jenis Penjilidan Buku Yang Perlu Anda Ketahui
            </h3>
            <p className="text-gray-600 mb-4">
              Bagi Anda yang pernah mencetak buku, mungkin pernah merasakan
              kebingungan saat memilih jenis...
            </p>
            <Link
              href="/article/contain2"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              READ MORE
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src=""
            width="300"
            height="300"
            alt="some value"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 text-black">
              Manfaat Notebook Catatan sebagai Cerminan Pribadi Unggul
            </h3>
            <p className="text-gray-600 mb-4">
              Mengapa notebook catatan seringkali dikaitkan dengan karakter
              produktif dan unggul? Apa saja...
            </p>
            <Link
              href="/article/contain3"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              READ MORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
