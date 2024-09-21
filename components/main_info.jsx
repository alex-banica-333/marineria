

function MainInfo({icon, label, size}){
  return (
    <div className="con_main_info">
      <div className={`box_main_info ${size}`}>
        {/* icon */}
        {
          icon && (
            <div className="ic">
            <span class="material-symbols-outlined">{icon}</span>
          </div>
          ) 
        }
       
        {/* text */}
        {
          label && (
            <div className="text">
              <span>{label}</span>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default MainInfo