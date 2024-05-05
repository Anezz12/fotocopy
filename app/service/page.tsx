"use client";

import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import Title from "@/components/ui/Title";
import Link from "next/link";
function Service() {
  return (
    <div>
      <div>
        <header className="page-header bg-slate-800">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <h1 className="text-xl font-bold mb-2">Service</h1>
            <nav aria-label="Breadcrumbs" className="text-sm">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link href="/" legacyBehavior>
                    <a className="text-gray-600 hover:text-gray-900">Home</a>
                  </Link>
                </li>
                <li>&gt;</li>
                <li className="text-gray-600">Service</li>
              </ol>
            </nav>
          </div>
        </header>
      </div>
      <div>
        <div className=" py-20">
          <Title
            text="Layanan Kami"
            className="flex flex-col items-center justify-center  cursor-pointer"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Penjilidan
              </h2>
              <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                Melayani penjilidan Softcover, Hardcover, Langsung/Biasa dan
                Mika. Dengan peralatan lengkap kami dan tim kami tidak perlu
                diragukan lagi dengan hasilnya. Kami siap melayani dengan cepat
                dan rapi
              </p>
            </div>
            <Image
              src="/banner.jpeg"
              width={1000}
              height={1000}
              alt="linear demo image"
              className="absolute -right-0 md:-right-[40%] lg:-right-[20%] -bottom-5 object-contain"
            />
          </WobbleCard>

          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Fotocopy & Print
              </h2>
              <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                Secara umum, pengertian fotocopy adalah metode membuat tiruan
                atau salinan dokumen pada kertas
              </p>
            </div>
            <Image
              src="/banner.jpeg"
              width={1000}
              height={1000}
              alt="linear demo image"
              className="absolute -right-0  md:-right-[40%] lg:-right-[20%] -bottom-3 object-contain "
            />
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[300px]">
            <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Cetak E-Book
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              Buku elektronik buku elektronik atau e-book adalah publikasi buku
              yang tersedia dengan wujud digital. Yang mana di dalamnya terdiri
              dari gambar, teks, atau bahkan keduanya. Serta bisa dibuka dan
              dibaca melalui layar smartphone, komputer, atau beberapa perangkat
              elektronik lainnya.
            </p>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[300px]">
            <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Selain fotokopi kami juga melayani
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              1. Fotocopy <br />
              2. Print A4,F4,A3 <br />
              3. Print Boklet <br />
              4. Print E-Book <br />
              5. Print Hvs Warna <br /> 6. Cetak Foto/Edit Foto
            </p>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[300px]">
            <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Cetak Notebook/Blocknote
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              Buku catatan merupakan buku dengan isi yang dipakai untuk
              mencatat. Bagi Anda yang sering menggelar atau menghadiri kegiatan
              seminar, workshop maupun acara lainnya, pasti sudah tidak asing
              lagi dengan souvenir buku catatan, yakni yang sering dijumpai
              adalah block note.
            </p>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Pres, Laminating, Scan
              </h2>
              <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                Kami melayani pres, laminating, dan scan. Dengan peralatan
                lengkap kami dan tim kami tidak perlu diragukan lagi dengan
                hasilnya. Kami siap melayani dengan cepat dan rapi
              </p>
            </div>
            <Image
              src="/banner.jpeg"
              width={1000}
              height={1000}
              alt="linear demo image"
              className="absolute -right-0  md:-right-[40%] lg:-right-[20%] -bottom-3 object-contain "
            />
          </WobbleCard>
        </div>
      </div>
    </div>
  );
}

export default Service;
