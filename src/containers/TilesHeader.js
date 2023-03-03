import anime from 'animejs/lib/anime.es.js';
import { useState } from 'react';

const TilesHeader = () => {
    
    let [columns, setColumns] = useState(Math.floor(document.body.clientWidth / 50));
    let [rows, setRows] = useState(Math.floor(document.body.clientHeight / 50));

    window.onresize = () => {
        setColumns(Math.floor(document.body.clientWidth / 50));
        setRows(Math.floor(document.body.clientHeight / 50))
    }
    window.onload = () => {
        setColumns(Math.floor(document.body.clientWidth / 50));
        setRows(Math.floor(document.body.clientHeight / 50))
    }
    
    const handleOnClick = index => {
  
        anime({
            targets: ".tile",
            scale: [{value: 0.5, duration: 500},
            {value: 1, duration: 500}],
            delay: anime.stagger(100, {
                grid: [columns, rows],
                from: index
            })
        })
    }

    return ( 
        <div 
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gridTemplateRows: `repeat(${rows}, 1fr)`,
            }}
            className={`tiles h-[100vh] w-[100vw]`}>
            {Array.from(Array(columns * rows)).map((tile, index) => {
                return <div className="tile" onClick={(e) => handleOnClick(index)}></div>;
            })}
        </div>
    );
}
 
export default TilesHeader;