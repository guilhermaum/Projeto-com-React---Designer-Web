import PropTypes from "prop-types";

export default function Map({ latitude, longitude }) {
  return (
    <div className="w-full aspect-[4/3] rounded-lg overflow-hidden px-6 pb-6">
      <iframe
        title="Mapa"
        width="100%"
        height="100%"
        src={`https://www.google.com/maps?q=${latitude},${longitude}&hl=pt&z=15&output=embed`}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}

Map.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
};
