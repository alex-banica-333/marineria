import GeneralButton from '/components/general_button.jsx'
import Label from '/components/label.jsx'
import CardGenInfo from '/components/card_general_info.jsx'



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
  {
    label: "Education, languages",
    texts: [
      "Nautical Institute",
      "Italian Spanish",
    ]
  },
  {
    label: "IMO Courses / Certifications",
    texts: [
      "Radar Obs./Plottin",
    ]
  },
  {
    label: "Boat license",
    texts: [
      "Power Boat Coastal (1981)",
    ]
  }
]

// past boardings list
const boardings_list = [
  {
    data: [
      {
        label: "Period",
        text: "04/2009 - 12/2019"
      },
      {
        label: "Unit",
        text: "28mt"
      },
      {
        label: "Role held",
        text: "Comandante "
      },
      {
        label: "Main Tasks",
        text: "Comandante"
      },
    ]
  },
  {
    data: [
      {
        label: "Period",
        text: "04/2009 - 12/2019"
      },
      {
        label: "Unit",
        text: "28mt"
      },
      {
        label: "Role held",
        text: "Comandante "
      },
      {
        label: "Main Tasks",
        text: "Comandante"
      },
    ]
  },
  {
    data: [
      {
        label: "Period",
        text: "04/2009 - 12/2019"
      },
      {
        label: "Unit",
        text: "28mt"
      },
      {
        label: "Role held",
        text: "Comandante "
      },
      {
        label: "Main Tasks",
        text: "Comandante"
      },
    ]
  }
]


// past boardings list
const personal_skills = [
  {
    data: [
      {
        text: "Ho conosciuto coste è insenature bellissime, le mie ambizioni è quello di fare sempre il mio dovere è fare divertire chi mi assume. Ho esperienza di navigazione dal 1982 ad oggi come il mio CV dimostra."
      },
      {
        label: "Further Abilities",
        text: "Marinaio motorista manutenzione di tutto ciò aderente alla barca (yacht) "
      },
      {
        label: "Soft skills",
        text: "Si ho esperienza lavorative si col comandate si con altri membri dell'equipaggio."
      },
      {
        label: "Organizational skills",
        text: "Si organizzazione per uscite in mare e organizzazione in cucina. "
      },
      {
        label: "Technical skills",
        text: "Son marinaio motorista è ho esperienza nei motori dalla manutenzione al primo invertendo in caso di guasto. "
      },
    ]
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
      <div className="con_profile_page base_width m_y_4 con_paragraph">
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

            {/* csv files */}
            <CardGenInfo classes={["gap-0_5"]} >
              <p className="grid" >
                {<strong className='text_slim' >Also in team with</strong>}
                il mio marinaio (CV unavailable on Marineria) 
              </p>
            </CardGenInfo>

          </div>  {/* # column one */}




          {/* column tow - main page content */}
          <div className="box_two grid gap-1_5">



            {/* role */}
            <div className='grid gap-0_4' >
              <Label icon="anchor" classes={["f-1_2"]} > {user_data?.position?.primary} </Label>
              <p>{user_data?.position?.secondary}</p>
            </div>
            


            {/* user general data */}
            <div className="grid-2 gap-1">
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



            {/* separation line */}
            <i className="sep_line" ></i>



            {/* user general data */}
            <div className="con_general_data grid-2 gap-1">
              {
                general_user_data.map((info, i)=>{
                  return(
                    <div className="box_info" key={i}>
                      {/* title */}
                      <span className="">
                          {info.status == false && <strong>NO</strong> } {info.label}
                      </span>
                      {/* text content */}
                      <div className="box_texts">
                        {
                          info?.texts?.map((text, j) => {
                            return (
                              <p  key={j} >{text}</p>
                            )
                          }) // # map()
                        }
                      </div>
                    </div>
                  )
                })
              }
            </div>



            {/* separation line */}
            <i className="sep_line" ></i>



            {/* # user general data */}

            {/* con boardings */}
            <div className='grid gap-0_5' >
              <Label  classes={[" size_l green"]}>Boardings carried out</Label>

              {/* boardings list */}
              <div className="grid gap-1">
                {
                  boardings_list.map((board, i) => {
                    return (
                      <CardGenInfo key={i} >
                        {
                          board.data.map((item, j) => {
                            return (
                              <p key={j} >{ item.label && `${item.label}:`} {item.text && item.text}</p>
                            )
                          }) // # map()
                        }
                      </CardGenInfo>
                    ) // # return()
                  }) // # map()
                }
                
              </div> {/* # boardings list */}

            </div> {/* # con boardings */}


            
            
            {/* con personal skills */}
            <div className='grid gap-0_5' >
              <Label  classes={[" size_l green"]}>Personal skills</Label>

              {/* boardings list */}
              <div className="grid gap-1">
                {
                  personal_skills.map((skills, i) => {
                    return (
                      <CardGenInfo key={i} classes={["extended", "gap-0_5"]} >
                        {
                          skills.data.map((item, j) => {
                            return (
                              <p key={j} className="grid" >
                                {item.label && <span className='text_slim' >{item.label}:</span>}
                                {item.text && item.text}
                              </p>
                            )
                          }) // # map()
                        }
                      </CardGenInfo>
                    ) // # return()
                  }) // # map()
                }
                
              </div> {/* # boardings list */}

            </div> {/* # con personal skills */}
            
          </div> {/* # column tow - main page content */}
          


        </div>
      </div>
      {/* # PROFILE PAGE */}
    </>
  )
}
