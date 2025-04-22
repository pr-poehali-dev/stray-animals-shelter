import Header from "@/components/Header";
import AnimalsSection from "@/components/AnimalsSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowDown, Heart } from "lucide-react";
import { AnimalProps } from "@/components/AnimalCard";

const Index = () => {
  // Примеры животных для демонстрации
  const animalsData: AnimalProps[] = [
    {
      id: 1,
      name: "Барсик",
      type: "cat",
      age: "2 года",
      gender: "male",
      description: "Барсик - очень ласковый и игривый кот. Любит сидеть на коленях и мурчать. Отлично ладит с детьми и другими животными.",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Рекс",
      type: "dog",
      age: "3 года",
      gender: "male",
      description: "Рекс - энергичный и преданный пес. Обожает прогулки и активные игры. Хорошо обучен базовым командам.",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Муся",
      type: "cat",
      age: "1 год",
      gender: "female",
      description: "Муся - нежная и спокойная кошечка. Очень аккуратная, приучена к лотку. Будет отличным компаньоном в доме.",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 4,
      name: "Дружок",
      type: "dog",
      age: "5 лет",
      gender: "male",
      description: "Дружок - спокойный и умный пес. Отлично подойдет для семьи с детьми. Любит долгие прогулки и тишину.",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 5,
      name: "Ляля",
      type: "dog",
      age: "2 года",
      gender: "female",
      description: "Ляля - активная и дружелюбная собака. Обожает играть и бегать. Станет отличным другом для активного человека.",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 6,
      name: "Пушок",
      type: "other",
      age: "1 год",
      gender: "male",
      description: "Пушок - милый декоративный кролик. Очень чистоплотный и спокойный. Идеален для содержания в квартире.",
      imageUrl: "/placeholder.svg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero секция */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div
          className="absolute inset-0 bg-cover bg-center z-[-1]"
          style={{
            backgroundImage: "url('/placeholder.svg')",
          }}
        ></div>
        
        <div className="container mx-auto px-4 z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Подарите дом тем, кто в нём нуждается
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Наши питомцы мечтают найти любящую семью. Вместе мы можем сделать их жизнь счастливее!
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="#animals">Найти друга</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm" asChild>
                <a href="#contact">Связаться с нами</a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button variant="ghost" size="icon" className="rounded-full bg-white/20 backdrop-blur-sm" asChild>
            <a href="#about">
              <ArrowDown className="h-6 w-6 text-white" />
            </a>
          </Button>
        </div>
      </section>
      
      {/* О нас */}
      <section id="about" className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">О нашем приюте</h2>
              <p className="mb-4 text-muted-foreground">
                Приют "Дом для Лап" был основан в 2015 году с целью помочь бездомным животным найти новый дом и любящих хозяев.
              </p>
              <p className="mb-4 text-muted-foreground">
                Мы заботимся о здоровье, питании и эмоциональном благополучии всех наших подопечных, пока они ждут своих новых хозяев.
              </p>
              <p className="mb-6 text-muted-foreground">
                За годы работы нам удалось найти новый дом для более чем 500 животных, и эта цифра продолжает расти благодаря поддержке волонтёров и неравнодушных людей.
              </p>
              <div className="flex items-center gap-4">
                <Heart className="h-16 w-16 text-primary" />
                <div>
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm text-muted-foreground">животных нашли новый дом</div>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/placeholder.svg" 
                alt="Приют Дом для Лап" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Животные */}
      <AnimalsSection animals={animalsData} />
      
      {/* Форма связи */}
      <ContactForm />
      
      {/* Футер */}
      <Footer />
    </div>
  );
};

export default Index;
