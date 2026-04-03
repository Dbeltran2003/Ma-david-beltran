import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="flex items-center gap-12 max-w-4xl w-full flex-wrap justify-center">
        <Image
          src="/profile.jpg"
          alt="David Beltran"
          width={320}
          height={420}
          className="rounded-xl object-cover w-64 md:w-80 h-80 md:h-96 border border-gray-800"
        />
        <div>
          <p className="text-indigo-400 font-mono text-sm mb-3 tracking-widest uppercase">
            Hello, I&apos;m
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            David Beltran
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-indigo-400">
            Full Stack Developer
          </h2>
        </div>
      </div>
    </section>
  );
}
