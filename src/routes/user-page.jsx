import GeneralButton from '/components/general_button.jsx'
import Label from '/components/label.jsx'


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
      <div className="con_profile_page base_width">
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
          <div className="box_two grid gap-0_4">
            {/* role */}
            <Label icon="anchor" label="Marinaio" />
            <p>Mozzo Ormeggiatore</p>

            {/* user general data */}
            <div className="grid-2 gap-1">
              <div className="grid gap-0_4 con_paragraph">
                {/* Available from */}
                <span className="green" ><strong>Available from 09/22/2024</strong></span>
                {/* Contract status */}
                <span><strong>Currently under contract</strong></span>
                {/* Job offers received */}
                <span>Job offers received: 0</span>
              </div>
              <div className="grid gap-0_5">
                {/* Passport */}
                <span>Passport: Italy</span>
                {/* Position */}
                <span>Currently in: Palau </span>
                {/* Salary */}
                <span>Salary € Not declared</span>
              </div>
            </div>

          </div> {/* # column tow - main page content */}


        </div>
      </div>
      {/* # PROFILE PAGE */}
    </>
  )
}
