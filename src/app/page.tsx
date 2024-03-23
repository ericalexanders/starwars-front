'use client'
import { useMemo, useRef, useState } from "react";
import useSWR from "swr";
import {Button, Input} from "@nextui-org/react";

import Spinner from "@/components/Spinner";
import CardItem from "@/components/Card";
import { People } from "@/types";
import { usePathname } from "next/navigation";

import { parserDTO } from "@/utils";

export default function Home() {
  const [name, setName] = useState('');
  const asPath = usePathname()
  const nameRef = useRef<HTMLInputElement>(null);
  const { data, error, isLoading } = useSWR(name ? `${asPath == "/" ? "/people" : asPath}?search=${name}` : `${asPath == "/" ? "/people" : asPath}`);
  const people = useMemo(() => data?.results, [data])
  
  const handleSearch = () => {
    if (nameRef.current) {
      setName(nameRef.current.value);
    }
  };

  if (isLoading) return <Spinner label="Loading..." color="primary" />

  return (
    <main className="flex min-h-screen flex-col items-center px-24 py-14">
      <div className="flex items-center mb-8">
        <Input ref={nameRef} type="text" label="Nombre" className="mr-4 w-[350px]" />
        <Button className="h-[56px]" color="primary" onClick={handleSearch}>
          Buscar
        </Button>
      </div>
      <div className="flex max-w-7xl overscroll-x-none flex-wrap container justify-evenly">
        {people.map((item: any) => (
          <CardItem item={parserDTO(asPath,item)} key={item.name} asPath={asPath} />)
        )}
      </div>
    </main>
  );
}
