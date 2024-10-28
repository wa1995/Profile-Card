import "./App.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <header className="data">
        <Intro />
        <SkillList />
        <p></p>
      </header>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img className="avatar" src="image/wa.jpg" alt="WA" />
      {/* Use the imported image */}
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Waqas Akhtar</h1>
      <p>
        Web Developer and student at Udemy. When not coding or learning my
        course, I like to watch youtube tech videos, or to cook (and eat).
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="SkillList">
      <Skill Skill="React" emoji="💪" color="orangered" />
      <Skill Skill="HTML+CSS" emoji="💪" color="yellow" />
      <Skill Skill="JavaScript" emoji="💪" color="orange" />
      <Skill Skill="Programming" emoji="💪" color="green" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.Skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

export default App;
