import { SiReact, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiNextdotjs, SiMui, SiSpring, SiPostgresql, SiGithub } from "react-icons/si"
import { FaHome, FaJava } from "react-icons/fa"
import Zoom from '@mui/material/Zoom'

const AboutBox = ({columns, rows, CyberTooltip, textVanish}) => {
  return (
    <div
      style={{
        width: `${
          document.body.clientWidth >= 560
            ? (Math.ceil((columns - 2) / 2) - 1) *
              (document.body.clientWidth / columns)
            : document.body.clientWidth -
              (document.body.clientWidth / columns) * 2 -
              2
        }px`,
        height: `${
          document.body.clientWidth >= 560
            ? (document.body.clientHeight / rows) * (rows - 4 - 3)
            : (document.body.clientHeight / rows) * ((rows - 4) / 2 - 2)
        }px`,
        overflowY: "scroll",
      }}
      className={`${
        textVanish ? "about-animateDisappear-0ms" : "about-delay-0ms"
      } aboutbox text-white font-["Orbitron"]  tracking-normal md:tracking-[8px] text-sm md:text-md opacity-100 top-[50%] left-[0%] bg-[rgb(20,20,20,0.8)] pl-[18px] border-[var(--g3)] border-[1px] rounded-sm ${
        document.body.clientWidth <= 560
          ? `translate-y-[-16px]`
          : `translate-y-[-26px]`
      } p-5 absolute overflow-visible`}
    >
      <p
        className={`uppercase font-['Rajdhani'] tracking-wider text-xl md:text-2xl font-black pb-2`}
      >
        &lt; Full-stack Developer /&gt;
      </p>
      {/* <p className={`lowercase text-[10px]`}>&lt;div&gt;</p> */}
      <p
        className={`text-lg md:text-xl font-['Rajdhani'] tracking-normal block pb-4`}
      >
        {" "}
        Software engineer with experience in both{" "}
        <span className="text-[var(--g3)]">back-end</span> and{" "}
        <span className="text-[var(--g3)]">front-end</span> development.
        Aspiring to create software that has a significant impact on society.{" "}
      </p>
      {/* <p className={`text-lg md:text-xl font-['Rajdhani'] tracking-normal block `}>      */}
      {/* </p>  */}
      {/* <p className={`lowercase text-[10px]`}>&lt;/div&gt;</p> */}
      <p
        className={`uppercase font-['Rajdhani'] tracking-wider text-xl md:text-2xl font-black pb-2`}
      >
        &lt; Tech-Stack /&gt;
      </p>
      {/* <p className={`lowercase text-[10px]`}>&lt;div&gt;</p> */}
      <p
        className={`text-lg flex gap-3 items-start md:text-xl font-['Rajdhani'] tracking-normal pb-2`}
      >
        <span className="text-[var(--g3)] whitespace-nowrap leading-5">
          Front-end:
        </span>
        <CyberTooltip
          enterTouchDelay={0}
          TransitionComponent={Zoom}
          placement="top"
          title="React"
        >
          <p>
            <SiReact />
          </p>
        </CyberTooltip>
        <CyberTooltip
          enterTouchDelay={0}
          TransitionComponent={Zoom}
          placement="top"
          title="JavaScript"
        >
          <p>
            <SiJavascript />
          </p>
        </CyberTooltip>
        <CyberTooltip
          enterTouchDelay={0}
          TransitionComponent={Zoom}
          placement="top"
          title="HTML5"
        >
          <p>
            <SiHtml5 />
          </p>
        </CyberTooltip>
        <CyberTooltip
          enterTouchDelay={0}
          TransitionComponent={Zoom}
          placement="top"
          title="CSS3"
        >
          <p>
            <SiCss3 />
          </p>
        </CyberTooltip>
        <CyberTooltip
          enterTouchDelay={0}
          TransitionComponent={Zoom}
          placement="top"
          title="TailwindCSS"
        >
          <p>
            <SiTailwindcss />
          </p>
        </CyberTooltip>
        <CyberTooltip
          enterTouchDelay={0}
          TransitionComponent={Zoom}
          placement="top"
          title="Material UI"
        >
          <p>
            <SiMui />
          </p>
        </CyberTooltip>
        <CyberTooltip
          enterTouchDelay={0}
          TransitionComponent={Zoom}
          placement="top"
          title="Next.js"
        >
          <p>
            <SiNextdotjs />
          </p>
        </CyberTooltip>
      </p>
      <p
        className={`text-lg flex gap-3 items-start md:text-xl font-['Rajdhani'] tracking-normal pb-2`}
      >
        <span className="text-[var(--g3)] leading-5">Back-end: </span>
        <CyberTooltip
          enterTouchDelay={0}
          TransitionComponent={Zoom}
          placement="bottom"
          title="Java"
        >
          <p>
            <FaJava />
          </p>
        </CyberTooltip>
        <CyberTooltip
          enterTouchDelay={0}
          TransitionComponent={Zoom}
          placement="bottom"
          title="Spring"
        >
          <p>
            <SiSpring />
          </p>
        </CyberTooltip>
        <CyberTooltip
          enterTouchDelay={0}
          TransitionComponent={Zoom}
          placement="bottom"
          title="PostgreSQL"
        >
          <p>
            <SiPostgresql />
          </p>
        </CyberTooltip>
      </p>
    </div>
  );
};

export default AboutBox;
