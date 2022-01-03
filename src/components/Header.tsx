import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex px-4 md:px-8">
      <Link href="/">
        <p className="text-4xl font-display">U</p>
      </Link>
    </header>
  );
};

export default Header;
