"use client"
import { useRouter } from "next/navigation"

export default function PlaceOrder(){
    const router = useRouter()
    const handleOrder = () => {
        console.log('Order placed')
        router.push('/')
    }
    return(
        <button onClick={handleOrder}>Place Order</button>
    )
}