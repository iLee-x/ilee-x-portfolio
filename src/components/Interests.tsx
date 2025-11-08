import React from 'react';
import { Film, BookOpen, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Interests = () => {
  const { language } = useLanguage();

  const movies = [
    {
      title: 'The Dark Knight',
      year: '2012',
      director: 'Christopher Nolan',
      genre: language === 'en' ? 'Action, Crime, Drama' : language === 'fr' ? 'Action, Crime, Drame' : '动作，犯罪，剧情',
      image: 'https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg',
      rating: 9.1,
    },
    {
      title: 'Spider-Man: Across the Spider-Verse',
      year: '2023',
      director: 'Joaquim Dos Santos',
      genre: language === 'en' ? 'Animation, Action, Adventure' : language === 'fr' ? 'Animation, Action, Aventure' : '动画，动作，冒险',
      image: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Spider-Man-_Across_the_Spider-Verse_poster.jpg',
      rating: 8.5,
    },
    {
      title: 'Interstellar',
      year: '2014',
      director: 'Christopher Nolan',
      genre: language === 'en' ? 'Sci-Fi, Drama, Adventure' : language === 'fr' ? 'Science-Fiction, Drame' : '科幻，剧情，冒险',
      image: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg',
      rating: 8.7,
    },
  ];

  const books = [
    {
      title: 'The Simple Path to Wealth',
      author: 'JL Collins',
      year: '2016',
      genre: language === 'en' ? 'Finance, Self-Help' : language === 'fr' ? 'Finance, Développement Personnel' : '金融，自助',
      image: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1466299641i/30646587.jpg',
      pages: 286,
    },
    {
      title: 'Romance of the Three Kingdoms',
      author: 'Luo Guanzhong',
      year: '14th Century',
      genre: language === 'en' ? 'Historical Fiction, Classic' : language === 'fr' ? 'Fiction Historique, Classique' : '历史小说，经典',
      image: 'https://images.thalia.media/00/-/77bdd13b0f6f4eb7b65eee30da8ef80a/-mp3-.jpeg',
      pages: 2300,
    },
  ];

  return (
    <section id="interests" className="bg-background text-text py-24 relative overflow-hidden">
      {/* Circuit pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(0, 255, 255, 0.1) 0px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(0, 255, 255, 0.1) 0px, transparent 1px, transparent 40px)',
        }}></div>
      </div>

      <div className="container mx-auto px-8 md:px-16 relative z-10">
        {/* Section header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-12 bg-gradient-to-b from-accent to-transparent"></div>
            <div>
              <div className="text-accent/60 text-xs mono-text tracking-widest uppercase mb-1">
                <span className="text-primary">&gt;</span> {language === 'en' ? 'SECTION_06' : language === 'fr' ? 'SECTION_06' : '部分_06'}
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-neon-glow cyber-title">
                [{language === 'en' ? 'INTERESTS' : language === 'fr' ? 'INTÉRÊTS' : '兴趣'}]
              </h2>
            </div>
          </div>
          <p className="mt-6 text-lg text-text/60 mono-text max-w-2xl">
            <span className="text-secondary">&gt;</span> {language === 'en'
              ? 'MEDIA_CONSUMPTION_LOG'
              : language === 'fr'
              ? 'JOURNAL_CONSOMMATION_MÉDIAS'
              : '媒体消费日志'}
          </p>
        </div>

        {/* Movies Section */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <Film className="text-primary w-6 h-6" />
            <h3 className="text-3xl font-bold text-primary cyber-title mono-text">
              // {language === 'en' ? 'FAVORITE_FILMS' : language === 'fr' ? 'FILMS_FAVORIS' : '最爱电影'}
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
            <div className="cyber-card px-4 py-1">
              <span className="text-primary/60 text-xs mono-text">[{movies.length}]</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {movies.map((movie, idx) => (
              <div
                key={movie.title}
                className="cyber-card p-0 overflow-hidden relative group/movie transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-primary z-10 opacity-0 group-hover/movie:opacity-100 transition-opacity"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-secondary z-10 opacity-0 group-hover/movie:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-accent z-10 opacity-0 group-hover/movie:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-primary z-10 opacity-0 group-hover/movie:opacity-100 transition-opacity"></div>

                {/* Movie poster */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover transform group-hover/movie:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>

                  {/* Rating badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 cyber-card px-3 py-1.5">
                    <Star className="text-primary w-4 h-4 fill-primary" />
                    <span className="text-primary font-bold mono-text text-sm">{movie.rating}</span>
                  </div>

                  {/* Scan effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-0 group-hover/movie:opacity-100 transition-opacity animate-scan-slow"></div>
                </div>

                {/* Movie info */}
                <div className="p-6 space-y-3">
                  <div className="mono-text text-xs text-primary/60">
                    // {movie.year}
                  </div>

                  <h4 className="text-xl font-bold text-primary cyber-title line-clamp-2">
                    {movie.title}
                  </h4>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between border-b border-primary/10 pb-2">
                      <span className="text-text/40 mono-text">{language === 'en' ? 'DIRECTOR:' : language === 'fr' ? 'RÉALISATEUR:' : '导演:'}</span>
                      <span className="text-text/80">{movie.director}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text/40 mono-text">{language === 'en' ? 'GENRE:' : language === 'fr' ? 'GENRE:' : '类型:'}</span>
                      <span className="text-text/60 text-xs text-right">{movie.genre}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom glow line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover/movie:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Books Section */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <BookOpen className="text-secondary w-6 h-6" />
            <h3 className="text-3xl font-bold text-secondary cyber-title mono-text">
              // {language === 'en' ? 'FAVORITE_BOOKS' : language === 'fr' ? 'LIVRES_FAVORIS' : '最爱书籍'}
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-secondary/30 to-transparent"></div>
            <div className="cyber-card px-4 py-1">
              <span className="text-secondary/60 text-xs mono-text">[{books.length}]</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {books.map((book, idx) => (
              <div
                key={book.title}
                className="cyber-card p-0 overflow-hidden relative group/book transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                {/* Holographic corners */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-secondary z-10 opacity-0 group-hover/book:opacity-100 transition-opacity"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-accent z-10 opacity-0 group-hover/book:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-primary z-10 opacity-0 group-hover/book:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-secondary z-10 opacity-0 group-hover/book:opacity-100 transition-opacity"></div>

                <div className="grid md:grid-cols-5">
                  {/* Book cover */}
                  <div className="md:col-span-2 relative h-48 md:h-full overflow-hidden">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover transform group-hover/book:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/80"></div>

                    {/* Page count badge */}
                    <div className="absolute bottom-4 left-4 cyber-card px-3 py-1.5">
                      <span className="text-secondary font-bold mono-text text-xs">{book.pages}p</span>
                    </div>
                  </div>

                  {/* Book info */}
                  <div className="md:col-span-3 p-6 space-y-4">
                    <div className="mono-text text-xs text-secondary/60">
                      // {book.year}
                    </div>

                    <h4 className="text-xl font-bold text-secondary cyber-title line-clamp-2">
                      {book.title}
                    </h4>

                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between border-b border-secondary/10 pb-2">
                        <span className="text-text/40 mono-text">{language === 'en' ? 'AUTHOR:' : language === 'fr' ? 'AUTEUR:' : '作者:'}</span>
                        <span className="text-text/80">{book.author}</span>
                      </div>
                      <div className="flex justify-between border-b border-secondary/10 pb-2">
                        <span className="text-text/40 mono-text">{language === 'en' ? 'GENRE:' : language === 'fr' ? 'GENRE:' : '类型:'}</span>
                        <span className="text-text/60 text-xs text-right">{book.genre}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text/40 mono-text">{language === 'en' ? 'STATUS:' : language === 'fr' ? 'STATUT:' : '状态:'}</span>
                        <span className="text-secondary text-xs">{language === 'en' ? 'COMPLETED' : language === 'fr' ? 'TERMINÉ' : '已完成'}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 group-hover/book:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal output */}
        <div className="mt-20 cyber-card p-6 max-w-2xl mx-auto">
          <div className="mono-text text-xs space-y-2">
            <div className="text-primary/60">
              <span className="text-secondary">&gt;</span> {language === 'en'
                ? `system.log: ${movies.length} films + ${books.length} books loaded`
                : language === 'fr'
                ? `system.log: ${movies.length} films + ${books.length} livres chargés`
                : `system.log: ${movies.length}部电影 + ${books.length}本书已加载`}
            </div>
            <div className="text-text/40 flex items-center gap-2">
              <span className="text-secondary">&gt;</span>
              <span className="animate-pulse">_</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;
