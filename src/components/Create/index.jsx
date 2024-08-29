import { data } from "autoprefixer";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Create = () => {

    const [productName, setProductName] = useState('');
    const [productUrl, setProductUrl] = useState('');
    const [productPrice, setProductPrice] = useState('');

    const dispatch = useDispatch()

    const errorMessage =()=>{
        toast.error('🦄 Запольните данные', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }


    const succses = () => {
        toast.success('🦄 Добавлено', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    function addProduct() {
        if (productName === "" || productUrl === "" || productPrice === "") {
            errorMessage()
        } else {
            const newProduct = {
                id: new Date(),
                name: productName,
                img: productUrl,
                price: productPrice,
                quently: 1
            }
            succses()
            dispatch({ type: 'ADD_PRODUCT', payload: newProduct })
        }
        setProductUrl('')
        setProductName('')
        setProductPrice('')

    }

    const { product } = useSelector((s) => s)

    return (
        <div className="container">
            <div className="w-[50%] mx-auto mt-[50px] flex items-center justify-center flex-col">
                <div class="relative z-0 w-full mb-5 group">
                    <input
                        type="email"
                        class="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        onChange={(e) => setProductUrl(e.target.value)}
                        value={productUrl}
                    />
                    <label
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Product url .....
                    </label>
                </div>
                <div class="relative z-0 w-full my-[50px] group">
                    <input
                        type="email"
                        class="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        onChange={(e) => setProductName(e.target.value)}
                        value={productName}
                    />
                    <label
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Product Name .....
                    </label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input
                        type="email"
                        class="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        onChange={(e) => setProductPrice(e.target.value)}
                        value={productPrice}
                    />
                    <label
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Product Price .....
                    </label>
                </div>

                <button className="text-[25px] mt-[40px] bg-blue-900 text-white py-[10px] px-[50px] rounded-lg border-none"
                    onClick={() => addProduct()}>
                    SAVE
                </button>
                <ToastContainer />
            </div>
        </div>
    )
}


export default Create;