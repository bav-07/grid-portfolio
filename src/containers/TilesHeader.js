import anime from 'animejs/lib/anime.es.js';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { IoLogoLinkedin, IoLogoYoutube, IoLogoGithub, IoSquareSharp } from "react-icons/io5";
import { SiReact, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiNextdotjs, SiMui, SiSpring, SiPostgresql, SiGithub } from "react-icons/si"
import { FaHome, FaJava } from "react-icons/fa"
import { easings } from 'animejs';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom'
import kabutops from '../images/kabutops.png'
import notimdb from '../images/notimdb.png'
import pokeapi from '../images/pokeapi.gif'
import AboutBox from '../components/AboutBox';
import TimelineBox from '../components/TimelineBox';

const TilesHeader = () => {
    
    let [columns, setColumns] = useState(Math.floor(document.body.clientWidth / 50));
    let [rows, setRows] = useState(Math.floor(document.body.clientHeight / 50));
    let [pageState, setPageState] = useState("");
    let [loadState, setLoadState] = useState(false);
    let [textVanish, setTextVanish] = useState(false);
    let [splashState, setSplashState] = useState(true);
    let [sizeMultiplier, setSizeMultiplier] = useState(null);
    let [project, setProject] = useState('');

    const CyberTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} arrow classes={{ popper: className }} />
      ))(({ theme }) => ({
        [`& .${tooltipClasses.arrow}`]: {
          color: `${pageState === 'about' ? "var(--g3)" : "var(--g5)" }`,
          
        },
        [`& .${tooltipClasses.tooltip}`]: {
          backgroundColor: 'rgb(20,20,20,1)',
          border: `1px solid ${pageState === 'about' ? "var(--g3)" : "var(--g5)" }`,
          fontSize: '1rem',
          backdropBlur: '4px',
          fontFamily: '"Rajdhani"',
          borderRadius: '0px',
          animation: 'bobbing 1s ease-out infinite',
        },
      }));

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
                setProject("");
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
                setProject("");
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
                    ${pageState === "" ? "z-[0] scatter" : ""}
                    ${pageState === "about" ? (document.body.clientWidth <= 560 && (index === columns * 4 + 1 ||  index === columns * (3 + Math.ceil((rows - 4) / 2)) + 1)) || document.body.clientWidth > 560 && (index === columns * 4 + 1 ||  index === columns * 4 + (Math.ceil((columns - 2)/2 + 1))) ? "z-[10]" : "z-[0] scatter" : ""}
                    ${pageState === "projects" ? (document.body.clientWidth <= 560 && (index === columns * 4 + 1 ||  index === columns * (1 + Math.ceil((rows - 4) / 2)) + 1)) || document.body.clientWidth > 560 && (index === columns * 4 + 1 ||  index === columns * 3 + (Math.ceil((columns-2)/2 + 1))+3) ? "z-[10]" : "z-[0] scatter" : ""}
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
                    <AboutBox columns={columns} rows={rows} CyberTooltip={CyberTooltip} textVanish={textVanish} />
                    : ""} 

                    {!splashState && pageState === "about" && loadState === false && ((index === columns * (3 + Math.ceil((rows - 4) / 2)) + 1 && document.body.clientWidth <= 560) || (index === columns * 4 + (Math.ceil((columns-2)/2 + 1)) && document.body.clientWidth > 560))  ? 
                    
                    <TimelineBox columns={columns} rows={rows} textVanish={textVanish}/>
                    
                    : ""} 

                    {/* PROJECTS */}
                    {!splashState && pageState === "projects" && loadState === false && index === columns * 4 + 1 ? 
                    
                    <div 
                        style={{
                            width:`${document.body.clientWidth >= 560 ? (Math.ceil((columns - 2) / 2) + 2) * (document.body.clientWidth / columns) : document.body.clientWidth - (document.body.clientWidth / columns) * 2 - 2}px`,
                            height:`${document.body.clientWidth >= 560 ? (document.body.clientHeight / rows) * ((rows-4) - 3) : (document.body.clientHeight / rows) * ((rows-4)/2 - 4)}px`,
                            overflowY: 'scroll'
                        }}
                        className={`${textVanish ? 'about-animateDisappear-0ms' : "about-delay-0ms"} projectbox text-white font-["Orbitron"]  tracking-normal md:tracking-[8px] text-sm md:text-md opacity-100 top-[50%] left-[0%] bg-[rgb(20,20,20,0.8)] pl-[18px] border-[var(--g5)] border-[1px] rounded-sm ${document.body.clientWidth <= 560 ? `translate-y-[-16px]` : `translate-y-[-26px]`} p-5 absolute overflow-visible`}
                    >
                        <ul className='flex flex-col gap-2 md:gap-5'>
                            <li onMouseOver={() => setProject("kabutops")} className='transition-all duration-300'>
                                <p className={`hover:text-transparent bg-clip-text animate-text-moving-background bg-gradient-to-r from-[var(--g5)] to-[var(--g6)] transition-all duration-300 uppercase font-['Orbitron'] tracking-wider text-xl md:text-4xl font-300`}>Kabutops Trumps</p>
                                <p className={`uppercase font-['Rajdhani'] tracking-wider text-md md:text-xl font-300 pb-2`}>Browser-based Card-Battle Game</p>
                            </li>
                            <li onMouseOver={() => setProject("notimdb")} className='transition-all duration-300'>
                                <p className={`hover:text-transparent bg-clip-text animate-text-moving-background bg-gradient-to-r from-[var(--g5)] to-[var(--g6)] transition-all duration-300 uppercase font-['Orbitron'] tracking-wider text-xl md:text-4xl font-300`}>notIMDB</p>
                                <p className={`uppercase font-['Rajdhani'] tracking-wider text-md md:text-xl font-300 pb-2`}>Movies Review Website</p>
                            </li>
                            <li onMouseOver={() => setProject("pokeapi")} className='transition-all duration-300'>
                                <p className={`hover:text-transparent bg-clip-text animate-text-moving-background bg-gradient-to-r from-[var(--g5)] to-[var(--g6)] transition-all duration-300 uppercase font-['Orbitron'] tracking-wider text-xl md:text-4xl font-300`}>Who's That Pok&eacute;mon?</p>
                                <p className={`uppercase font-['Rajdhani'] tracking-wider text-md md:text-xl font-300 pb-2`}>Pok&eacute;mon Guessing Game using Pok&eacute;API</p>
                            </li>
                            <li onMouseOver={() => setProject("bookapi")} className='transition-all duration-300'>
                                <p className={`hover:text-transparent bg-clip-text animate-text-moving-background bg-gradient-to-r from-[var(--g5)] to-[var(--g6)] transition-all duration-300 uppercase font-['Orbitron'] tracking-wider text-xl md:text-4xl font-300`}>Biblion</p>
                                <p className={`uppercase font-['Rajdhani'] tracking-wider text-md md:text-xl font-300 pb-2`}>RESTful API for searching and reviewing books</p>
                            </li>
                            <li onMouseOver={() => setProject("restcountries")} className='transition-all duration-300'>
                                <p className={`hover:text-transparent bg-clip-text animate-text-moving-background bg-gradient-to-r from-[var(--g5)] to-[var(--g6)] transition-all duration-300 uppercase font-['Orbitron'] tracking-wider text-xl md:text-4xl font-300`}>RESTCountries Selector</p>
                                <p className={`uppercase font-['Rajdhani'] tracking-wider text-md md:text-xl font-300 pb-2`}>Search for Countries using RestCountriesAPI</p>
                            </li>
                            <li onMouseOver={() => setProject("vibapp")} className='transition-all duration-300'>
                                <p className={`hover:text-transparent bg-clip-text animate-text-moving-background bg-gradient-to-r from-[var(--g5)] to-[var(--g6)] transition-all duration-300 uppercase font-['Orbitron'] tracking-wider text-xl md:text-4xl font-300`}>ME2 Vibrations App</p>
                                <p className={`uppercase font-['Rajdhani'] tracking-wider text-md md:text-xl font-300 pb-2`}>Web-app for solving oscillatory systems</p>
                            </li>
                            
                        </ul>
                        
                        
                    </div>
                    
                    
                    : ""} 

                    {!splashState && project !== "" && pageState === "projects" && loadState === false && ((index === columns * (1 + Math.ceil((rows - 4) / 2)) + 1 && document.body.clientWidth <= 560) || (index === columns * 3 + (Math.ceil((columns-2)/2 + 1))+3 && document.body.clientWidth > 560))  ? 
                    
                    <div 
                        style={{
                            width:`${document.body.clientWidth >= 560 ? (Math.floor((columns - 2) / 2) - 3) * (document.body.clientWidth / columns) : document.body.clientWidth - (document.body.clientWidth / columns) * 2 - 2}px`,
                            height:`${document.body.clientWidth >= 560 ? (document.body.clientHeight / rows) * ((rows-4) - 1)  : (document.body.clientHeight / rows) * Math.floor((rows-4)/2 )}px`,
                            overflowY: 'hidden'
                        }}
                        className={`${textVanish ? 'about-animateDisappear-0ms' : "about-delay-0ms"} projectbox text-white font-["Rajdhani"]  tracking-normal text-sm md:text-md opacity-100 top-[50%] left-[0%] bg-[rgb(20,20,20,0.8)] border-[var(--g5)] border-[1px] rounded-sm ${document.body.clientWidth <= 560 ? `translate-y-[-16px]` : `translate-y-[-26px]`} pt-0 absolute overflow-visible`}
                    >
                        {project === "kabutops" ? 
                        <>
                        <img className={`absolute object-cover h-[100%] w-[100%] m-0 p-0`} src={kabutops} alt="Kabutops Trumps gameplay, user VS CPU trainer Red"></img>
                        <div className={`group opacity-delay-500ms absolute top-0 left-0 bottom-0 right-0`}>
                            <p className='transition-all duration-100 h-fit scale-y-100 border-b-[1px] border-[var(--g5)] absolute top-0 p-3 pl-4 font-["Orbitron"] tracking-wide w-full text-2xl font-500 bg-[rgb(20,20,20,0.8)] flex flex-row justify-between'><span>Kabutops Trumps</span><span className='float-right my-auto fullscreen text-sm font-["Rajdhani"] text-[var(--g5)] animate-bounce group-hover:opacity-0 transition-all duration-100'>Hover for more</span></p>
                            <div className={`bg-[rgb(20,20,20,0.9)] h-[200px] md:h-[320px] projectbox flex flex-col gap-3 border-t-[1px] border-[var(--g5)] transition-all ease-[cubic-bezier(0.76, 0, 0.24, 1)] duration-200 scale-y-0 group-hover:scale-y-100 group-active:scale-y-100 origin-bottom overflow-y-scroll w-[100%] absolute bottom-0 p-4`}>
                                <p>A full-stack application, allowing users to collect Pok&eacute;mon cards and battle against NPC trainers in 'Top Trumps'-style. </p>
                                <p>RESTful API back-end built with Java + Spring, for game logic and CRUD operations. React used for front-end, accompanied with modern CSS framework Tailwind.</p>
                                <div className='flex gap-5 items-center'>
                                    <p className={`flex items-start text-sm md:text-md font-['Rajdhani'] pb-0 -mb-4 tracking-normal text-[var(--g5)]`}>Repositories:</p>
                                    <p className={`flex flex-col items-center gap-1  text-sm md:text-md font-['Rajdhani'] tracking-normal pb-2`}>
                                        <span className={`text-[var(--g5)] `}>Front-end: </span>
                                        <div className='flex flex-col'>
                                            <a href="https://github.com/bav-07/KabutopsTrumpsFrontEnd" target="_blank" rel='noopener noreferrer' className='bg-[rgb(20,20,20,0.8)] hover:bg-[#e5e5e5] hover:text-[rgb(20,20,20)] hover:scale-105 active:scale-95 active:bg-[rgb(180,180,180,0.8)] transition-all duration-150 w-[100px] h-[50px] flex items-center border-[var(--g5)] text-center border-[1px] rounded-sm'><p className='mx-auto my-auto w-fit text-2xl'><SiGithub/></p></a>
                                        </div>
                                    </p>
                                    <p className={`flex flex-col items-center gap-1  text-sm md:text-md font-['Rajdhani'] tracking-normal pb-2`}>
                                        <span className={`text-[var(--g5)] `}>Back-end: </span>
                                        <div className='flex flex-col'>
                                            <a href="https://github.com/bav-07/Kabutops_Trumps_Backend" target="_blank" rel='noopener noreferrer' className='bg-[rgb(20,20,20,0.8)] hover:bg-[#e5e5e5] hover:text-[rgb(20,20,20)] hover:scale-105 active:scale-95 active:bg-[rgb(180,180,180,0.8)] transition-all duration-150 w-[100px] h-[50px] flex items-center border-[var(--g5)] text-center border-[1px] rounded-sm'><p className='mx-auto my-auto w-fit text-2xl'><SiGithub/></p></a>
                                        </div>
                                    </p>
                                </div>
                                <p className={`text-lg flex gap-3 items-start md:text-xl font-['Rajdhani'] tracking-normal pb-2`}>
                                    <span className={`text-[var(--g5)] text-sm md:text-md`}>Tools:</span>
                                    <CyberTooltip enterTouchDelay={0} TransitionComponent={Zoom} placement="top" title="React"><p><SiReact/></p></CyberTooltip>
                                    <CyberTooltip enterTouchDelay={0} TransitionComponent={Zoom} placement="top" title="JavaScript"><p><SiJavascript/></p></CyberTooltip>
                                    <CyberTooltip enterTouchDelay={0} TransitionComponent={Zoom} placement="top" title="HTML5"><p><SiHtml5/></p></CyberTooltip>
                                    <CyberTooltip enterTouchDelay={0} TransitionComponent={Zoom} placement="top" title="CSS3"><p><SiCss3/></p></CyberTooltip>
                                    <CyberTooltip enterTouchDelay={0} TransitionComponent={Zoom} placement="top" title="TailwindCSS"><p><SiTailwindcss/></p></CyberTooltip>
                                    <CyberTooltip enterTouchDelay={0} TransitionComponent={Zoom} placement="top" title="Material UI"><p><SiMui/></p></CyberTooltip>
                                    <CyberTooltip enterTouchDelay={0} TransitionComponent={Zoom} placement="top" title="Java"><p><FaJava/></p></CyberTooltip>
                                    <CyberTooltip enterTouchDelay={0} TransitionComponent={Zoom} placement="top" title="Spring"><p><SiSpring/></p></CyberTooltip>
                                    <CyberTooltip enterTouchDelay={0} TransitionComponent={Zoom} placement="top" title="PostgreSQL"><p><SiPostgresql/></p></CyberTooltip>
                                </p>
                                <p className={`flex gap-3 items-start text-sm md:text-md font-['Rajdhani'] tracking-normal pb-2`}>
                                    <span className={`text-[var(--g5)] `}>Collaborators: </span>
                                    <div className='flex flex-col'>
                                        <a>Bavaharsan Nagarajah</a><a>Loshanth Selvanayagam</a><a>Eesaa Sheikh</a><a>Shawn Augustine</a><a>Will Stanistreet</a>
                                    </div>
                                </p>
                            </div>
                        </div>
                        </>
                        : project === "notimdb" ? 
                        <>
                        <img className={`absolute object-cover h-[100%] w-[100%] m-0 p-0`} src={notimdb} alt="notIMDB movies page with list of movies"></img>
                        <div className={`group opacity-delay-500ms absolute top-0 left-0 bottom-0 right-0`}>
                            <p className='transition-all duration-100 h-fit scale-y-100 border-b-[1px] border-[var(--g5)] absolute top-0 p-3 pl-4 font-["Orbitron"] tracking-wide w-full text-2xl font-500 bg-[rgb(20,20,20,0.8)] flex flex-row justify-between'><span>notIMDB</span><span className='float-right my-auto fullscreen text-sm font-["Rajdhani"] text-[var(--g5)] animate-bounce group-hover:opacity-0 transition-all duration-100'>Hover for more</span></p>
                            <div className={`bg-[rgb(20,20,20,0.9)] h-[200px] md:h-[320px] projectbox flex flex-col gap-3 border-t-[1px] border-[var(--g5)] transition-all ease-[cubic-bezier(0.76, 0, 0.24, 1)] duration-200 scale-y-0 group-hover:scale-y-100 group-active:scale-y-100 origin-bottom overflow-y-scroll w-[100%] absolute bottom-0 p-4`}>
                                <p>A full-stack application, allowing users to search for and review movies with a star-rating system, with a simple sign-up/log-in functionality.</p>
                                <p>RESTful API back-end built with Java + Spring, for CRUD operations. React used for front-end, accompanied with modern CSS framework Tailwind.</p>
                                <div className='flex gap-5 items-center'>
                                    <p className={`flex items-start text-sm md:text-md font-['Rajdhani'] pb-0 -mb-4 tracking-normal text-[var(--g5)]`}>Repositories:</p>
                                    <p className={`flex flex-col items-center gap-1  text-sm md:text-md font-['Rajdhani'] tracking-normal pb-2`}>
                                        <span className={`text-[var(--g5)] `}>Front-end: </span>
                                        <div className='flex flex-col'>
                                            <a href="https://github.com/bav-07/json-statham-front-end" target="_blank" rel='noopener noreferrer' className='bg-[rgb(20,20,20,0.8)] hover:bg-[#e5e5e5] hover:text-[rgb(20,20,20)] hover:scale-105 active:scale-95 active:bg-[rgb(180,180,180,0.8)] transition-all duration-150 w-[100px] h-[50px] flex items-center border-[var(--g5)] text-center border-[1px] rounded-sm'><p className='mx-auto my-auto w-fit text-2xl'><SiGithub/></p></a>
                                        </div>
                                    </p>
                                    <p className={`flex flex-col items-center gap-1  text-sm md:text-md font-['Rajdhani'] tracking-normal pb-2`}>
                                        <span className={`text-[var(--g5)] `}>Back-end: </span>
                                        <div className='flex flex-col'>
                                            <a href="https://github.com/bav-07/json-statham-back-end" target="_blank" rel='noopener noreferrer' className='bg-[rgb(20,20,20,0.8)] hover:bg-[#e5e5e5] hover:text-[rgb(20,20,20)] hover:scale-105 active:scale-95 active:bg-[rgb(180,180,180,0.8)] transition-all duration-150 w-[100px] h-[50px] flex items-center border-[var(--g5)] text-center border-[1px] rounded-sm'><p className='mx-auto my-auto w-fit text-2xl'><SiGithub/></p></a>
                                        </div>
                                    </p>
                                </div>
                                <p className={`text-lg flex gap-3 items-start md:text-xl font-['Rajdhani'] tracking-normal pb-2`}>
                                    <span className={`text-[var(--g5)] text-sm md:text-md`}>Tools:</span>
                                    <CyberTooltip enterTouchDelay={0} TransitionComponent={Zoom} placement="top" title="React"><p><SiReact/></p></CyberTooltip>
                                    <CyberTooltip enterTouchDelay={0} TransitionComponent={Zoom} placement="top" title="JavaScript"><p><SiJavascript/></p></CyberTooltip>
                                    <CyberTooltip enterTouchDelay={0} TransitionComponent={Zoom} placement="top" title="HTML5"><p><SiHtml5/></p></CyberTooltip>
                                    <CyberTooltip enterTouchDelay={0} TransitionComponent={Zoom} placement="top" title="CSS3"><p><SiCss3/></p></CyberTooltip>
                                    <CyberTooltip enterTouchDelay={0} TransitionComponent={Zoom} placement="top" title="TailwindCSS"><p><SiTailwindcss/></p></CyberTooltip>
                                    <CyberTooltip enterTouchDelay={0} TransitionComponent={Zoom} placement="top" title="Material UI"><p><SiMui/></p></CyberTooltip>
                                    <CyberTooltip enterTouchDelay={0} TransitionComponent={Zoom} placement="top" title="Java"><p><FaJava/></p></CyberTooltip>
                                    <CyberTooltip enterTouchDelay={0} TransitionComponent={Zoom} placement="top" title="Spring"><p><SiSpring/></p></CyberTooltip>
                                    <CyberTooltip enterTouchDelay={0} TransitionComponent={Zoom} placement="top" title="PostgreSQL"><p><SiPostgresql/></p></CyberTooltip>
                                </p>
                                <p className={`flex gap-3 items-start text-sm md:text-md font-['Rajdhani'] tracking-normal pb-2`}>
                                    <span className={`text-[var(--g5)] `}>Collaborators: </span>
                                    <div className={`flex ${(Math.floor((columns - 2) / 2) - 3) >= 8 || (document.body.clientWidth <= 560 && document.body.clientWidth >= 400) ? 'flex-row' : 'flex-col'}`}>
                                        <div className='flex flex-col'>
                                            <p className='text-[var(--g5)]'>Front-end:</p><a>Bavaharsan Nagarajah</a><a>Loshanth Selvanayagam</a><a>Salma Mounes</a><a>Harry Masini</a>
                                        </div>
                                        <div className={`${(Math.floor((columns - 2) / 2) - 3) >= 8  || (document.body.clientWidth <= 560 && document.body.clientWidth >= 400) ? 'ml-2' : 'mt-2'} flex flex-col`}>
                                            <p className={` text-[var(--g5)]`}>Back-end:</p><a>Sara Ahmed</a><a>Saad Ahmed</a><a>Radhika Rathi</a><a>Isabel Martinez de Rituerto</a>
                                        </div>
                                    </div>
                                </p>
                            </div>
                        </div>
                        </>
                        : project === "pokeapi" ? 
                        <>
                        <img className={`absolute object-cover h-[100%] w-[100%] m-0 p-0`} src={pokeapi} alt="Pokedex with Who's That Pokemon game, using PokeAPI"></img>
                        <div className={`group opacity-delay-500ms absolute top-0 left-0 bottom-0 right-0`}>
                            <p className='transition-all duration-100 h-fit scale-y-100 border-b-[1px] border-[var(--g5)] absolute top-0 p-3 pl-4 font-["Orbitron"] tracking-wide w-full text-xl font-500 bg-[rgb(20,20,20,0.8)] flex flex-row justify-between'><span>Who's That Pok&eacute;mon?</span><span className='float-right my-auto fullscreen text-sm font-["Rajdhani"] text-[var(--g5)] animate-bounce group-hover:opacity-0 transition-all duration-100'>Hover for more</span></p>
                            <div className={`bg-[rgb(20,20,20,0.9)] max-h-[200px] md:max-h-[320px] projectbox flex flex-col gap-3 border-t-[1px] border-[var(--g5)] transition-all ease-[cubic-bezier(0.76, 0, 0.24, 1)] duration-200 scale-y-0 group-hover:scale-y-100 group-active:scale-y-100 origin-bottom overflow-y-scroll w-[100%] absolute bottom-0 p-4`}>
                                <p>Consumes the <span className='font-bold'>Pok&eacute;API</span> to display lists of Pok&eacute;mon categorised by Generation of introduction. Accompanied with a simple Pok&eacute;mon guessing game, <span className='font-bold'>'Who's That Pok&eacute;mon?'</span>, inspired by the popular TV show eyecatcher of the same name.</p>
                                <div className='flex gap-5 items-center'>
                                    <p className={`flex items-start text-sm md:text-md font-['Rajdhani'] pb-0 tracking-normal text-[var(--g5)]`}>Repository:</p>
                                    <p className={`flex flex-col items-center gap-1  text-sm md:text-md font-['Rajdhani'] tracking-normal pb-2`}>
                                        <div className='flex flex-col'>
                                            <a href="https://github.com/bav-07/pokedex-pokeapi" target="_blank" rel='noopener noreferrer' className='bg-[rgb(20,20,20,0.8)] hover:bg-[#e5e5e5] hover:text-[rgb(20,20,20)] hover:scale-105 active:scale-95 active:bg-[rgb(180,180,180,0.8)] transition-all duration-150 w-[100px] h-[50px] flex items-center border-[var(--g5)] text-center border-[1px] rounded-sm'><p className='mx-auto my-auto w-fit text-2xl'><SiGithub/></p></a>
                                        </div>
                                    </p>
                                </div>
                                <p className={`text-lg flex gap-3 items-start md:text-xl font-['Rajdhani'] tracking-normal pb-2`}>
                                    <span className={`text-[var(--g5)] text-sm md:text-md`}>Tools:</span>
                                    <CyberTooltip enterTouchDelay={0} TransitionComponent={Zoom} placement="top" title="React"><p><SiReact/></p></CyberTooltip>
                                    <CyberTooltip enterTouchDelay={0} TransitionComponent={Zoom} placement="top" title="JavaScript"><p><SiJavascript/></p></CyberTooltip>
                                    <CyberTooltip enterTouchDelay={0} TransitionComponent={Zoom} placement="top" title="HTML5"><p><SiHtml5/></p></CyberTooltip>
                                    <CyberTooltip enterTouchDelay={0} TransitionComponent={Zoom} placement="top" title="CSS3"><p><SiCss3/></p></CyberTooltip>
                                </p>
                                <p className={`flex gap-3 items-start text-sm md:text-md font-['Rajdhani'] tracking-normal pb-2`}>
                                    <span className={`text-[var(--g5)] `}>Collaborators: </span>
                                    <div className={`flex ${(Math.floor((columns - 2) / 2) - 3) >= 8 || document.body.clientWidth <= 560 ? 'flex-row' : 'flex-col'}`}>
                                        <div className='flex flex-col'>
                                            <a>Bavaharsan Nagarajah</a>
                                        </div>
                                    </div>
                                </p>
                            </div>
                        </div>
                        </>
                        : project === "bookapi" ? 
                        <>
                        <img className={`absolute object-cover h-[100%] w-[100%] m-0 p-0`} src={pokeapi} alt="Pokedex with Who's That Pokemon game, using PokeAPI"></img>
                        <div className={`group opacity-delay-500ms absolute top-0 left-0 bottom-0 right-0`}>
                            <p className='transition-all duration-100 h-fit scale-y-100 border-b-[1px] border-[var(--g5)] absolute top-0 p-3 pl-4 font-["Orbitron"] tracking-wide w-full text-xl font-500 bg-[rgb(20,20,20,0.8)] flex flex-row justify-between'><span>Who's That Pok&eacute;mon?</span><span className='float-right my-auto fullscreen text-sm font-["Rajdhani"] text-[var(--g5)] animate-bounce group-hover:opacity-0 transition-all duration-100'>Hover for more</span></p>
                            <div className={`bg-[rgb(20,20,20,0.9)] max-h-[200px] md:max-h-[320px] projectbox flex flex-col gap-3 border-t-[1px] border-[var(--g5)] transition-all ease-[cubic-bezier(0.76, 0, 0.24, 1)] duration-200 scale-y-0 group-hover:scale-y-100 group-active:scale-y-100 origin-bottom overflow-y-scroll w-[100%] absolute bottom-0 p-4`}>
                                <p>Consumes the <span className='font-bold'>Pok&eacute;API</span> to display lists of Pok&eacute;mon categorised by Generation of introduction. Accompanied with a simple Pok&eacute;mon guessing game, <span className='font-bold'>'Who's That Pok&eacute;mon?'</span>, inspired by the popular TV show eyecatcher of the same name.</p>
                                <div className='flex gap-5 items-center'>
                                    <p className={`flex items-start text-sm md:text-md font-['Rajdhani'] pb-0 tracking-normal text-[var(--g5)]`}>Repository:</p>
                                    <p className={`flex flex-col items-center gap-1  text-sm md:text-md font-['Rajdhani'] tracking-normal pb-2`}>
                                        <div className='flex flex-col'>
                                            <a href="https://github.com/bav-07/pokedex-pokeapi" target="_blank" rel='noopener noreferrer' className='bg-[rgb(20,20,20,0.8)] hover:bg-[#e5e5e5] hover:text-[rgb(20,20,20)] hover:scale-105 active:scale-95 active:bg-[rgb(180,180,180,0.8)] transition-all duration-150 w-[100px] h-[50px] flex items-center border-[var(--g5)] text-center border-[1px] rounded-sm'><p className='mx-auto my-auto w-fit text-2xl'><SiGithub/></p></a>
                                        </div>
                                    </p>
                                </div>
                                <p className={`text-lg flex gap-3 items-start md:text-xl font-['Rajdhani'] tracking-normal pb-2`}>
                                    <span className={`text-[var(--g5)] text-sm md:text-md`}>Tools:</span>
                                    <CyberTooltip enterTouchDelay={0} TransitionComponent={Zoom} placement="top" title="React"><p><SiReact/></p></CyberTooltip>
                                    <CyberTooltip enterTouchDelay={0} TransitionComponent={Zoom} placement="top" title="JavaScript"><p><SiJavascript/></p></CyberTooltip>
                                    <CyberTooltip enterTouchDelay={0} TransitionComponent={Zoom} placement="top" title="HTML5"><p><SiHtml5/></p></CyberTooltip>
                                    <CyberTooltip enterTouchDelay={0} TransitionComponent={Zoom} placement="top" title="CSS3"><p><SiCss3/></p></CyberTooltip>
                                </p>
                                <p className={`flex gap-3 items-start text-sm md:text-md font-['Rajdhani'] tracking-normal pb-2`}>
                                    <span className={`text-[var(--g5)] `}>Collaborators: </span>
                                    <div className={`flex ${(Math.floor((columns - 2) / 2) - 3) >= 8 || document.body.clientWidth <= 560 ? 'flex-row' : 'flex-col'}`}>
                                        <div className='flex flex-col'>
                                            <a>Bavaharsan Nagarajah</a>
                                        </div>
                                    </div>
                                </p>
                            </div>
                        </div>
                        </>
                        : <></> }
                              
                    </div>
                    
                    
                    : ""} 

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