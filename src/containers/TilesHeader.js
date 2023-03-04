import anime from 'animejs/lib/anime.es.js';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { IoLogoLinkedin, IoLogoYoutube, IoSquareSharp } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5"


const TilesHeader = () => {
    
    let [columns, setColumns] = useState(Math.floor(document.body.clientWidth / 50));
    let [rows, setRows] = useState(Math.floor(document.body.clientHeight / 50));
    let [pageState, setPageState] = useState("");

    window.onresize = () => {
        if (document.body.clientWidth <= 560) {
            setColumns(Math.floor(document.body.clientWidth / 30));
            setRows(Math.floor(document.body.clientHeight / 30))
        } else {
            setColumns(Math.floor(document.body.clientWidth / 50));
            setRows(Math.floor(document.body.clientHeight / 50))
        }
    }
    window.onload = () => {
        if (document.body.clientWidth <= 560) {
            setColumns(Math.floor(document.body.clientWidth / 30));
            setRows(Math.floor(document.body.clientHeight / 30))
        } else {
            setColumns(Math.floor(document.body.clientWidth / 50));
            setRows(Math.floor(document.body.clientHeight / 50))
        }
    }

    const handlePageChange = newState => {
        const timeout = setTimeout(() => setPageState(newState), 500);
    }
    
    const handleOnClick = index => {
        console.log(index);

        if (index === columns * 4 + 1  || index === columns * 6 + 1 || index === columns * 8 + 1) {
            anime({
                targets: ".tile",
                scale: [{value: 1, duration: 0}],
                delay: anime.stagger(0, {
                    grid: [columns, rows],
                    from: index
                })
            })
            anime({
                targets: ".tile",
                scale: [{value: 0.5, duration: 500},
                {value: 1, duration: 500}],
                delay: anime.stagger(50, {
                    grid: [columns, rows],
                    from: index
                })
            })
        } else {
            // anime({
            //     targets: ".tile",
            //     scale: [{value: 1, duration: 0}],
            //     delay: anime.stagger(0, {
            //         grid: [columns, rows],
            //         from: index
            //     })
            // })
            anime({
                targets: ".tile",
                scale: [{value: 0.92, duration: 300},
                {value: 1, duration: 500}],
                delay: anime.stagger(50, {
                    grid: [columns, rows],
                    from: index
                })
            })
        }
    }

    return ( 
        <div 
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gridTemplateRows: `repeat(${rows}, 1fr)`,
                animation: `background-pan 5s linear infinite`,
                background: `linear-gradient(
                    -70deg,
                    ${pageState === "" ? "var(--g1)" : pageState === "about" ? "var(--g3)" : pageState === "projects" ? "var(--g5)" : pageState === "contact" ? "var(--g7)" : "var(--g1)"},
                    ${pageState === "" ? "var(--g2)" : pageState === "about" ? "var(--g4)" : pageState === "projects" ? "var(--g6)" : pageState === "contact" ? "var(--g8)" : "var(--g1)"}
                )`,
                backgroundSize: `400%`
            }}
            className={`tiles h-[100vh] w-[100vw]`}>
            {Array.from(Array(columns * rows)).map((tile, index) => {
                return <div className={`tile group
                    before:bg-[rgb(20,20,20,0.8)] before:inset-[0.5px]`} 
                    
                    
                    onClick={(e) => 
                    
                    index === columns * 3 + 1 ? handleOnClick(index) : handleOnClick(index)
                
                }s>
                    {index === columns * 4 + 1 ? <p onClick={() => handlePageChange("about")} className='absolute text-white font-["Orbitron"] text-xl md:text-3xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:scale-150 transition-transform duration-150'><IoSquareSharp/></p> : ""}
                    {index === columns * 6 + 1 ? <p onClick={() => handlePageChange("projects")} className='absolute text-white font-["Orbitron"] text-xl md:text-3xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:scale-150 transition-transform duration-150'><IoSquareSharp/></p> : ""}
                    {index === columns * 8 + 1 ? <p onClick={() => handlePageChange("contact")} className='absolute text-white font-["Orbitron"] text-xl md:text-3xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:scale-150 transition-transform duration-150'><IoSquareSharp/></p> : ""}
                    
                    {index === columns + 1 ? <p onClick={() => handlePageChange("")}  className='absolute text-white font-["Orbitron"] font-[900] text-lg md:text-3xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>B</p> : 
                    index === columns + 2 ? <p onClick={() => handlePageChange("")}  className='absolute text-white font-["Orbitron"] font-[900]  text-lg md:text-3xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>a</p> :
                    index === columns + 3 ? <p onClick={() => handlePageChange("")} className='absolute text-white font-["Orbitron"] font-[900] text-lg md:text-3xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>v</p> :
                    index === columns * 2 + 1 ? <p onClick={() => handlePageChange("")} className='absolute text-white font-["Orbitron"] font-[900] text-lg md:text-3xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>N</p> :
                    index === columns * 2 + 2 ? <p onClick={() => handlePageChange("")} className='absolute text-white font-["Orbitron"] font-[900] text-lg md:text-3xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>a</p> :
                    index === columns * 2 + 3 ? <p onClick={() => handlePageChange("")} className='absolute text-white font-["Orbitron"] font-[900] text-lg md:text-3xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>g</p> :
                    index === columns * 2 + 4 ? <p onClick={() => handlePageChange("")} className='absolute text-white font-["Orbitron"] font-[900] text-lg md:text-3xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>a</p> :
                    index === columns * 2 + 5 ? <p onClick={() => handlePageChange("")} className='absolute text-white font-["Orbitron"] font-[900] text-lg md:text-3xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>r</p> :
                    index === columns * 2 + 6 ? <p onClick={() => handlePageChange("")} className='absolute text-white font-["Orbitron"] font-[900] text-lg md:text-3xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>a</p> :
                    index === columns * 2 + 7 ? <p onClick={() => handlePageChange("")} className='absolute text-white font-["Orbitron"] font-[900] text-lg md:text-3xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>j</p> :
                    index === columns * 2 + 8 ? <p onClick={() => handlePageChange("")} className='absolute text-white font-["Orbitron"] font-[900] text-lg md:text-3xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>a</p> :
                    index === columns * 2 + 9 ? <p onClick={() => handlePageChange("")} className='absolute text-white font-["Orbitron"] font-[900] text-lg md:text-3xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>h</p> : ""
                    }

                    {index === columns * (rows - 2) + 1 ? <p className='absolute text-white font-["Orbitron"] text-xl md:text-3xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:scale-150 transition-transform duration-150'><IoLogoGithub/></p> : ""}
                    {index === columns *  (rows - 2) + 3 ? <p className='absolute text-white font-["Orbitron"] text-xl md:text-3xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:scale-150 transition-transform duration-150'><IoLogoYoutube/></p> : ""}
                    {index === columns *  (rows - 2) + 5 ? <p className='absolute text-white font-["Orbitron"] text-xl md:text-3xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:scale-150 transition-transform duration-150'><IoLogoLinkedin/></p> : ""}

                    {index === columns * 6 + 2 ? <p className='absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>P</p> : 
                    index === columns * 6 + 3 ? <p className='absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>R</p> :
                    index === columns * 6 + 4 ? <p className='absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>O</p> :
                    index === columns * 6 + 5 ? <p className='absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>J</p> :
                    index === columns * 6 + 6 ? <p className='absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>E</p> :
                    index === columns * 6 + 7 ? <p className='absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>C</p> :
                    index === columns * 6 + 8 ? <p className='absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>T</p> :
                    index === columns * 6 + 9 ? <p className='absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>S</p> : ""
                    }

                    {index === columns * 4 + 2 ? <p className='absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>A</p> : 
                    index === columns * 4 + 3 ? <p className='absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>B</p> :
                    index === columns * 4 + 4 ? <p className='absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>O</p> :
                    index === columns * 4 + 5 ? <p className='absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>U</p> :
                    index === columns * 4 + 6 ? <p className='absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>T</p> : ""
                    }   

                    {index === columns * 8 + 2 ? <p className='absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>C</p> : 
                    index === columns * 8 + 3 ? <p className='absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>O</p> :
                    index === columns * 8 + 4 ? <p className='absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>N</p> :
                    index === columns * 8 + 5 ? <p className='absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>T</p> :
                    index === columns * 8 + 6 ? <p className='absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>A</p> :
                    index === columns * 8 + 7 ? <p className='absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>C</p> :
                    index === columns * 8 + 8 ? <p className='absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>T</p> : ""
                    }

                </div>;
            })}
        </div>
    );
}
 
export default TilesHeader;