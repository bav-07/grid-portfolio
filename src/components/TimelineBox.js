const TimelineBox = ({columns, rows, textVanish}) => {
  return (
    <div
      style={{
        width: `${
          document.body.clientWidth >= 560
            ? Math.floor((columns - 2) / 2) *
              (document.body.clientWidth / columns)
            : document.body.clientWidth -
              (document.body.clientWidth / columns) * 2 -
              2
        }px`,
        height: `${
          document.body.clientWidth >= 560
            ? (document.body.clientHeight / rows) * (rows - 4 - 3)
            : (document.body.clientHeight / rows) *
              Math.floor((rows - 4) / 2 - 2)
        }px`,
        overflowY: "scroll",
      }}
      className={`${
        textVanish ? "about-animateDisappear-0ms" : "about-delay-0ms"
      } aboutbox text-white font-["Rajdhani"]  tracking-normal text-sm md:text-md opacity-100 top-[50%] left-[0%] bg-[rgb(20,20,20,0.8)] pl-[18px] border-[var(--g3)] border-[1px] rounded-sm ${
        document.body.clientWidth <= 560
          ? `translate-y-[-16px]`
          : `translate-y-[-26px]`
      } p-5 absolute overflow-visible`}
    >
      <p
        className={`uppercase font-['Rajdhani'] tracking-wider text-xl md:text-2xl font-black pb-4`}
      >
        &lt; Timeline /&gt;
      </p>
      <ul className="flex flex-col gap-5">
        <div className="grid grid-cols-[4fr_1.5fr_4fr] md:grid-cols-[4fr_60px_8fr]">
          <div className="text-end">
            <p
              className={`uppercase font-['Rajdhani'] tracking-wider text-md md:text-lg md:leading-[-20px] font-[500] -pb-2`}
            >
              Software Engineering Associate
            </p>
            <p
              className={` font-['Rajdhani'] tracking-wider text-md md:text-lg md:leading-[-20px] font-[400] text-[var(--g3)]`}
            >
              @ Lloyds Banking Group
            </p>
            <p
              className={`uppercase font-['Rajdhani'] tracking-wider text-md md:text-lg md:leading-[-20px] font-[400] pb-2 text-gray-300`}
            >
              Mar 2023 - Present
            </p>
          </div>
          <div>
            <div className="timelineComp mx-auto my-auto bg-gradient-to-tl from-[var(--g3)] to-[var(--g4)] w-[15px] md:w-[25px] h-[15px] md:h-[25px] rounded-full content-none"></div>
            <div className="mx-auto my-auto -mt-1 bg-gradient-to-b from-[var(--g3)] via-[#00000000] w-[1px] md:w-[2px] h-full "></div>
          </div>
          <div>
            <ul className="tracking-normal">
              <li className="timelineListItem"></li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-[4fr_1.5fr_4fr] md:grid-cols-[4fr_60px_8fr]">
          <div className="text-end">
            <p
              className={`uppercase font-['Rajdhani'] tracking-wider text-md md:text-lg md:leading-[-20px] font-[500] -pb-2`}
            >
              Trainee Software Engineer
            </p>
            <p
              className={` font-['Rajdhani'] tracking-wider text-md md:text-lg md:leading-[-20px] font-[400] text-[var(--g3)]`}
            >
              @ Bright Network Technology Academy
            </p>
            <p
              className={`uppercase font-['Rajdhani'] tracking-wider text-md md:text-lg md:leading-[-20px] font-[400] pb-2 text-gray-300`}
            >
              Nov 2022 - Feb 2023
            </p>
          </div>
          <div>
            <div className="timelineComp mx-auto my-auto bg-gradient-to-tl from-[var(--g3)] to-[var(--g4)] w-[15px] md:w-[25px] h-[15px] md:h-[25px] rounded-full content-none"></div>
            <div className="mx-auto my-auto -mt-1 bg-gradient-to-b from-[var(--g3)] via-[#00000000] w-[1px] md:w-[2px] h-full "></div>
          </div>
          <div>
            <ul className="ml-3 text-sm md:text-md flex flex-col gap-3">
              <li className="timelineListItem list-disc text-sm md:text-lg">
                Underwent 12-weeks of intensive training for back-end and
                front-end development. Learned core programming principles.
              </li>
              <li className="timelineListItem list-disc text-sm md:text-lg">
                Used Agile methodologies and test-driven development (TDD).
              </li>
              <li className="timelineListItem list-disc text-sm md:text-lg">
                Developed full-stack capstone project - a browser-based
                Pok&eacute;mon card-battle game.
              </li>
              <li className="timelineListItem list-disc text-sm md:text-lg">
                Developed a front-end movie review website using a pre-existing
                API, allowing users to login/sign-up and leave star-rating
                reviews on movies.
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-[4fr_1.5fr_4fr] md:grid-cols-[4fr_60px_8fr]">
          <div className="text-end">
            <p
              className={`uppercase font-['Rajdhani'] tracking-wider text-md md:text-lg md:leading-[-20px] font-[500] -pb-2`}
            >
              Masters' in Mechanical Engineering
            </p>
            <p
              className={` font-['Rajdhani'] tracking-wider text-md md:text-lg md:leading-[-20px] font-[400] text-[var(--g3)]`}
            >
              @ Imperial College London
            </p>
            <p
              className={`uppercase font-['Rajdhani'] tracking-wider text-md md:text-lg md:leading-[-20px] font-[400] pb-2 text-gray-300`}
            >
              Oct 2018 - July 2022
            </p>
          </div>
          <div>
            <div className="timelineComp mx-auto my-auto bg-gradient-to-tl from-[var(--g3)] to-[var(--g4)] w-[15px] md:w-[25px] h-[15px] md:h-[25px] rounded-full content-none"></div>
            <div className="mx-auto my-auto -mt-1 bg-gradient-to-b from-[var(--g3)] via-[#00000000] w-[1px] md:w-[2px] h-full "></div>
          </div>
          <div>
            <ul className="ml-3 text-sm md:text-md flex flex-col gap-3">
              <li className="timelineListItem list-disc text-sm md:text-lg">
                Developed an interactive web-app for visualising
                2-degree-of-freedom oscillatory systems, allowing user input and
                graphically displaying system responses.
              </li>
              <li className="timelineListItem list-disc text-sm md:text-lg">
                Used Embedded C with a microcontroller to develop an electronic
                vehicle with collision-avoidance, via colour detection and
                turning at specific angles.
              </li>
            </ul>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default TimelineBox;
