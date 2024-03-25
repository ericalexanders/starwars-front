import React from "react";
import { ItemCard } from "@/types"

import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

interface CardProps {
  item: ItemCard | null;
  className?: string;
  extended?: boolean;
  asPath?: string;
  noFooter?: boolean
}

export default function CardItem({ item, className, extended, asPath, noFooter }: CardProps) {
  const match = item?.url?.match(item.rgx);
  const id = match ? match[1] : null;

  if (!item) return <div>Null</div>

  return (
    <Card className={`w-[280px] m-4 ${className} animate-fade-up animate-once`}>
      <CardHeader className="flex gap-3">
          <div className="max-h-[80px] overflow-hidden rounded-3xl">
            <Image
              alt="nextui logo"
              width={100}
              src={item.img || 'https://avatars.githubusercontent.com/u/86160567?s=200&v=4'}
              removeWrapper
              className="min-h-[80px] object-cover"
            />
          </div>
        <div className="flex flex-col">
          <p className="text-md">{item.title}</p>
          <p className="text-small text-default-500">Genero: {item.header}</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>{item.body1}</p>
        <p>{item.body2}</p>
        {extended && (
          <>
            <p>{item.extended1}</p>
            <p>{item.extended2}</p>
            <p>{item.extended3}</p>
          </>    
        )}
      </CardBody>
      <Divider/>
      {!noFooter && <CardFooter className="p-0">
        <Link
          // isExternal
          // showAnchorIcon
          href={`/detail${asPath == '/' ? '/people' : asPath}/${id}`}
          className="w-full h-full p-2 flex justify-center hover:bg-blue-600 hover:text-white"
        >
          Ver más detalles
        </Link>
      </CardFooter>}
    </Card>
  );
}
