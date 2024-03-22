'use client'
import { useRef, useState } from "react";
import useSWR from "swr";
import {Button, Input} from "@nextui-org/react";

import Spinner from "@/components/Spinner";
import CardItem from "@/components/Card";
import { People } from "@/types/people";

export default function Home() {
  const [name, setName] = useState('');
  const nameRef = useRef(null);
  const { data, error, isLoading } = useSWR(name ? `/people?name=${name}` : '/people');

  const handleSearch = () => {
    if (nameRef.current) {
      setName(nameRef.current.value);
    }
  };

  console.log("Data: ", data)

  if (isLoading) return <Spinner label="Loading..." color="primary" />

  const people = name ? [data.results[0]] : data.results

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex items-center mb-8">
        <Input ref={nameRef} type="text" label="Nombre" className="mr-4" />
        <Button className="h-[56px]" color="primary" onClick={handleSearch}>
          Buscar
        </Button>
      </div>
      <div className="flex max-w-7xl overscroll-x-none flex-wrap container justify-evenly">
        {people.map((item: People) => <CardItem item={item} key={item.name} />)}
      </div>
    </main>
  );
}
