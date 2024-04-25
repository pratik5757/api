import style from "../AllStyle.module.css";

const search = ({ searchVal, onChange }) => {
  
  return (
    <input
      type="text"
      name="search"
      id="searchbar"
      className={style.search}
      placeholder=" Search country here ...     &#128269;"
      value={searchVal}
      onChange={onChange}
    />
  );
};

export default search;
