const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <a
            href="https://github.com/AyanAlam02/01Project"
            target="_blank"
            className="bg-gray-200 p-4 rounded"
          >
            <div>Project 1</div>
          </a>
          <a
            href="https://github.com/AyanAlam02/02Project"
            target="_blank"
            className="bg-gray-200 p-4 rounded"
          >
            <div>Project 2</div>
          </a>
          <a
            href="https://github.com/AyanAlam02/03Project"
            target="_blank"
            className="bg-gray-200 p-4 rounded"
          >
            <div>Project 3</div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
