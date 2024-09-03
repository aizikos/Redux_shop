import React from "react";
import { useSelector } from "react-redux";
import ERROR from '../../assets/Error_404.webp'
import ProductCard from "../ProductCard";



const Product = () => {

    const { product } = useSelector((s) => s)
    return (
        <div className="mt-[100px]">
            <div className="container">
                {product.length ?
                    <div className="card item-center gap-[40px] ">
                        {
                            product.map((el) => <ProductCard el ={el}/>)
                        }
                    </div>
                    :
                    <div className="w-[100%] flex item-center justify-center">
                        <img src={ERROR} alt="img" className="w-[40%]" />
                    </div>
                }

            </div>
        </div>
    )
}


export default Product;