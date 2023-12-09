const Footer = () => {
  return (
    <footer className="bg-[#387A58] text-white p-4 h-[15vh]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">Loto's</h1>
            <p className="text-sm">© 2023 Todos los derechos reservados</p>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white hover:text-gray-500">
              Enlace 1
            </a>
            <a href="#" className="text-white hover:text-gray-500">
              Enlace 2
            </a>
            <a href="#" className="text-white hover:text-gray-500">
              Enlace 3
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
