import React from 'react'
import ProductCard from '../ProductCard';
import ERROR from '../../assets/Error_404.webp'
import { useSelector } from 'react-redux';

const Favorite = () => {
    const { favorite } = useSelector((s) => s)
    return (
        <div className="mt-[100px]">
            <div className="container">
                {favorite.length ?
                    <div className="card item-center gap-[40px] ">
                        {
                            favorite.map((el) => <ProductCard el= {el}/>)
                        }
                    </div>
                    :
                    <div className="w-[100%] flex item-center justify-center">
                        <img src={ERROR} alt="img" className="w-[70%]" />
                    </div>
                }

            </div>
        </div>
    );
      
    };

export default Favorite