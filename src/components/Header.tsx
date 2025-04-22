import { Button } from "@/components/ui/button";
import { HeartHandshake, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <HeartHandshake className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">Дом для Лап</span>
        </div>

        {/* Мобильное меню */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Десктопное меню */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="font-medium hover:text-primary transition-colors">Главная</a>
          <a href="#animals" className="font-medium hover:text-primary transition-colors">Животные</a>
          <a href="#about" className="font-medium hover:text-primary transition-colors">О нас</a>
          <a href="#contact" className="font-medium hover:text-primary transition-colors">Связаться</a>
          <Button>Помочь приюту</Button>
        </nav>
      </div>

      {/* Мобильное меню (развернутое) */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#" className="py-2 font-medium hover:text-primary transition-colors" onClick={toggleMenu}>Главная</a>
            <a href="#animals" className="py-2 font-medium hover:text-primary transition-colors" onClick={toggleMenu}>Животные</a>
            <a href="#about" className="py-2 font-medium hover:text-primary transition-colors" onClick={toggleMenu}>О нас</a>
            <a href="#contact" className="py-2 font-medium hover:text-primary transition-colors" onClick={toggleMenu}>Связаться</a>
            <Button className="mt-2">Помочь приюту</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
