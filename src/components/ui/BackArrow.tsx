'use client'

import { usePathname } from "next/navigation"
import { MoveLeft } from 'lucide-react';
import Link from "next/link";
import clsx from "clsx";

function BackArrow() {

  const pathName = usePathname()


  return (
    <Link
      className={clsx("absolute  top-[24px] left-0  lg:left-1/6   2xl:left-1/4 pr-0.5 ", { "hidden": pathName == "/" })}
      href={'/'}
    >
      <MoveLeft className={"sm:w-8 sm:h-8"} />
    </Link>
  )
}

export default BackArrow