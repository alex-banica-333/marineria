function CardGenInfo({children, classes}){
  return(
    <div className={`box_gen_info_card grid gap-0_2 ${classes?.join(' ')}`}>
      {children}
    </div>
  )
}
export default CardGenInfo