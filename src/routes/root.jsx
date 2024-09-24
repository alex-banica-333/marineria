import { Outlet, Link } from "react-router-dom"
function Root(){
  return(
    <>
      {/* <div className="con_menu">
        <div className="box_menu">
          <Link to={`/`}>Home</Link>
          <Link to={`/user/123456`}>User page</Link>
        </div>
      </div> */}

      {/* main content */}
      <Outlet />

    </>
  )
}

export default Root