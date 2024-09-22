function Label({icon, label}){
  return (
    <div className={ `label ${icon && "col_2"}`} >
      <span className="ic material-symbols-outlined">{icon}</span>
      <span>{label}</span>
    </div>
  )
}
export default Label