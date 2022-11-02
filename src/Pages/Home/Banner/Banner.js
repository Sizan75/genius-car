import React from 'react';
import banner1 from '../../../assets/images/banner/1.jpg'
import banner2 from '../../../assets/images/banner/2.jpg'
import banner3 from '../../../assets/images/banner/3.jpg'
import banner4 from '../../../assets/images/banner/4.jpg'
import banner5 from '../../../assets/images/banner/5.jpg'
import banner6 from '../../../assets/images/banner/6.jpg'
import './Banner.css'
import BannerItem from './BannerItem';
const Banner = () => {
    const bannerData = [
        {
            image: banner1,
            prev: 6,
            id: 1,
            next: 2
        },
        {
            image: banner2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: banner3,
            prev: 2,
            id: 3,
            next: 4
        },
        {
            image: banner4,
            prev: 3,
            id: 4,
            next: 5
        },
        {
            image: banner5,
            prev: 4,
            id: 5,
            next: 6
        },
        {
            image: banner6,
            prev: 5,
            id: 6,
            next: 1
        }
    ]
    return (
        <div>
            <div className="carousel w-full">
                {
                    bannerData.map(slide => <BannerItem key={slide.id}
                    slide={slide}
                    ></BannerItem>)
                }
                {/* <BannerItem image={banner1}></BannerItem>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} alt='' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
export default Banner;