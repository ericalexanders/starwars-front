'use client'
import { useParams } from 'next/navigation'
import useSWR from "swr";
import {Button, Input} from "@nextui-org/react";

import Spinner from "@/components/Spinner";
import CardItem from "@/components/Card";
import { People } from "@/types/people";

export default function Detail({ params }: { params: { id: string } }) {
  const { id } = params;
  const { data, error, isLoading } = useSWR(`/people/${id}`);

  if (isLoading) return <Spinner label="Loading..." color="primary" />

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex max-w-7xl overscroll-x-none flex-wrap container justify-evenly">
        <CardItem className='w-[400px]' item={data} key={data.name} extended />
      </div>
    </main>
  );
}