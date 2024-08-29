import React from "react";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { useDispatch, useSelector } from "react-redux";




const Basket = () => {
    const { basket } = useSelector((s) => s)
    
    const dispatch = useDispatch()

    function IncrementQuently(item){
        dispatch ({type:'INCREMENT_QUANTITY', payload: item})
    }

    function MinusQuently(item){
        dispatch ({ type: 'MINUS_QUANTITY', payload: item})
    }

    function Delete(item){
        dispatch ({type: "DELETE" , payload: item})
    }

    return (
        <div className="container">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-[50px]">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xl text-black uppercase bg-gray-300 ">
                        <tr>
                            <th scope="col" class="px-16 py-3">
                                Img
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Product
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Qty
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            basket.map((el) => (
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td class="p-4">
                                        <Zoom>
                                            <img src={el.img} class="w-[60px] max-w-full max-h-full" alt="Apple Watch" />

                                        </Zoom>
                                    </td>
                                    <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                        {el.name}
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="flex items-center">
                                            <button 
                                            onClick={() => MinusQuently(el)}
                                            class="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                                <span class="sr-only">Quantity button</span>
                                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                                </svg>
                                            </button>
                                            <div>
                                                <h1 class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                                                    {el.quently}
                                                </h1>
                                            </div>
                                            <button
                                                onClick={()=> IncrementQuently(el)}
                                                class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 
                                                bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 
                                                focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 
                                                dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                                <span class="sr-only">Quantity button</span>
                                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                        ${el.price *el.quently}
                                    </td>
                                    <td class="px-6 py-4">
                                        <button 
                                        onClick={() => Delete(el)}
                                        class="font-medium text-red-600 text-xl dark:text-red-500 hover:underline">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Basket;