"use client";
import {usePathname} from "next/navigation";


export default function NotFound() {
  const pathname = usePathname()

  const reviewId = pathname.split('/')[4]
  return (
    <div>Review {reviewId} not found</div>
  )
}
