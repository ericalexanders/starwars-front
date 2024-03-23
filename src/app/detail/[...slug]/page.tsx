'use client'
import { useParams } from 'next/navigation'
import useSWR from "swr";
import {Button, Input} from "@nextui-org/react";

import Spinner from "@/components/Spinner";
import CardItem from "@/components/Card";
import { parserDTO } from '@/utils';

export default function Detail({ params }: { params: { slug: string[] } }) {
  const [path, id] = params.slug;
  const { data, error, isLoading } = useSWR(`/${path}/${id}`);

  if (isLoading) return <Spinner label="Loading..." color="primary" />

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex max-w-7xl overscroll-x-none flex-wrap container justify-evenly">
        <CardItem className='w-[400px]' item={parserDTO(path == 'people' ? '/' : '/' + path, data)} extended noFooter />
      </div>
    </main>
  );
}