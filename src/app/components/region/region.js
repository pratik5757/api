 
import style from '../AllStyle.module.css'
const region = ({onChange}) => {
  return (
    <>
    <label htmlFor="filter" className={style.label}>
        Filter by Region:
      </label>
    
    <select className={style.filter} name="filter" id="filterbyRegion" onChange={onChange}>
            <option value="">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </select>
        </>
  )
}

export default region