"use client";
import Link from "next/link";
import styles from "../styles/page.module.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import { CiLogin } from "react-icons/ci";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Slider from "./slider";
import { motion } from "framer-motion";
import { useMediaQuery } from '@mui/material';

export default function page() {
  const isLargeScreen = useMediaQuery('(min-width: 1024px)')
  // const router = useRouter();
  return (
    <div className={styles.Home}>
      <Grid
        className={`${styles.maingrid} ${styles.maingrid1}`}
        container
        lg={12}
      >
        <Grid className={`${styles.rows} ${styles.row1}`} item lg={6} sx={12}>
        <motion.div
        
            initial={isLargeScreen?{
              x: 150, // Initial x position before the animation
              y: 0, // Initial y position before the animation
            }:undefined}
            animate={isLargeScreen?{
              x: -20,
              // opacity:1,
              // scale: 1,
            }:undefined}
          >
            <span style={{ fontSize: "50px", lineHeight: "1.1" }}>
            Power Your
            <br />
            Preparation!
          </span>
          <br />
          <span style={{ fontFamily: "serif" }}>
            Good notes are the backbone of all your exams' preparation
            CollegeNotes provides you with just that - notes, books, PYQs and
            more - everything you need to ace your semesters without worrying
            about the resources!
          </span>
          <div className="flex mt-10 mb-10">
            <Link
              href="/BCA"
              className="flex shadow-xl bg-green-500 h-10 md:h-13 lg:h-10 items-center rounded p-3"
            >
              <p>All Subjects</p> <CiLogin />{" "}
            </Link>{" "}
            &nbsp;&nbsp;&nbsp;
            <Link
              style={{
                border: "2px solid blue",
                // marginTop: "5px",
                padding: "7px",
                borderRadius: "10px",

                height: "40px",
              }}
              href="/abouts"
            >
              Collage Blog
            </Link>
          </div>
          </motion.div>
        </Grid>
        <Grid
          className={`${styles.rows} ${styles.row1}`}
          item
          lg={6}
          sx={12}
          // container
        >
          <motion.div
            initial={isLargeScreen?{
              x: -100, // Initial x position before the animation
              y: 0, // Initial y position before the animation
            }:undefined}
            animate={isLargeScreen?{
              x: 100,
              // opacity:1,
              // scale: 1,
            }:undefined}
          >
            <img style={{ height: "100%" }} src="/img1.webp" />
          </motion.div>
        </Grid>

        <Grid lg={6} >
          <motion.div className={`${styles.row2} ${styles.row2a}`}
            initial={isLargeScreen?{
              x: -350, // Initial x position before the animation
              y:0, // Initial y position before the animation
            }:undefined}
            animate={isLargeScreen?{
              x: 10,
              y:0,
              // opacity:1,
              // scale: 1,
            }:undefined}
          >
          <span style={{ fontSize: "200%" }}>We are in Beta! </span>
          <br />

          <span>
            {" "}
            CollegeNotes is still in beta and I am working hard to make this
            website better for you. If you have any suggestions, please let me
            know. Explore CollegeBlog, the newest addition to CollegeNotes!
          </span>
          </motion.div>
        </Grid>
        <Grid lg={6} className={`${styles.row2} ${styles.row2b}`}>
          <img
            style={{ height: "115%", width: "100%", marginTop: "-30px" }}
            src="/rocket.webp"
          />
        </Grid>

        <Grid lg={12} className={styles.row3}>
          <p className={styles.p} fontFamily="fantasy`">
            Newest Feature Addition
          </p>
        </Grid>
        <Grid className={styles.featurerow} lg={4} sx={12}>
          <header
            style={{
              fontSize: "25px",
              display: "grid",
              justifyContent: "center",
              lineHeight: "1",
            }}
          >
            &nbsp; Performance <br /> improvements 🚀
          </header>
          CollegeNotes is now faster than ever! I have made some performance
          improvements to the website to make it load faster and consume less
          data.{" "}
        </Grid>

        <Grid className={styles.featurerow} lg={4} sx={12}>
          <header
            style={{
              fontSize: "25px",
              display: "grid",
              justifyContent: "center",
              lineHeight: "1",
            }}
          >
            CollageBlog
          </header>
          CollegeBlog is the latest addition to the platform. Here, you can find
          articles related to college life, exams, and more. You can also
          contribute to the blog by writing articles.{" "}
        </Grid>

        <Grid className={styles.featurerow} lg={4} sx={12}>
          <header
            style={{
              fontSize: "25px",
              display: "grid",
              justifyContent: "center",
              lineHeight: "1",
            }}
          >
            Better UI & UX
          </header>
          The UI of the website has been improved. Better colors, better fonts,
          and better accessibility. The website is now more accessible and
          easier to use.{" "}
        </Grid>
        <Grid className={styles.waytoStudy} lg={6} sx={12}>
          <img src="/img2.webp" />
        </Grid>
        <Grid className={styles.waytoStudy} lg={6} sx={12}>
          <header
            style={{
              fontSize: "35px",
              display: "grid",
              fontFamily: "monospace",
              justifyContent: "center",
              lineHeight: "1",
              marginBottom: "10px",
            }}
          >
            The best way <br /> to study
          </header>
          <div style={{ width: "300px" }}>
            Our users say studying from YouTube lectures for understanding
            combined with CollegeNotes' study materials can synergize your
            preparation and make it faster, better and more efficient, so that
            you can perform well in your semester exams in less time!
            <br /> <br />
            In fact, this was one of the motivations behind starting
            CollegeNotes!
            <br />
            <button>
              See our Story &nbsp;
              <HiOutlineArrowNarrowRight style={{ marginTop: "7px" }} />
            </button>
          </div>
        </Grid>
      </Grid>

      <Grid container lg={12} className={styles.maingrid}>
        <Grid lg={6} sx={12} className={`${styles.lastrow} ${styles.lastrow1}`}>
          <header
            style={{
              fontSize: "35px",
              display: "grid",
              fontFamily: "monospace",
              justifyContent: "center",
              lineHeight: "1",
              marginBottom: "10px",
            }}
          >
            Future For
            <br /> The Future
          </header>
          <div>
            <ul>
              <li>
                Users will be able to rate notes and they'll be sorted
                accordingly for better accessibility to the readers.
              </li>
              <br />
              <li>
                A community and more support for learners to streamline their
                studies and speed up their exam preparation.
              </li>
              <br />
              <li>
                When traffic is enough, CollegeNotes will be monetised to
                incentivise the contributors according to their notes' views.
              </li>
            </ul>
          </div>
        </Grid>
        <Grid lg={6} sx={12} className={styles.lastrow} >

            <img src="img3.webp" />
          
        </Grid>
      </Grid>

      <Grid
        className={styles.maingrid}
        container
        lg={6}
        sx={12}
        style={{ marginTop: "60px", width: "100vw", justifyContent: "center" }}
      >
        <Grid lg={4} sx={12} style={{ display: "grid", justifyContent: "end" }}>
          <header
            style={{
              fontSize: "35px",
              fontFamily: "monospace",
              // justifyContent: "center"
            }}
          >
            Testinomials
          </header>
          <div
            style={{
              width: "200px",
              display: "grid",
              justifyContent: "center",
              fontSize: "18px",
            }}
          >
            See what thousands of college and university students studying with
            CollegeNotes have to say about us.Top Universite's student of India
            are praising us
          </div>
        </Grid>
        <Grid lg={8} sx={12} className={`${styles.slidergrid}`}>
          <Slider />
        </Grid>
      </Grid>
    </div>
  );
}
