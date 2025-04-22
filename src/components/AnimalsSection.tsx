import { useState } from "react";
import AnimalCard, { AnimalProps } from "./AnimalCard";
import { Button } from "@/components/ui/button";

interface AnimalsSectionProps {
  animals: AnimalProps[];
}

const AnimalsSection = ({ animals }: AnimalsSectionProps) => {
  const [filter, setFilter] = useState<'all' | 'dog' | 'cat' | 'other'>('all');
  
  const filteredAnimals = filter === 'all' 
    ? animals 
    : animals.filter(animal => animal.type === filter);

  return (
    <section id="animals" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Наши питомцы ищут дом</h2>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Button 
            variant={filter === 'all' ? 'default' : 'outline'} 
            onClick={() => setFilter('all')}
          >
            Все
          </Button>
          <Button 
            variant={filter === 'dog' ? 'default' : 'outline'} 
            onClick={() => setFilter('dog')}
          >
            Собаки
          </Button>
          <Button 
            variant={filter === 'cat' ? 'default' : 'outline'} 
            onClick={() => setFilter('cat')}
          >
            Кошки
          </Button>
          <Button 
            variant={filter === 'other' ? 'default' : 'outline'} 
            onClick={() => setFilter('other')}
          >
            Другие
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAnimals.map(animal => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
        
        {filteredAnimals.length === 0 && (
          <p className="text-center text-muted-foreground mt-6">
            Животных по данному фильтру не найдено.
          </p>
        )}
      </div>
    </section>
  );
};

export default AnimalsSection;
