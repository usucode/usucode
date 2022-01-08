import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-center py-8 px-4 md:px-8">
      <Link href="/">
        <a>
          <img src="/logos/main.svg" alt="logo" />
        </a>
      </Link>
    </header>
  );
};

export default Header;
