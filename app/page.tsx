"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <Button variant={'secondary'}
    onClick={()=>router.push("/context-practise")}>
      click
    </Button>
  )
}
