import React from "react";
import { People } from "@/types/people"

import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

interface CardProps {
  item: People
  className?: string;
  extended?: boolean;
}

export default function CardItem({ item, className, extended }: CardProps) {
  const regex = /\/people\/(\d+)\//;
  const match = item.url.match(regex);
  const id = match ? match[1] : null;

  return (
    <Card className={`min-w-[280px] m-4 ${className}`}>
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{item.name}</p>
          <p className="text-small text-default-500">Genero: {item.gender}</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>Cumpleaños: {item.birth_year}</p>
        <p>Color de Cabello: {item.hair_color}</p>
        {extended && (
          <>
            <p>Estatura: {item.height}</p>
            <p>Color de ojos: {item.eye_color}</p>
            <p>Mass: {item.mass}</p>
          </>    
        )}
      </CardBody>
      <Divider/>
      <CardFooter className="flex justify-center">
        <Link
          // isExternal
          showAnchorIcon
          href={`/detail/${id}`}
        >
          Ver mas detalles
        </Link>
      </CardFooter>
    </Card>
  );
}
