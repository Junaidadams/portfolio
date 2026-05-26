import { timelineInformation } from "../../constants";

const Timeline = () => {
  return (
    <div>
      {timelineInformation.map((info) => (
        <div
          className="text-mainBlack dark:bg-mainBlack dark:text-mainWhite"
          key={info.key}
        >
          <p>
            {info.year} {info.ended && <span> - {info.ended}</span>}
          </p>
          <div className="flex ">
            <img className="w-12 h-auto" src={info.imgUrl} />
            <p>{info.institution}</p>
          </div>
          <h3>{info.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
