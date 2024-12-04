import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar'
import '../../assets/Stylesheet_css/barnomsorg.css';

const Barnomsorg = () => {
    return (
        <div>

            <div className='barnomsorg-container'>
                <img src='/images/Barnomsorg.jpg' alt='Barnomsorg' className='barnomsorg-bild'></img>
            </div>

            <div className='barnomsorg-info'>

                <pre>Ta steget in i framtiden! Bli en expert inom Barnomsorg Idag!<br></br>
                    Vill du göra en verklig skillnad i barns liv? Drömmer du om att arbeta med och stödja nästa <br></br>
                    generation i deras utveckling? Nu har du chansen att ta kontroll över din framtid och lära dig de<br></br>
                    färdigheter som behövs för en meningsfull och eftertraktad karriär inom barnomsorg.

                    Den här kursen är inte bara en introduktion till barnomsorg det är din väg till att bli en trygg,<br></br>
                    kunnig och inspirerande vårdnadshavare. Oavsett om du siktar på en ny karriär, vill förbättra dina<br></br>
                    nuvarande färdigheter eller helt enkelt fördjupa din förståelse för barns utveckling, är denna kurs designad för dig.<br></br><br></br>

                    Varför välja denna kurs?<br></br>
                    ✔️ Praktiska färdigheter från dag att Lär dig metoder och verktyg som du direkt kan använda i ditt arbete.<br></br>
                    ✔️ Guidning av experter Få undervisning av erfarna instruktörer som brinner för barns utveckling och lärande.<br></br>
                    ✔️ Jobbmarknadens favorit Barnomsorg är en stabil och givande karriär med många möjligheter.<br></br>
                    ✔️ Flexibelt och lätt att följa Lär dig i din egen takt, oavsett tidigare erfarenhet.<br></br><br></br>

                    Klicka på "Köp" och ta det första steget mot en givande framtid inom barnomsorg!</pre>

                <div className='icon-style'>
                    <Link to="/kundvagn">
                        <img src="/images/Kundvagn_icon.jpg" alt="Cart" className="nav-icon" />
                    </Link>
                    <Link to="/Köp">
                        <button className="Köp-icon" >Köp</button>
                    </Link>
                    <Link to="/like">
                        <img src="/images/Like-icon.jpg" alt="Like" className="nav-icon" />
                    </Link>
                </div>


            </div>


            <h2>Rekomenderade Kurser</h2>
            <div className='course-conatiner'>


                <div className="recommended-course">

                    <div className="course-card">
                        <Link to="elkonstruktör">
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
                        <Link to="programmering">
                            <img src="/images/Programmering.png" alt="programering" />
                        </Link>
                        <h3>Programmering</h3>
                        <p> Vill du lära dig om hur du bygger webbsidor<br></br><br></br>
                            Här har du chansen att lära dig det från grund!</p>
                        <div className="details">
                            <p>27 Lektioner</p>
                            <p>Programmering</p>
                            <p>Distans</p>
                        </div>
                    </div>
                </div>


                <div className="recommended-course">

                    <div className="course-card">
                        <Link to="pedagogik">
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

export default Barnomsorg



