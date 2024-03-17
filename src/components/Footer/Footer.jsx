import Logo from 'components/Shared/Logo';
import sprite from '../../images/sprite.svg';
import tmdbLogo from '../../images/tmdb-logo.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="container py-4 flex flex-col items-center text-center sm:flex-row sm:flex-wrap sm:justify-between">
        <Logo />
        <div className="flex flex-wrap items-center justify-center gap-x-2">
          Made with ❤︎ by
          <a
            href="https://github.com/Iryna-Holova"
            target="_blanc"
            className="flex flex-wrap h-16 items-center justify-center gap-x-2 transition-colors hover:text-white/50"
          >
            <svg className="fill-current w-8 h-8">
              <use href={sprite + '#github-logo'} />
            </svg>
            Iryna-Holova
          </a>
        </div>
        <div className="flex items-center gap-x-1">
          API:
          <a
            href="https://www.themoviedb.org"
            target="_blanc"
            className="flex h-16 items-center"
          >
            <img src={tmdbLogo} alt="The Movie Database" width={72} />
          </a>
        </div>
        <p className="text-white/50 text-xs w-full">
          This product uses the TMDB API but is not endorsed or certified by
          TMDB.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
