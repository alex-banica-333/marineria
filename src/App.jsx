import { useState } from 'react'
import MainInfo from '/components/main_info.jsx'
import CardGoTO from '/components/card_go_to.jsx'
import GeneralButton from '/components/general_button.jsx'
import Label from '/components/label.jsx'
import CardJob from '/components/card_job.jsx'
import './App.sass'

const suggestedProfiles = [
  { 
    link: "/user/58965",
    img_url: "https://www.marineria.it/PROFoto/6459613122023171241_A.jpg"
  },
  { 
    link: "/user/58965",
    img_url: "https://www.marineria.it/PROFoto/6459613122023171241_A.jpg"
  },
  { 
    link: "/user/58965",
    img_url: "https://www.marineria.it/PROFoto/6459613122023171241_A.jpg"
  },
  { 
    link: "/user/58965",
    img_url: "https://www.marineria.it/PROFoto/6459613122023171241_A.jpg"
  },
  { 
    link: "/user/58965",
    img_url: "https://www.marineria.it/PROFoto/6459613122023171241_A.jpg"
  },
  { 
    link: "/user/58965",
    img_url: "https://www.marineria.it/PROFoto/6459613122023171241_A.jpg"
  },
  { 
    link: "/user/58965",
    img_url: "https://www.marineria.it/PROFoto/6459613122023171241_A.jpg"
  },
  { 
    link: "/user/58965",
    img_url: "https://www.marineria.it/PROFoto/6459613122023171241_A.jpg"
  },
  { 
    link: "/user/58965",
    img_url: "https://www.marineria.it/PROFoto/6459613122023171241_A.jpg"
  },
  { 
    link: "/user/58965",
    img_url: "https://www.marineria.it/PROFoto/6459613122023171241_A.jpg"
  },
  { 
    link: "/user/58965",
    img_url: "https://www.marineria.it/PROFoto/6459613122023171241_A.jpg"
  },
  { 
    link: "/user/58965",
    img_url: "https://www.marineria.it/PROFoto/6459613122023171241_A.jpg"
  }
]

// candidats cateories
const categories = [
  {
    label: "Master (CoC)",
    link: "#",
  },
  {
    label: "Master (CoC)",
    link: "#",
  },
  {
    label: "Master (CoC)",
    link: "#",
  },
  {
    label: "Master (CoC)",
    link: "#",
  },
  {
    label: "Master (CoC)",
    link: "#",
  },
  {
    label: "Master (CoC)",
    link: "#",
  },
  {
    label: "Master (CoC)",
    link: "#",
  },
  {
    label: "Master (CoC)",
    link: "#",
  },
  {
    label: "Master (CoC)",
    link: "#",
  },
  {
    label: "Master (CoC)",
    link: "#",
  },
]

const lastsJobs = [
  {
    link: "#",
    date: "[Ref.: 10388] - Saturday, 14 September 2024",
    label: "ETO per M/Y privato 86M a bandiera Middle East",
    period: "Boarding period:  16/09/2024 - Permanent Contract",
    salary: "Salary: € 3,000-€ 4,000",
  },
  {
    link: "#",
    date: "[Ref.: 10388] - Saturday, 14 September 2024",
    label: "ETO per M/Y privato 86M a bandiera Middle East",
    period: "Boarding period:  16/09/2024 - Permanent Contract",
    salary: "Salary: € 3,000-€ 4,000",
  },
  {
    link: "#",
    date: "[Ref.: 10388] - Saturday, 14 September 2024",
    label: "ETO per M/Y privato 86M a bandiera Middle East",
    period: "Boarding period:  16/09/2024 - Permanent Contract",
    salary: "Salary: € 3,000-€ 4,000",
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


function App() {

  return (
    <>

    <div className="base_width con_paragraph m_t_3">
      <h1>Welcome aboard Marineria.it</h1>
    </div>
    


    {/* banner general users */}
    <div className="con_banner_cards base_width">
      <div className="box_banner_cards">
        {
          suggestedProfiles.map((card, i) => {
            return (
              <a href={card.link} terget="_blank" key={i}>
                <ImageCard img_url={card.img_url}  />
              </a>
            )
          })
        }
      </div>
    </div>
    {/* # banner general users */}



    {/* SECTION THE LAST REGISTRATIONS */}
    <div className="base_width">
      
      {/* label */}
      <a href="#">
        <MainInfo icon="groups" label="Le ultime registrazioni" />
      </a>

      {/* banner the last registrations */}
      <div className="con_section">
        <div className="box_section">

          {/* Card Register as Crew  */}
          <CardGoTO >
            <h3>
              Cerchi imbarco? <br></br>
              <a href="#">Entra in Marineria!</a>
            </h3>
            <p> Dal 2005. <br></br> Primi nel Mediterraneo. <br></br>  Con attenzione e rispetto per professionisti del mare.</p>
            
            <a href="#">
              <GeneralButton icon="anchor" label="Registrazione Equipaggio" />
            </a>
          </CardGoTO>

          {/* Card Register as Recruiter */}
          <CardGoTO href="https://www.marineria.it/img/Cards/Benetti_Now.jpg" >
            <h3>
              Cerchi Equipaggio? <br></br>
              <a href="#">Siamo qui per te.</a>
            </h3>
            <p> Da 18 anni,<br></br>
                il più veloce e famoso<br></br>
                servizio di ricerca,<br></br>
                su misura per te.
            </p>
            
            <a href="#">
              <GeneralButton icon="school" label="Registration Recruiters" />
            </a>
          </CardGoTO>

        </div>
      </div>

    </div>
    {/* # SECTION THE LAST REGISTRATIONS */}



    {/* ALL CANDIDATES */}
    <div className="base_width m_y_3">

      <div>
        <Label icon="search">Tutti i Candidati</Label>
      </div>

      {/* Candidates category list */}
      <div className="con_info">
        {
          categories.map((cat, i)=>{
            return (
              <a href={cat.link} key={i}>
                <MainInfo icon="person" label={cat.label} size="s" />
              </a>
            )
          })
        }
      </div>

    </div>
    {/* # ALL CANDIDATES */}



  {/* ALL CANDIDATES immediately available*/}
  <div className="base_width m_y_3">

    
      <Label icon="search"> Immediately available </Label>

      {/* Candidates category list */}
      <div className="con_info">
        {
          categories.map((cat, i)=>{
            return (
              <a href={cat.link} key={i}>
                <MainInfo icon="event_upcoming" label={cat.label} size="s" />
              </a>
            )
          })
        }
      </div>

    </div>
    {/* # ALL CANDIDATES immediately available*/}



    {/* LAST JOBS AVAILABLE */}
    <div className="base_width m_y_4">

      <a href="#">
        <Label icon="work"> Current Job List (19 offers) </Label>
      </a>

      <div className="con_jobs" >

        {
          lastsJobs.map((job, i)=>{
            return (
              <a href={job.link} key={i} >
                <CardJob job_data={job} />
              </a>
            )
          })
        }
        
      </div>

    </div>

    {/* # LAST JOBS AVAILABLE */}

    </>
  )

}

export default App
