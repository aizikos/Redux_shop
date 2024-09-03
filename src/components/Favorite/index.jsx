import React from 'react'
import ERROR from '../../assets/Error_404.webp'
import { useSelector } from 'react-redux';
import FavoriteCard from '../FavoriteCard';

const Favorite = () => {
    const { favorite } = useSelector((s) => s)
    return (
        <div className="mt-[100px]">
            <div className="container">
                {favorite.length ?
                    <div className="card item-center gap-[40px] ">
                        {
                            favorite.map((el) => <FavoriteCard el = {el}/>)
                        }
                    </div>
                    :
                    <div className="w-[100%] flex item-center justify-center">
                        <img src={ERROR} alt="img" className="w-[30%]" />
                    </div>
                }

            </div>
        </div>
    );
      
    };

export default Favorite