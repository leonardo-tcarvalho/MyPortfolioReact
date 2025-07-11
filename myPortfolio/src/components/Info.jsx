import PropTypes from "prop-types";

export function Info(props) {
  return (
    <div className="w-full flex justify-start items-center gap-4">
      <div className="flex items-center w-[3.1rem] h-[3.1rem] border-gradient rounded-xl">
        <div className="flex items-center justify-center w-12 h-12 bg-zinc-800 rounded-xl shadow-5">
          {props.image}
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <span className="text-zinc-200">{props.type}</span>
        <p className="text-xs text-zinc-200">{props.content}</p>f
      </div>
    </div>
  );
}

Info.propTypes = {
  image: PropTypes.element.isRequired,
  type: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
