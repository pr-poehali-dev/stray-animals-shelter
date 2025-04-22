import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface AnimalProps {
  id: number;
  name: string;
  type: 'dog' | 'cat' | 'other';
  age: string;
  gender: 'male' | 'female';
  description: string;
  imageUrl: string;
}

const AnimalCard = ({ animal }: { animal: AnimalProps }) => {
  const typeLabels = {
    'dog': 'Собака',
    'cat': 'Кошка',
    'other': 'Другое животное'
  };

  const genderLabels = {
    'male': 'Мальчик',
    'female': 'Девочка'
  };

  return (
    <Card className="overflow-hidden h-full flex flex-col hover-scale">
      <div className="aspect-square overflow-hidden">
        <img 
          src={animal.imageUrl || "/placeholder.svg"} 
          alt={animal.name} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle>{animal.name}</CardTitle>
          <Badge variant="outline">{typeLabels[animal.type]}</Badge>
        </div>
        <CardDescription className="flex gap-2">
          <span>{animal.age}</span>
          <span>•</span>
          <span>{genderLabels[animal.gender]}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-3">{animal.description}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Приютить</Button>
      </CardFooter>
    </Card>
  );
};

export default AnimalCard;
