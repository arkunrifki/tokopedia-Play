import { ReactPropTypes } from "prop-types";

const VideoProductCard = ({ embedId, name, detail }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <iframe
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
        {detail}
      </p>
    </div>
  );
};


export default VideoProductCard;
