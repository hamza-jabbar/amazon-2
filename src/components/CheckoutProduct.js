import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image"
import Currency from 'react-currency-formatter'
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice"


function checkoutProduct({ 
    id,
    title,
    price,
    rating,
    description,
    category,
    image,
    hasPrime
}) {
    const dispatch = useDispatch();

    const addItemToBasket = () => {
        // Remove Item from Redux
        dispatch(removeFromBasket({ id }))

        // Push Item to Redux
        dispatch(addToBasket(product))
    }
    
    const removeItemFromBasket = () => {
        const product = {
            id,
            title,
            price,
            rating,
            description,
            category,
            image,
            hasPrime
        }

        // Push Item to Redux
        dispatch(removeFromBasket(product))
    }

    return (
        <div className="grid grid-cols-5">
            <Image src={image} height={200} width={200} objectFit="contain" />

            {/* Middle */}
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon key={i} className="h-5 text-yellow-500" />
                    ))}
                </div>

                <p className="text-xs my-2 line-clamp-3">{description}</p>

                <Currency quantity={price} currency="GBP" />

                {hasPrime && (
                    <div className="flex items-center space-x-2">
                        <img loading="lazy" src="https://links.papareact.com/fdw" className="w-12" alt="" />
                        <p className="text-xs text-gray-500">FREE Next Day Delivery</p>
                    </div>
                )}

            </div>
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button className="button" onClick={addItemToBasket}>Add to Basket</button>
                <button className="button" onClick={removeItemFromBasket}>Remove from Basket</button>
            </div>
        </div>

        
    )
}

export default checkoutProduct;