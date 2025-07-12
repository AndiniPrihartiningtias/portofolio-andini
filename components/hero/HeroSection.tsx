import Image from "next/image"

export function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-blue-50 py-16 px-4 relative overflow-hidden">
      {/* Elemen dekorasi */}
      <div className="absolute top-10 left-10 text-3xl animate-pulse">✨</div>
      <div className="absolute top-28 right-16 text-2xl animate-bounce">❤️</div>
      <div className="absolute bottom-16 left-1/4 text-4xl animate-pulse">⭐</div>
      <div className="absolute bottom-24 right-1/3 text-2xl animate-bounce">💫</div>
      <div className="absolute top-1/2 left-5 text-3xl animate-ping">🌟</div>

      <div className="container mx-auto text-center relative z-10">
        <div className="mb-10">
          {/* Foto Profil */}
          <div className="relative w-72 h-72 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-300 via-purple-300 to-blue-300 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-1.5 bg-gradient-to-br from-rose-200 to-blue-200 rounded-full flex items-center justify-center shadow-lg">
              <Image
                src="/profil.jpg"
                alt="Profil"
                width={600}
                height={600}
                className="rounded-full border-4 border-white shadow-md"
              />
            </div>
          </div>

          {/* Nama */}
          <h1 className="text-5xl md:text-6xl font-bold mb-3">
            ✨{" "}
            <span className="bg-gradient-to-r from-rose-400 via-purple-500 to-blue-500 bg-clip-text text-transparent drop-shadow-sm">
              Andini Prihartiningtias
            </span>{" "}
            ✨
          </h1>

          {/* Tagline dengan jarak ke bawah */}
          <p className="text-2xl md:text-3xl text-gray-700 mb-12 font-semibold">
            📚 Data Science Student | 💖 Passionate Learner
          </p>

          {/* Deskripsi */}
          <div className="max-w-8xl mx-auto bg-white/70 backdrop-blur-sm rounded-3xl px-16 py-10 shadow-lg border border-rose-100 text-xl md:text-1xl text-gray-700 leading-relaxed">
            🚀 Currently learning web client development with{" "}
            <span className="font-semibold text-blue-600">TypeScript</span>, 🐍{" "}
            <span className="font-semibold text-green-600">Python</span> for data wrangling, 📚{" "}
            <span className="font-semibold text-purple-600">SQL</span> for database systems, and ⚡{" "}
            <span className="font-semibold text-orange-600">C++</span> for data structures.
            <br />
            <span className="inline-block mt-4">
              ✨ Passionate about building both web applications and data analysis skills! 🚀
            </span>
            <br />
            <span className="inline-block mt-4">
              Always exploring new ideas and best practices to craft better digital experiences.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
