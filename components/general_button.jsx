function GeneralButton({icon, label, classes}){
  return (
    <button className={ `gen_btn ${icon && "col_2"} ${classes}`} >
      { icon && <span className="ic material-symbols-outlined">{icon}</span> }
      <span className="label" >{label}</span>
    </button>
  )
}

export default GeneralButton