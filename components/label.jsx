function Label({icon, children, classes = []}){
  return (
    <div className={ `label ${icon && "col_2"} ${classes.join(' ')}`} >
      {icon && <span className="ic material-symbols-outlined">{icon}</span>}
      {/* <span>{label}</span> */}
      <span>{children}</span>
    </div>
  )
}
export default Label