const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold px-6">My Classwork Page</h1>
        <ul className="flex space-x-4 px-6">
          <li>
            <a href="#about" className="hover:underline">
              About Us
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hover:underline">
              Portfolio
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
