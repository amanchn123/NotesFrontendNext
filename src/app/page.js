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

export default function page() {
  const router = useRouter();
  return (
    <div className={styles.Home}>
      <Grid style={{ width: "65vw", marginTop: "30px" }} container lg={12}>
        <Grid
          className={`${styles.rows} ${styles.row1}`}
          item
          lg={6}
          sx={12}
          container
        >
          <span style={{ fontSize: "50px", lineHeight: "1.1" }}>
            Power Your
            <br />
            Preparation!
          </span>
          <br />
          <span>
            Good notes are the backbone of all your exams' preparation
            CollegeNotes provides you with just that - notes, books, PYQs and
            more - everything you need to ace your semesters without worrying
            about the resources!
          </span>
          <Button
            variant="contained"
            style={{
              backgroundColor: "green",
              height: "40px",
              marginTop: "5px",
            }}
            color="success"
            onClick={() => router.push("/BCA")}
          >
            All Subjects <CiLogin />{" "}
          </Button>{" "}
          &nbsp;&nbsp;&nbsp;
          <Link
            style={{
              border: "2px solid black",
              marginTop: "5px",
              padding: "7px",
              borderRadius: "10%",
              height: "40px",
            }}
            href="/abouts"
          >
            Collage Blog
          </Link>
        </Grid>
        <Grid
          className={`${styles.rows} ${styles.row1}`}
          item
          lg={6}
          sx={12}
          container
        >
          <img style={{ height: "100%" }} src="/img1.webp" />
        </Grid>

        <Grid lg={6} className={`${styles.row2} ${styles.row2a}`}>
          <span style={{ fontSize: "200%" }}>We are in Beta! </span>
          <br />

          <span>
            {" "}
            CollegeNotes is still in beta and I am working hard to make this
            website better for you. If you have any suggestions, please let me
            know. Explore CollegeBlog, the newest addition to CollegeNotes!
          </span>
        </Grid>
        <Grid lg={6} className={`${styles.row2} ${styles.row2b}`}>
          <img
            style={{ height: "115%", width: "100%", marginTop: "-30px" }}
            src="/rocket.webp"
          />
        </Grid>

        <Grid lg={12}>
          <p
            style={{
              fontSize: "40px",
              display: "grid",
              justifyContent: "center",
              fontFamily: "fantasy",
            }}
          >
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

      <Grid container lg={12}>
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
        <Grid lg={6} sx={12} className={styles.lastrow}>
          <img src="img3.webp" />
        </Grid>
      </Grid>

      <Grid
        container
        lg={6}
        sx={12}
        style={{ marginTop: "60px", width: "100vw",justifyContent:"center" }}
      >
        <Grid lg={4} sx={12} style={{display:"grid",justifyContent:"end"}}>
          <header
            style={{
              fontSize: "35px",
              fontFamily: "monospace",
              // justifyContent: "center"
            }}
          >
            Testinomials
          </header>
          <div style={{width:"200px",display:"grid",justifyContent:"center",fontSize:"18px"}}>
            See what thousands of college and university students studying with
            CollegeNotes have to say about us.Top Universite's student of India
            are praising us
          </div>
        </Grid>
        <Grid lg={8} sx={12}>
          <Slider />
        </Grid>
      </Grid>
    </div>
  );
}
