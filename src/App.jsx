import hng from '../public/hng.jpg';


export default function App() {
  let date = new Date();
    date.getDay();
  
  const currentDayOfTheWeek = new Intl.DateTimeFormat(["en"], {
    weekday: "long" 
}).format(date);

const currentUTCTime = date.toUTCString().slice(16);  
  return (
    <main>
        <h1 id="slackUserName" ><span>Slack Name: </span> vincent6</h1>
        <img 
          id="slackDisplayImage"
          alt="slackUserName"            
          src={hng}
          className='w-40 h-50 rounded-xl'
        />
        <p id="currentDayOfTheWeek"><span>Current Day Of the Week: </span> 
          {currentDayOfTheWeek}
        </p>

        <p id="currentUTCTime"><span>Current UTC time: </span> {currentUTCTime} </p>

        <p id="myTrack"><span>Track: </span> FrontEnd</p>

        <a 
          id="githubURL" 
          href="https://github.com/vince4559/hngx_1" 
          target="_blank">
            Github URL
        </a>
      </main>
  )
}