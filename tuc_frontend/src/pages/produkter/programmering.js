import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar'
import '../../assets/Stylesheet_css/programmering.css';

const Programmering = () => {
    return (
        <div>
            <Navbar />
            <div className='programmering-container'>
                <img src='/images/Programmering.png' alt='programmering' className='programmerimg-bild'></img>
            </div>

            <div className='programmeribg-info'>

                <pre>Ta steget in i framtiden? Bli en Programmerare Idag!<br></br>

                    Vill du vara den som skapar framtidens teknik? Vill du bygga appar, spel eller innovativa lösningar<br></br>
                    som gör skillnad i människors liv? Nu har du chansen att ta kontroll över din framtid och lära dig<br></br>
                    programmering en av de mest eftertraktade och lönsamma färdigheterna i dagens värld.<br></br>

                    Den här kursen är inte bara en introduktion till programmering, det är din väg till att bli en skapare,<br></br>
                    innovatör och problemlösare. Oavsett om du drömmer om en ny karriär, vill starta ett eget projekt<br></br>
                    eller bara utmana dig själv, så är den här kursen designad för dig.<br></br>

                    Varför välja denna kurs?<br></br>
                    ✔️ Praktiska färdigheter från dag ett-Börja bygga projekt som är användbara och spännande.<br></br>
                    ✔️ Guidning av experter-Lär dig av erfarna instruktörer som brinner för att hjälpa dig lyckas.<br></br>
                    ✔️ Jobbmarknadens favorit-Programmering är en toppkompetens som ger dig oändliga möjligheter.<br></br>
                    ✔️ Flexibelt och lätt att följa-Du lär dig i din egen takt, oavsett förkunskaper.<br></br>

                    Klicka på "Köp" och gör ett val som din framtida du kommer att tacka dig för.</pre>


                <div className='icon-style'>
                    <Link to="/Köp">
                        <button className="Köp-icon" >Köp</button>
                    </Link>
               
                </div>


            </div>


            <h2>Rekomenderade Kurser</h2>
            <div className='course-conatiner'>


                <div className="recommended-course">

                    <div className="course-card">
                        <Link to="/elkonstruktör">
                            <img src="/images/Elkonstruktör.jpg" alt="Elkonstruktör" />
                        </Link>
                        <h3>Elkonstruktör</h3>
                        <p> Vill du lära dig El system?<br></br><br></br>
                            Här har du chansen att lära dig det från grunden.
                        </p>
                        <div className="details">
                            <p>12 Lektioner</p>
                            <p>ElKonstuktör</p>
                            <p>Distans</p>
                        </div>
                    </div>
                </div>
                <div className="recommended-course">

                    <div className="course-card">
                        <Link to="/barnomsorg">
                            <img src="/images/Barnomsorg.jpg" alt="Barnomsorg" />
                        </Link>
                        <h3>Barnomsorg</h3>
                        <p> Vill du lära dig om hur barn fungerar i skolan?<br></br>
                            Här har du chansen att lära dig det från grund!</p>
                        <div className="details">
                            <p>27 Lektioner</p>
                            <p>Barnomsorg</p>
                            <p>Distans</p>
                        </div>
                    </div>
                </div>


                <div className="recommended-course">

                    <div className="course-card">
                        <Link to="/pedagogik">
                            <img src="/images/Pedagogik.jpg" alt="Barnomsorg" />
                        </Link>
                        <h3>Pedagogik</h3>
                        <p>Pedagogik Vill du lära dig pedagogik?<br></br>
                            Här har du chansen att lära dig det från grund</p><br></br>
                        <div className="details">
                            <p>14 Lektioner</p>
                            <p>pedagogik</p>
                            <p>Distans</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Programmering



