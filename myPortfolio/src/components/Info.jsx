import PropTypes from "prop-types";

export function Info(props) {
  return (
    <div className="w-full flex justify-start items-center gap-4">
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
        {props.image}
      </div>
      <div className="w-full overflow-hidden">
        <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
          {props.type}
        </span>
        <p className="text-sm text-slate-800 dark:text-slate-200">
          {props.content}
        </p>
      </div>
    </div>
  );
}

Info.propTypes = {
  image: PropTypes.element.isRequired,
  type: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
