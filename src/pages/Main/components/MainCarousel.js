import * as React from "react";
import { Carousel } from "react-responsive-carousel";
import Link from "@mui/material/Link";

const MainCarousel = ({ posts }) => {

  return (
    <div>
      <Carousel
        autoPlay={true}
        interval={3000} // default = 3000
        infiniteLoop={true}
        swipeable={true} // default = true
        width={"100%"}
        showStatus={false}
        showThumbs={false}
        dynamicHeight={false}
      >
        {posts.map((item) => (
          <div>
            <Link
              className="main-carousel-link"
              href="#"
              underline="hover"
            >
              {item.year + " " + item.title + " 바로 가기"}
            </Link>
            <label className="year-label">{item.year}</label>
            <label className="title-label">{item.title}</label>
            <label className="content-label">{item.content}</label>
            <img src={item.img} alt="main-carousel-img"/>
          </div>
        ))}
      </Carousel>
    </div>
  );
};


export default MainCarousel;
