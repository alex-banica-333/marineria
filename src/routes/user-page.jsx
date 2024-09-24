import GeneralButton from '/components/general_button.jsx'
import Label from '/components/label.jsx'



// user profile data
const user_data = {
  position: {
    primary: "Comandante (CoC)",
    secondary: "Ufficiale di Coperta Comandante Ormeggiatore Direttore di Porto",
  },
  available: {
    on_from: "09/22/2024",
    
  },
  contract: {
    status: "Currently under contract",
  },
  offers_received: "0",
  passport: {
    state: "Italy"
  },
  address: {
    city: "Palau",
  },
  salary: {
    value: "Not declared",
    currency: "€",
  }
}

// user general info data
const general_user_data = [
  {
    label: "Dati personali",
    status: true,
    texts: [
      "Sposato/a 38 anni, Non fumo",
      "Residente a: meta (NA) Italia"
    ]
  },
  {
    label: "Esperienza di navigazione",
    status: true,
    texts: [
      "9 anni",
      "3 anni 5 mesi a Libretto"
    ]
  },
  {
    label: "Libretto di navigazione",
    status: true,
    texts: [
      " 1° categoria , castellammare di stabia , Ufficiale ",
    ]
  },
  {
    label: "Referenze",
    status: false,
  },
]


function ImageCard({img_url}){
  return (
    <div className="con_imageCard">
      <div className="box_imageCard">
        <img src={img_url} />
      </div>
    </div>
  )
}
export default function UserPage(){
  return (
    <>
      {/* PROFILE PAGE */}
      <div className="con_profile_page base_width m_y_4">
        <div className="box_profile_page">
          {/* column one */}
          <div className="box_one">
            {/* profile id */}
            <GeneralButton label="Profile 72139" classes={["orange"].join(" ")} />

            {/* user */}
            <div className="">
              {/* user interactions with Marineria */}
              <div className="grid-2">
                <span>Registered: 09/05/2024</span>
                <span className="js-end" >Last seen: 09/22/2024</span>
              </div>
              {/* slider image */}
              <ImageCard img_url="https://www.marineria.it/PROFoto/6459613122023171241_A.jpg"  />
            </div>

            {/* references */}

          </div> 

          {/* column tow - main page content */}
          <div className="box_two grid gap-1_5">

            {/* role */}
            <div className='grid gap-0_4' >
              <Label icon="anchor" classes={["f-1_2"]} > {user_data?.position?.primary} </Label>
              <p>{user_data?.position?.secondary}</p>
            </div>
            

            {/* user general data */}
            <div className="grid-2 gap-1 con_paragraph">
              <div className="grid gap-0_2 ">
                {/* Available from */}
                { user_data?.available?.on_from && 
                <span className="green" ><strong>Available from {user_data.available.on_from}</strong></span>}                
                {/* Contract status */}
                { user_data?.contract?.status && 
                <span ><strong>{user_data.contract.status}</strong></span>}
                {/* Job offers received */}
                { user_data?.offers_received && 
                <span>Job offers received: {user_data.offers_received}</span>}
              </div>
              <div className="grid gap-0_2">
                {/* Passport */}
                { user_data?.passport?.state && <span>Passport: {user_data.passport.state}</span>}
                {/* Address */}
                { user_data?.address?.city && 
                  <Label icon="location_on" classes={["action_input"]}>
                    <span >Currently in: <strong>{user_data.address.city} </strong> </span>
                  </Label>
                }
                {/* Salary */}
                { user_data?.salary?.value && <span>Salary {user_data.salary.currency} {user_data.salary.value}</span>}
              </div>
            </div>


            {/* user general data */}
            {
              general_user_data.map((info)=>{
                return(
                  <div className="box_ingo grid gap-0_4">
                    {/* title */}
                    <span className="">
                        {info.status == false && <strong>NO</strong> } {info.label}
                    </span>
                    {/* text content */}
                    <div className="box_texts">
                      {
                        info?.texts?.map((text) => {
                          return (
                            <p>{text}</p>
                          )
                        })
                      }
                    </div>
                  </div>
                )
              })
            }
            {/* # user general data */}
            
          </div> {/* # column tow - main page content */}
          


        </div>
      </div>
      {/* # PROFILE PAGE */}
    </>
  )
}
