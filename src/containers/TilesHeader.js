import anime from 'animejs/lib/anime.es.js';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { IoLogoLinkedin, IoLogoYoutube, IoLogoGithub, IoSquareSharp } from "react-icons/io5";
import { SiReact, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiNextdotjs, SiMui, SiSpring, SiPostgresql } from "react-icons/si"
import { FaHome, FaJava } from "react-icons/fa"
import { easings } from 'animejs';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom'

const CyberTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: 'var(--g3)',
      
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: 'rgb(20,20,20,1)',
      border: '1px solid var(--g3)',
      fontSize: '1rem',
      backdropBlur: '4px',
      fontFamily: '"Rajdhani"',
      borderRadius: '0px',
      animation: 'bobbing 1s ease-out infinite',
    },
  }));

const TilesHeader = () => {
    
    let [columns, setColumns] = useState(Math.floor(document.body.clientWidth / 50));
    let [rows, setRows] = useState(Math.floor(document.body.clientHeight / 50));
    let [pageState, setPageState] = useState("");
    let [loadState, setLoadState] = useState(false);
    let [textVanish, setTextVanish] = useState(false);
    let [splashState, setSplashState] = useState(true);
    let [sizeMultiplier, setSizeMultiplier] = useState(null);

    window.onresize = () => {
        if (document.body.clientWidth <= 560) {
            setColumns(Math.floor(document.body.clientWidth / 30));
            setRows(Math.floor(document.body.clientHeight / 30))
            setSizeMultiplier(30);
            document.querySelector(':root').style.setProperty('--size', 30);
        } else {
            setColumns(Math.floor(document.body.clientWidth / 50));
            setRows(Math.floor(document.body.clientHeight / 50))
            setSizeMultiplier(50);
            document.querySelector(':root').style.setProperty('--size', 50);

        }
    }
    window.onload = () => {
        let multiplier;
        if (document.body.clientWidth <= 560) {
            setColumns(Math.floor(document.body.clientWidth / 30));
            setRows(Math.floor(document.body.clientHeight / 30))
            setSizeMultiplier(30);
            multiplier = 30;
            document.querySelector(':root').style.setProperty('--size', 30);

        } else {
            setColumns(Math.floor(document.body.clientWidth / 50));
            setRows(Math.floor(document.body.clientHeight / 50))
            setSizeMultiplier(50);
            multiplier = 50;
            document.querySelector(':root').style.setProperty('--size', 50);

        }
        if (splashState) {
            
            const splashtime = setTimeout(() => {
                const pulse = setTimeout(() => {
                    const index = columns * rows / 2
                    let i = 1
                    console.log(Math.floor(document.body.clientWidth/50))
                    console.log(Math.floor(document.body.clientHeight/50))
                    anime({
                        targets: ".tile",
                        scale: [{value: 0.9, duration: 50},
                        {value: 1, duration: 300}],
                        delay: anime.stagger(40*i, {
                            grid: [Math.floor(document.body.clientWidth/multiplier), Math.floor(document.body.clientHeight / multiplier)],
                            from: 'center'
                        }),
                        easing: 'easeInOutQuint'
                    })
                }, 1000)
    
                const pulse2 = setTimeout(() => {
                    const index = columns * rows / 2
                    console.log(columns)
                    console.log(rows)
                    anime({
                        targets: ".tile",
                        scale: [{value: 0.8, duration: 200},
                        {value: 1, duration: 400}],
                        delay: anime.stagger(40, {
                            grid: [Math.floor(document.body.clientWidth/multiplier), Math.floor(document.body.clientHeight / multiplier)],
                            from: 'center'
                        }),
                        easing: 'easeInOutQuint'
                    })
                }, 3000)
                // const pulse3 = setTimeout(() => {
                //     const index = columns * rows / 2
                //     anime({
                //         targets: ".tile",
                //         scale: [{value: 0.8, duration: 200},
                //         {value: 1, duration: 600}],
                //         delay: anime.stagger(30, {
                //             grid: [columns, rows],
                //             from: index
                //         }),
                //         easing: 'easeInOutSine'
                //     })
                // }, 4500)
    
                const splashExitTime = setTimeout(() => {
                    const index = columns * rows / 2
                    anime({
                        targets: ".tile",
                        scale: [{value: 0.5, duration: 400},
                        {value: 1, duration: 600}],
                        
                        delay: anime.stagger(40, {
                            grid: [Math.floor(document.body.clientWidth/multiplier), Math.floor(document.body.clientHeight / multiplier)],
                            from: 'center'
                        }),
                        easing: 'easeInOutQuint'
                    })
                    setSplashState(false)
                }, 5000);

            }, 500)

        }


    }

    // window.onload = () => {
    //     // anime({
    //     //     targets: ".tile",
    //     //     scale: [{value: 1.05, duration: 0}],
    //     //     delay: anime.stagger(0, {
    //     //         grid: [columns, rows],
    //     //         from: 'center'
    //     //     })
    //     // })
    // }

    const handlePageChange = (index, newState) => {
        
        
        anime({
            targets: ".tile",
            scale: [{value: 1, duration: 0}],
            delay: anime.stagger(0, {
                grid: [columns, rows],
                from: index
            }),
            easing: 'easeInOutSine'
        })
        setTextVanish(true);
        anime({
            targets: ".tile",
            scale: [{value: 0.5, duration: 500},
            {value: 1, duration: 500}],
            delay: anime.stagger(50, {
                grid: [columns, rows],
                from: index
            }),
            easing: 'easeInOutSine'
        })
        const timeoutload = setTimeout(() => 
        setLoadState(true), 1500)
        
        const timeoutGrid = setTimeout(() => anime({
            targets: ".tile",
            backgroundColor: [{value: `rgb(40,40,40)`, duration: 500}],
            delay: anime.stagger(50, {
                grid: [columns, rows],
                from: index
            }),
            easing: 'easeInOutSine'
        }), 500)
        
        if (document.body.clientWidth <= 560) {
            const timeout = setTimeout(() => setPageState(newState), 50*rows + 500 );
            const timeout1 = setTimeout(() => anime({
                targets: ".tile",
                backgroundColor: [{value: `rgb(0,0,0,0)`}],
                delay: anime.stagger(50, {
                    grid: [columns, rows],
                    from: index
                }),
                easing: 'easeInOutSine'
            }), 50 * rows + 1000)
            const timeout2 = setTimeout(() => {
                setLoadState(false)
                setTextVanish(false)
            }, 50*columns + 1500 );

        } else {
            const timeout = setTimeout(() => setPageState(newState), 50*columns + 500 );
            const timeout1 = setTimeout(() => anime({
                targets: ".tile",
                backgroundColor: [{value: `rgb(0,0,0,0)`}],
                delay: anime.stagger(50, {
                    grid: [columns, rows],
                    from: index
                }),
                easing: 'easeInOutSine'
            }), 50 * columns + 1000)
            const timeout2 = setTimeout(() => {
                setLoadState(false)
                setTextVanish(false)
            }, 50*columns + 1500 );
        }
        

    }
    
    const handleOnClick = index => {
        if (!splashState && !loadState) {
            anime({
                targets: ".scatter",
                scale: [{value: 0.92, duration: 300},
                {value: 1, duration: 500}],
                delay: anime.stagger(50, {
                    grid: [columns, rows],
                    from: index
                }),
                easing: 'easeInOutSine'
            })
        }
        
    }

    const selectAction = index => {
        if (index >= columns + 1 && index <= columns + 3) handlePageChange(index, "")
        if (index >= columns * 2 + 1 && index <= columns * 2 + 9) handlePageChange(index, "")
        if (pageState === "") { 
                index >= columns + 1 && index <= columns + 3 ? handlePageChange(index, "") :
                index >= columns * 2 + 1 && index <= columns * 2 + 9 ? handlePageChange(index, "") :
                index === columns * 4 + 1 ? handlePageChange(index, "about") :
                index === columns * 6 + 1 ? handlePageChange(index, "projects") :
                index === columns * 8 + 1 ? handlePageChange(index, "contact") : 
                handleOnClick(index)
        }
        else if (pageState === "about") { 
            index >= columns + 1 && index <= columns + 3 ? handlePageChange(index, "") :
            index >= columns * 2 + 1 && index <= columns * 2 + 9 ? handlePageChange(index, "") :
            index === columns * (rows - 2) + 1 ? handlePageChange(index, "") :
            handleOnClick(index)
        }
        else if (pageState === "projects") { 
            index >= columns + 1 && index <= columns + 3 ? handlePageChange(index, "") :
            index >= columns * 2 + 1 && index <= columns * 2 + 9 ? handlePageChange(index, "") :
            index === columns * (rows - 2) + 1 ? handlePageChange(index, "") :
            handleOnClick(index)
        }
        else if (pageState === "contact") { 
            index >= columns + 1 && index <= columns + 3 ? handlePageChange(index, "") :
            index >= columns * 2 + 1 && index <= columns * 2 + 9 ? handlePageChange(index, "") :
            index === columns * (rows - 2) + 1 ? handlePageChange(index, "") :
            handleOnClick(index)
        }
        else {

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
                //backgroundColor: `${pageState === "" ? "var(--g1)" : pageState === "about" ? "var(--g3)" : pageState === "projects" ? "var(--g5)" : pageState === "contact" ? "var(--g7)" : "var(--g1)"}`,
                
                backgroundSize: `${pageState === "" ? "400%" : pageState === "about" ? "402%" : pageState === "projects" ? "403%" : pageState === "contact" ? "404%" : "405%"}`

            }}
            className={`tiles h-[100vh] w-[100vw]`}>
            {Array.from(Array(columns * rows)).map((tile, index) => {
                return <div className={`tile group
                    ${pageState === "about" && (document.body.clientWidth <= 560 && (index === columns * 4 + 1 ||  index === columns * (3 + Math.ceil((rows - 4) / 2)) + 1)) || document.body.clientWidth > 560 && (index === columns * 4 + 1 ||  index === columns * 4 + (Math.ceil((columns - 2)/2 + 1))) ? "z-[10]" : "z-[0] scatter"}
                    ${splashState ? "before:inset-[0px] border-[rgb(40,40,40)] before:bg-[rgb(20,20,20,0.99)]" : "before:inset-[0.5px] before:bg-[rgb(20,20,20,0.8)] z-[0]"}`} 
                    onClick={(e) => selectAction(index)}
                >
                    {!splashState ? index === columns + 1 ? <p className='absolute delay-100ms text-white font-["Orbitron"] font-[900] text-lg md:text-3xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>B</p> : 
                    index === columns + 2 ? <p className='absolute delay-200ms text-white font-["Orbitron"] font-[900]  text-lg md:text-3xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>a</p> :
                    index === columns + 3 ? <p className='absolute delay-300ms text-white font-["Orbitron"] font-[900] text-lg md:text-3xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>v</p> :
                    index === columns * 2 + 1 ? <p className='absolute delay-100ms text-white font-["Orbitron"] font-[900] text-lg md:text-3xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>N</p> :
                    index === columns * 2 + 2 ? <p className='absolute delay-200ms text-white font-["Orbitron"] font-[900] text-lg md:text-3xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>a</p> :
                    index === columns * 2 + 3 ? <p className='absolute delay-300ms text-white font-["Orbitron"] font-[900] text-lg md:text-3xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>g</p> :
                    index === columns * 2 + 4 ? <p className='absolute delay-400ms text-white font-["Orbitron"] font-[900] text-lg md:text-3xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>a</p> :
                    index === columns * 2 + 5 ? <p className='absolute delay-500ms text-white font-["Orbitron"] font-[900] text-lg md:text-3xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>r</p> :
                    index === columns * 2 + 6 ? <p className='absolute delay-600ms text-white font-["Orbitron"] font-[900] text-lg md:text-3xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>a</p> :
                    index === columns * 2 + 7 ? <p className='absolute delay-700ms text-white font-["Orbitron"] font-[900] text-lg md:text-3xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>j</p> :
                    index === columns * 2 + 8 ? <p className='absolute delay-800ms text-white font-["Orbitron"] font-[900] text-lg md:text-3xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>a</p> :
                    index === columns * 2 + 9 ? <p className='absolute delay-900ms text-white font-["Orbitron"] font-[900] text-lg md:text-3xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>h</p> : "" : ""}

                    {!splashState ? index === columns * 2 - 4 ? <a href="https://github.com/bav-07/" target="_blank" rel='noopener noreferrer' className='absolute delay-100ms text-white font-["Orbitron"] text-xl md:text-3xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:scale-[130%] group-hover:translate-x-[-65%] group-hover:translate-y-[-65%] transition-transform duration-150'><IoLogoGithub/></a> : "" : ""}
                    {!splashState ? index === columns * 2 - 3 ? <a href="https://www.youtube.com/channel/UCQsk11dH4y_M4MzabLx6lNg" target="_blank" rel='noopener noreferrer' className='absolute delay-200ms text-white font-["Orbitron"] text-xl md:text-3xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:scale-[130%] group-hover:translate-x-[-65%] group-hover:translate-y-[-65%] transition-transform duration-150'><IoLogoYoutube/></a> : "" : ""}
                    {!splashState ? index === columns * 2 - 2 ? <a href="https://www.linkedin.com/in/bavaharsan-nagarajah-7418a2196/" target="_blank" rel='noopener noreferrer' className='absolute delay-300ms text-white font-["Orbitron"] text-xl md:text-3xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:scale-[130%] group-hover:translate-x-[-65%] group-hover:translate-y-[-65%] transition-transform duration-150'><IoLogoLinkedin/></a> : "" : ""}

                    
                    {!splashState ? pageState === "" && loadState === false && index === columns * 4 + 1 ? <p className={`${textVanish ? 'fontDisappear-500ms' : "delay-0ms"} absolute text-white font-["Orbitron"] text-xl md:text-3xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:scale-150 group-hover:translate-x-[-75%] group-hover:translate-y-[-75%] transition-transform origin-center duration-150`}><IoSquareSharp/></p> : "" : ""}
                    {!splashState ? pageState === "" && loadState === false && index === columns * 6 + 1 ? <p className={`${textVanish ? 'fontDisappear-500ms' : "delay-0ms"} absolute text-white font-["Orbitron"] text-xl md:text-3xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:scale-150 group-hover:translate-x-[-75%] group-hover:translate-y-[-75%] transition-transform origin-center duration-150`}><IoSquareSharp/></p> : "" : ""}
                    {!splashState ? pageState === "" && loadState === false && index === columns * 8 + 1 ? <p className={`${textVanish ? 'fontDisappear-500ms' : "delay-0ms"} absolute text-white font-["Orbitron"] text-xl md:text-3xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:scale-150 group-hover:translate-x-[-75%] group-hover:translate-y-[-75%] transition-transform origin-center duration-150`}><IoSquareSharp/></p> : "" : ""}
                    
                    {/* HOME */}
                        {!splashState ? pageState === "" && loadState === false ? index === columns * 6 + 2 ? <p className={`${textVanish ? 'animateDisappear-500ms' : "delay-0ms"} absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}>P</p> : 
                        index === columns * 6 + 3 ? <p className={`${textVanish ? 'animateDisappear-500ms' : "delay-100ms"} absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}>R</p> :
                        index === columns * 6 + 4 ? <p className={`${textVanish ? 'animateDisappear-500ms' : "delay-200ms"} absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}>O</p> :
                        index === columns * 6 + 5 ? <p className={`${textVanish ? 'animateDisappear-500ms' : "delay-300ms"} absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}>J</p> :
                        index === columns * 6 + 6 ? <p className={`${textVanish ? 'animateDisappear-500ms' : "delay-400ms"} absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}>E</p> :
                        index === columns * 6 + 7 ? <p className={`${textVanish ? 'animateDisappear-500ms' : "delay-500ms"} absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}>C</p> :
                        index === columns * 6 + 8 ? <p className={`${textVanish ? 'animateDisappear-500ms' : "delay-600ms"} absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}>T</p> :
                        index === columns * 6 + 9 ? <p className={`${textVanish ? 'animateDisappear-500ms' : "delay-700ms"} absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}>S</p> : "" : "" : ""
                        }

                        {!splashState ? pageState === "" && loadState === false ? 
                        index === columns * 4 + 2 ? <p className={`${textVanish ? 'animateDisappear-500ms' : "delay-0ms"} absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}>A</p> : 
                        index === columns * 4 + 3 ? <p className={`${textVanish ? 'animateDisappear-500ms' : "delay-100ms"} absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}>B</p> :
                        index === columns * 4 + 4 ? <p className={`${textVanish ? 'animateDisappear-500ms' : "delay-200ms"} absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}>O</p> :
                        index === columns * 4 + 5 ? <p className={`${textVanish ? 'animateDisappear-500ms' : "delay-300ms"} absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}>U</p> :
                        index === columns * 4 + 6 ? <p className={`${textVanish ? 'animateDisappear-500ms' : "delay-400ms"} absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}>T</p> : "" : "" : ""
                        }   

                        {!splashState ? pageState === "" && loadState === false ? index === columns * 8 + 2 ? <p className={`${textVanish ? 'animateDisappear-500ms' : "delay-0ms"} absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}>C</p> : 
                        index === columns * 8 + 3 ? <p className={`${textVanish ? 'animateDisappear-500ms' : "delay-100ms"} absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}>O</p> :
                        index === columns * 8 + 4 ? <p className={`${textVanish ? 'animateDisappear-500ms' : "delay-200ms"} absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}>N</p> :
                        index === columns * 8 + 5 ? <p className={`${textVanish ? 'animateDisappear-500ms' : "delay-300ms"} absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}>T</p> :
                        index === columns * 8 + 6 ? <p className={`${textVanish ? 'animateDisappear-500ms' : "delay-400ms"} absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}>A</p> :
                        index === columns * 8 + 7 ? <p className={`${textVanish ? 'animateDisappear-500ms' : "delay-500ms"} absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}>C</p> :
                        index === columns * 8 + 8 ? <p className={`${textVanish ? 'animateDisappear-500ms' : "delay-600ms"} absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}>T</p> : "" : "" : ""
                        }

                    {/* ABOUT */}
                    {!splashState && pageState === "about" && loadState === false && index === columns * 4 + 1 ? 
                    
                    <div 
                        style={{
                            width:`${document.body.clientWidth >= 560 ? (Math.ceil((columns - 2) / 2) - 1) * (document.body.clientWidth / columns) : document.body.clientWidth - (document.body.clientWidth / columns) * 2 - 2}px`,
                            height:`${document.body.clientWidth >= 560 ? (document.body.clientHeight / rows) * ((rows-4) - 3) : (document.body.clientHeight / rows) * ((rows-4)/2 - 2)}px`,
                            overflowY: 'scroll'
                        }}
                        className={`${textVanish ? 'about-animateDisappear-0ms' : "about-delay-0ms"} aboutbox text-white font-["Orbitron"]  tracking-normal md:tracking-[8px] text-sm md:text-md opacity-100 top-[50%] left-[0%] bg-[rgb(20,20,20,0.8)] pl-[18px] border-[var(--g3)] border-[1px] rounded-sm ${document.body.clientWidth <= 560 ? `translate-y-[-16px]` : `translate-y-[-26px]`} p-5 absolute overflow-visible`}
                    >
                        <p className={`uppercase font-['Rajdhani'] tracking-wider text-xl md:text-2xl font-black pb-2`}>&lt; Full-stack Developer /&gt;</p> 
                        {/* <p className={`lowercase text-[10px]`}>&lt;div&gt;</p> */}
                        <p className={`text-lg md:text-xl font-['Rajdhani'] tracking-normal block pb-4`}>     Software engineer with experience in both <span className='text-[var(--g3)]'>back-end</span> and <span className='text-[var(--g3)]'>front-end</span> development. Aspiring to create software that has a significant impact on society. </p> 
                        {/* <p className={`text-lg md:text-xl font-['Rajdhani'] tracking-normal block `}>      */}
                        {/* </p>  */}
                        {/* <p className={`lowercase text-[10px]`}>&lt;/div&gt;</p> */}
                        <p className={`uppercase font-['Rajdhani'] tracking-wider text-xl md:text-2xl font-black pb-2`}>&lt; Tech-Stack /&gt;</p> 
                        {/* <p className={`lowercase text-[10px]`}>&lt;div&gt;</p> */}
                        <p className={`text-lg flex gap-3 items-start md:text-xl font-['Rajdhani'] tracking-normal pb-2`}>   
                            <span className='text-[var(--g3)] whitespace-nowrap leading-5'>Front-end:</span>
                            <CyberTooltip enterTouchDelay={0} TransitionComponent={Zoom} placement="top" title="React"><p><SiReact/></p></CyberTooltip>
                            <CyberTooltip enterTouchDelay={0} TransitionComponent={Zoom} placement="top" title="JavaScript"><p><SiJavascript/></p></CyberTooltip>
                            <CyberTooltip enterTouchDelay={0} TransitionComponent={Zoom} placement="top" title="HTML5"><p><SiHtml5/></p></CyberTooltip>
                            <CyberTooltip enterTouchDelay={0} TransitionComponent={Zoom} placement="top" title="CSS3"><p><SiCss3/></p></CyberTooltip>
                            <CyberTooltip enterTouchDelay={0} TransitionComponent={Zoom} placement="top" title="TailwindCSS"><p><SiTailwindcss/></p></CyberTooltip>
                            <CyberTooltip enterTouchDelay={0} TransitionComponent={Zoom} placement="top" title="Material UI"><p><SiMui/></p></CyberTooltip>
                            <CyberTooltip enterTouchDelay={0} TransitionComponent={Zoom} placement="top" title="Next.js"><p><SiNextdotjs/></p></CyberTooltip>
                        </p> 
                        <p className={`text-lg flex gap-3 items-start md:text-xl font-['Rajdhani'] tracking-normal pb-2`}>   
                            <span className='text-[var(--g3)] leading-5'>Back-end: </span>
                            <CyberTooltip enterTouchDelay={0} TransitionComponent={Zoom} placement="bottom" title="Java"><p><FaJava/></p></CyberTooltip>
                            <CyberTooltip enterTouchDelay={0} TransitionComponent={Zoom} placement="bottom" title="Spring"><p><SiSpring/></p></CyberTooltip>
                            <CyberTooltip enterTouchDelay={0} TransitionComponent={Zoom} placement="bottom" title="PostgreSQL"><p><SiPostgresql/></p></CyberTooltip>
                        </p> 
                        
                    </div>
                    
                    
                    : ""} 

                    {!splashState && pageState === "about" && loadState === false && ((index === columns * (3 + Math.ceil((rows - 4) / 2)) + 1 && document.body.clientWidth <= 560) || (index === columns * 4 + (Math.ceil((columns-2)/2 + 1)) && document.body.clientWidth > 560))  ? 
                    
                    <div 
                        style={{
                            width:`${document.body.clientWidth >= 560 ? (Math.floor((columns - 2) / 2)) * (document.body.clientWidth / columns) : document.body.clientWidth - (document.body.clientWidth / columns) * 2 - 2}px`,
                            height:`${document.body.clientWidth >= 560 ? (document.body.clientHeight / rows) * ((rows-4) - 3)  : (document.body.clientHeight / rows) * Math.floor((rows-4)/2 - 2)}px`,
                            overflowY: 'scroll'
                        }}
                        className={`${textVanish ? 'about-animateDisappear-0ms' : "about-delay-0ms"} aboutbox text-white font-["Rajdhani"]  tracking-normal text-sm md:text-md opacity-100 top-[50%] left-[0%] bg-[rgb(20,20,20,0.8)] pl-[18px] border-[var(--g3)] border-[1px] rounded-sm ${document.body.clientWidth <= 560 ? `translate-y-[-16px]` : `translate-y-[-26px]`} p-5 absolute overflow-visible`}
                    >
                        <p className={`uppercase font-['Rajdhani'] tracking-wider text-xl md:text-2xl font-black pb-4`}>&lt; Timeline /&gt;</p>                         
                        <ul className='flex flex-col gap-5'>
                            <div className='grid grid-cols-[4fr_1.5fr_4fr] md:grid-cols-[4fr_60px_8fr]'>
                                <div className='text-end'>
                                    <p className={`uppercase font-['Rajdhani'] tracking-wider text-md md:text-lg md:leading-[-20px] font-[500] -pb-2`}>Software Engineering Associate</p>                         
                                    <p className={` font-['Rajdhani'] tracking-wider text-md md:text-lg md:leading-[-20px] font-[400] text-[var(--g3)]`}>@ Lloyds Banking Group</p>                         
                                    <p className={`uppercase font-['Rajdhani'] tracking-wider text-md md:text-lg md:leading-[-20px] font-[400] pb-2 text-gray-300`}>Mar 2023 - Present</p>                         
                                </div>
                                <div>
                                    <div className='timelineComp mx-auto my-auto bg-gradient-to-tl from-[var(--g3)] to-[var(--g4)] w-[15px] md:w-[25px] h-[15px] md:h-[25px] rounded-full content-none'></div>
                                    <div className='mx-auto my-auto -mt-1 bg-gradient-to-b from-[var(--g3)] via-[#00000000] w-[1px] md:w-[2px] h-full '></div>
                                </div>
                                <div>
                                    <ul className='tracking-normal'>
                                        <li className='timelineListItem'>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='grid grid-cols-[4fr_1.5fr_4fr] md:grid-cols-[4fr_60px_8fr]'>
                                <div className='text-end'>
                                    <p className={`uppercase font-['Rajdhani'] tracking-wider text-md md:text-lg md:leading-[-20px] font-[500] -pb-2`}>Trainee Software Engineer</p>                         
                                    <p className={` font-['Rajdhani'] tracking-wider text-md md:text-lg md:leading-[-20px] font-[400] text-[var(--g3)]`}>@ Bright Network Technology Academy</p>                         
                                    <p className={`uppercase font-['Rajdhani'] tracking-wider text-md md:text-lg md:leading-[-20px] font-[400] pb-2 text-gray-300`}>Nov 2022 - Feb 2023</p>                         
                                </div>
                                <div>
                                    <div className='timelineComp mx-auto my-auto bg-gradient-to-tl from-[var(--g3)] to-[var(--g4)] w-[15px] md:w-[25px] h-[15px] md:h-[25px] rounded-full content-none'></div>
                                    <div className='mx-auto my-auto -mt-1 bg-gradient-to-b from-[var(--g3)] via-[#00000000] w-[1px] md:w-[2px] h-full '></div>

                                </div>
                                <div>
                                    <ul className='ml-3 text-sm md:text-md flex flex-col gap-3'>
                                        <li className='timelineListItem list-disc text-sm md:text-lg'>
                                            Underwent 12-weeks of intensive training for back-end and front-end development. Learned core programming principles.
                                        </li>
                                        <li className='timelineListItem list-disc text-sm md:text-lg'>
                                            Used Agile methodologies and test-driven development (TDD).
                                        </li>
                                        <li className='timelineListItem list-disc text-sm md:text-lg'>
                                            Developed full-stack capstone project - a browser-based Pok&eacute;mon card-battle game.
                                        </li>
                                        <li className='timelineListItem list-disc text-sm md:text-lg'>
                                            Developed a front-end movie review website using a pre-existing API, allowing users to login/sign-up and leave star-rating reviews on movies.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='grid grid-cols-[4fr_1.5fr_4fr] md:grid-cols-[4fr_60px_8fr]'>
                                <div className='text-end'>
                                    <p className={`uppercase font-['Rajdhani'] tracking-wider text-md md:text-lg md:leading-[-20px] font-[500] -pb-2`}>Masters' in Mechanical Engineering</p>                         
                                    <p className={` font-['Rajdhani'] tracking-wider text-md md:text-lg md:leading-[-20px] font-[400] text-[var(--g3)]`}>@ Imperial College London</p>                         
                                    <p className={`uppercase font-['Rajdhani'] tracking-wider text-md md:text-lg md:leading-[-20px] font-[400] pb-2 text-gray-300`}>Oct 2018 - July 2022</p>                         
                                </div>
                                <div>
                                    <div className='timelineComp mx-auto my-auto bg-gradient-to-tl from-[var(--g3)] to-[var(--g4)] w-[15px] md:w-[25px] h-[15px] md:h-[25px] rounded-full content-none'></div>
                                    <div className='mx-auto my-auto -mt-1 bg-gradient-to-b from-[var(--g3)] via-[#00000000] w-[1px] md:w-[2px] h-full '></div>

                                </div>
                                <div>
                                    <ul className='ml-3 text-sm md:text-md flex flex-col gap-3'>
                                        <li className='timelineListItem list-disc text-sm md:text-lg'>
                                            Developed an interactive web-app for visualising 2-degree-of-freedom oscillatory systems, allowing user input and graphically displaying system responses.
                                        </li>
                                        <li className='timelineListItem list-disc text-sm md:text-lg'>
                                            Used Embedded C with a microcontroller to develop an electronic vehicle with collision-avoidance, via colour detection and turning at specific angles.
                                        </li>                                       
                                    </ul>
                                </div>
                            </div>
                            

                        </ul>
                    </div>
                    
                    
                    : ""} 

                    {/* PROJECTS */}


                    {/* CONTACT */}

                    {!splashState && (pageState === "about" || pageState === "projects" || pageState === "contact") && loadState === false ?
                    
                        index === columns * (rows - 2) + 1 ? <p  className={`${textVanish ? 'fontDisappear-500ms' : "delay-500ms"} absolute text-white font-["Orbitron"] text-xl md:text-3xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:scale-[130%] group-hover:translate-x-[-65%] group-hover:translate-y-[-65%] transition-transform origin-center duration-150`}><FaHome/></p> :
                        index === columns * (rows - 2) + 2 ? <p className={`${textVanish ? 'animateDisappear-500ms' : "delay-600ms"} absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}>H</p> :
                        index === columns * (rows - 2) + 3 ? <p className={`${textVanish ? 'animateDisappear-500ms' : "delay-700ms"} absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}>O</p> :
                        index === columns * (rows - 2) + 4 ? <p className={`${textVanish ? 'animateDisappear-500ms' : "delay-800ms"} absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}>M</p> :
                        index === columns * (rows - 2) + 5 ? <p className={`${textVanish ? 'animateDisappear-500ms' : "delay-900ms"} absolute text-white font-["Orbitron"] text-md md:text-xl opacity-70 uppercase z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}>E</p> : "" 
                    : "" }    

                </div>;
            })}
        </div>
    );
}
 
export default TilesHeader;