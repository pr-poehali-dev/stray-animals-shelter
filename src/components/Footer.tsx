import { HeartHandshake } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary/10 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <HeartHandshake className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Дом для Лап</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Дом для Лап. Все права защищены.
            </p>
            <div className="flex justify-center md:justify-end gap-4 mt-2">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                Правила
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                Конфиденциальность
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                Контакты
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
