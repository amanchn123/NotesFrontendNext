"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import styles from "../styles/user.module.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function Slider() {
  return (
    <div style={{ height: "320px", width: "80%" }}>
      <Swiper
        style={{ height: "300px", width: "50", marginTop: "20px" }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className={styles.Swiper}
      >
        <SwiperSlide style={{ width: "300px", height: "300px",backgroundColor:"rgb(230, 212, 212)",borderRadius:"10px" }}>
          <div>
          CollegeNotes has been an absolute exam-time life saver for me. I can
          just simply consume video content on YouTube and read notes from here.
          This saves me a lot of time and spares me the pain of note taking.
          </div>
          <div style={{display:"flex"}}>
          <img
            style={{ height: "100px",width:"100px" }}
            src="/img5.jpg"
          />
          <span>
          <b>
            Kerry jenefir
            </b><br />
            Chandigarh University
          </span>
          
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ width: "300px", height: "300px",backgroundColor:"rgb(230, 212, 212)",borderRadius:"10px" }}>
          <div>
          CollegeNotes has been an absolute exam-time life saver for me. I can
          just simply consume video content on YouTube and read notes from here.
          This saves me a lot of time and spares me the pain of note taking. 
          </div>
          <div style={{display:"flex"}}>
          <img
            style={{ height: "100px",width:"100px" }}
            src="/img4.webp"
          />
          <span>
          <b>
            Kerry jenefir
            </b><br />
            Chandigarh University
          </span>
          
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ width: "300px", height: "300px",backgroundColor:"rgb(230, 212, 212)",borderRadius:"10px" }}>
          <div>
          CollegeNotes has been an absolute exam-time life saver for me. I can
          just simply consume video content on YouTube and read notes from here.
          This saves me a lot of time and spares me the pain of note taking.
          </div>
          <div style={{display:"flex"}}>
          <img
            style={{ height: "100px",width:"100px" }}
            src="/img6.jpeg"
          />
          <span>
          <b>
            Khushboo sharma
            </b><br />
            Chandigarh University
          </span>
          
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ width: "300px", height: "300px",backgroundColor:"rgb(230, 212, 212)",borderRadius:"10px" }}>
          <div>
          CollegeNotes has been an absolute exam-time life saver for me. I can
          just simply consume video content on YouTube and read notes from here.
          This saves me a lot of time and spares me the pain of note taking.
          </div>
          <div style={{display:"flex"}}>
          <img
            style={{ height: "100px",width:"100px" }}
            src="/img4.webp"
          />
          <span>
          <b>
            Kerry jenefir
            </b><br />
            Chandigarh University
          </span>
          
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ width: "300px", height: "300px",backgroundColor:"rgb(230, 212, 212)",borderRadius:"10px" }}>
          <div>
          CollegeNotes has been an absolute exam-time life saver for me. I can
          just simply consume video content on YouTube and read notes from here.
          This saves me a lot of time and spares me the pain of note taking.
          </div>
          <div style={{display:"flex",justifyContent:"space-evenly"}}>
          <img
            style={{ height: "100px",width:"100px" }}
            src="/img4.webp"
          />
          <span>
          <b>
            Riya patel
            </b><br />
            Chandigarh University
          </span>
          
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
