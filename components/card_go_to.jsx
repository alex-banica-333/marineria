function CardGoTO({children}){
return(
  <div className="con_card_go_to">
    <div className="box_card_go_to">
      {/* image */}
      <div className="box_one">
        <img src="https://www.marineria.it/img/Cards/Crew.jpg" alt="" />
      </div>
      {/* text content */}
      <div className="box_two">
        {children}
      </div>

    </div>
  </div>
  )
}
export default CardGoTO