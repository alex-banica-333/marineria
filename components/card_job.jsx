
import MainInfo from './main_info.jsx'

function CardJob({job_data}){
  return(
    <div className="box_job_card">
      <label > {job_data.date} </label>
      <MainInfo icon="person" label={job_data.label} size="s" />
      <div className="box_one">
        <span>{job_data.period}</span>
        <span><strong>{job_data.salary}</strong></span>
      </div>
    </div>
  )
}
export default CardJob