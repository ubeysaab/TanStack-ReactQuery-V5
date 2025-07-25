'use client'

import { usePathname } from "next/navigation"
import { MoveLeft } from 'lucide-react';
import Link from "next/link";
import clsx from "clsx";

function BackArrow() {

  const pathName = usePathname()


  return (
    <Link
      className={clsx("absolute  top-[32px] left-0 sm:left-1/4 ", { "hidden": pathName == "/" })}
      href={'/'}
    >
      <MoveLeft className={"sm:w-8 sm:h-8"} />
    </Link>
  )
}

export default BackArrow