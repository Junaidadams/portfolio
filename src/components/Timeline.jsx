import { useState, useRef } from "react";
import { timelineInformation } from "../../constants";
import { BiChevronDown } from "react-icons/bi";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";

const Timeline = () => {
  const [index, setIndex] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  const numberOfElements = timelineInformation.length;

  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  const bounceTop = () => {
    setTranslateY(50);
    setTimeout(() => setTranslateY(0), 150);
  };

  const bounceBottom = () => {
    const viewportHeight = viewportRef.current.getBoundingClientRect().height;
    const trackHeight = trackRef.current.getBoundingClientRect().height;
    const bottom = trackHeight - viewportHeight;
    setTranslateY(-(bottom + 50));
    setTimeout(() => setTranslateY(-bottom), 150);
  };

  const nextMilestones = () => {
    const totalPages = Math.ceil(numberOfElements / 3);

    if (index === totalPages - 1) {
      bounceBottom();
      return;
    }
    const nextIndex = Math.min(index + 1, totalPages - 1);

    if (nextIndex === totalPages - 1) {
      const viewportHeight = viewportRef.current.getBoundingClientRect().height;
      const trackHeight = trackRef.current.getBoundingClientRect().height;
      setTranslateY(-(trackHeight - viewportHeight));
    } else {
      setTranslateY(nextIndex * (trackHeight / numberOfElements) * 3);
    }

    setIndex(nextIndex);
  };

  const prevMilestones = () => {
    if (!viewportRef.current || !trackRef.current) return;
    if (index === 0) {
      bounceTop();
      return;
    }

    const nextIndex = Math.max(index - 1, 0);
    const trackHeight = trackRef.current.getBoundingClientRect().height;

    if (nextIndex === 0) {
      setTranslateY(0);
    } else {
      setTranslateY(-(nextIndex * (trackHeight / numberOfElements) * 3));
    }

    setIndex(nextIndex);
  };

  return (
    <div>
      <button
        type="button"
        onClick={prevMilestones}
        className="dark:text-mainWhite text-mainBlack ml-1 w-10 h-10 "
      >
        <BsChevronCompactUp className="" />
      </button>

      <div
        className="overflow-hidden h-[320px] w-auto relative z-0"
        ref={viewportRef}
      >
        <div
          ref={trackRef}
          className="flex flex-col  transition-transform duration-500 ease-in-out"
          style={{ transform: `translateY(${translateY}px)` }}
        >
          {timelineInformation.map((info, i) => (
            <div className="flex gap-4 relative" key={info.key}>
              {/* Left rail: dot + connecting line */}
              <div className="flex flex-col items-center w-6 shrink-0">
                <div className="w-3 h-3 rounded-full bg-mainBlack dark:bg-mainWhite mt-1 z-10" />
                {i < timelineInformation.length - 1 && (
                  <div className="w-px flex-1 bg-gray-300 dark:bg-gray-600 mt-1" />
                )}
              </div>
              {/* Card */}
              <div className="mb-5 dark:bg-mainBlack dark:text-mainWhite p-3 text-xs rounded-lg flex-1">
                <p className="text-gray-400 text-[11px] mb-1">
                  {info.year}
                  {info.ended && ` – ${info.ended}`}
                </p>
                <div className="flex items-center gap-2 mb-1">
                  <img className="w-6 h-auto" src={info.imgUrl} />
                  <span className="text-gray-500">{info.institution}</span>
                </div>
                <h3 className="font-medium mb-1">{info.name}</h3>
                <p>{info.desc}</p>
              </div>
            </div>
          ))}
        </div>
        {index != 0 && (
          <div className="absolute top-0 h-10 w-full bg-gradient-to-t from-transparent to-mainWhite dark:to-mainBlack z-20 transition duration-200"></div>
        )}

        {index != numberOfElements - 1 && (
          <div className="absolute bottom-0 h-10 w-full bg-gradient-to-b from-transparent to-mainWhite dark:to-mainBlack z-20 transition duration-200"></div>
        )}
      </div>
      <button
        type="button"
        onClick={nextMilestones}
        className="dark:text-mainWhite text-mainBlack ml-1 w-10 h-10 "
      >
        <BsChevronCompactDown />
      </button>
    </div>
  );
};

export default Timeline;
