import Image from "next/image";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <section className="bg-neutral-800 p-10 hidden w-1/2 items-center justify-center lg:flex xl:w-2/5">
        <div className="flex flex-col max-h-[800px] max-w-[430px] justify-center space-y-6">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="logo"
            height={224}
            width={82}
            className="h-auto"
          />

          <div className="space-y-5 text-white">
            <h1 className="h1">Manage your files the best way</h1>
            <p className="body-1">A place to store all your documents</p>
          </div>

          <Image
            src="/assets/images/files.png"
            alt="Illustration"
            width={342}
            height={342}
            className="transition-all hover:rotate-2 hover:scale-105"
          />
        </div>
      </section>

      <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
        <div className="mb-16 lg:hidden">
          <Image
            src={"assets/icons/logo-full-brand.svg"}
            alt="logo"
            height={82}
            width={224}
            className="h-auto w-[200px] lg:w-[250px]"
          />
        </div>
        {children}
      </section>
    </div>
  );
};

export default Layout;
