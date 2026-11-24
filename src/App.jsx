import React,{useState,useEffect,useRef} from "react";
import PHOTO from "./assets/photo.jpg";
import PROJ from "./assets/project.jpg";
const h=React.createElement;

const LINKEDIN="https://www.linkedin.com/in/sikhakolli-udaya-sri-999852338", GITHUB="https://github.com/sikhakolliudayasri";
const EMAIL="sikhakolliudayasri@gmail.com", PHONE="+91 8919204200";

function Reveal({children,d=0,cls=""}){
  const r=useRef();
  useEffect(()=>{const o=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");o.disconnect()}}),{threshold:.1});o.observe(r.current);return()=>o.disconnect()},[]);
  return h("div",{ref:r,className:"rv "+cls,style:{transitionDelay:d+"ms",height:cls==="fh"?"100%":undefined}},children);
}
const Head=(n,l,a,b)=>h(Reveal,null,h("div",{className:"lab"},n+" / "+l),h("h2",{className:"big"},a," ",h("span",{className:"sky"},b)));
const Ico=t=>h("div",{className:"ico"},t);

function Nav(){
  const [o,setO]=useState(false);
  const L=["About","Skills","Experience","Projects","Education","Contact"];
  return h("nav",null,h("a",{href:"#top",className:"logo"},h("i",null,"U"),"UDAYA SRI",h("span",{className:"sky"},".")),
    h("button",{className:"burger","aria-label":"Menu",onClick:()=>setO(!o)},o?"\u2715":"\u2630"),
    h("ul",{className:o?"open":"",onClick:()=>setO(false)},L.map(l=>h("li",{key:l},h("a",{href:"#"+l.toLowerCase()},l)))));
}
function Hero(){
  return h("section",{className:"hero",id:"top"},
    h("div",{className:"rv in"},
      h("div",{className:"open-tag"},h("span",{className:"dot"}),"Open to internships & entry-level roles"),
      h("h1",null,"Hi, I’m ",h("span",{className:"grad"},"Udaya Sri."),h("br"),"I build things for ",h("span",{className:"out"},"the web.")),
      h("p",null,"Fresher and aspiring Full Stack Developer. B.Tech Artificial Intelligence & Data Science student building web applications with React, Node.js and MongoDB."),
      h("div",{className:"btns"},
        h("a",{href:"#projects",className:"btn p"},"Explore my work ↗"),
        h("a",{href:"#contact",className:"btn"},"✉ Get in touch")),
      h("div",{className:"meta-row"},h("span",null,"🎓 B.Tech · Expected 2028"),h("span",null,"⚡ MERN Stack Intern")),
      h("div",{className:"scroll"},"SCROLL TO EXPLORE ↓")),
    h("div",{className:"rv in",style:{transitionDelay:"200ms",position:"relative",justifySelf:"center",width:"min(380px,100%)"}},
      h("div",{className:"pcard"},
        h("div",{className:"hd"},h("span",null,"PROFILE_001"),h("b",null,"● AVAILABLE")),
        h("img",{src:PHOTO,alt:"Sikhakolli Udaya Sri"}),
        h("div",{className:"chipf"},h("span",{className:"sky"},"</> "),"Full Stack Developer"))));
}
function Stats(){
  const S=[["9.0","/10","B.Tech CGPA"],["2028","","Expected graduation"],["01","","Full-stack project"],["04","","Certifications"]];
  return h(Reveal,null,h("div",{className:"stats"},S.map(s=>h("div",{className:"stat",key:s[2]},h("b",null,s[0],h("small",null,s[1])),h("span",null,s[2])))));
}
function About(){
  const M=[["Focus","Full Stack Development"],["Stack","MERN"],["Status","Open to internships"]];
  return h("section",{id:"about"},
    h(Reveal,null,h("div",{className:"lab"},"01 / A little introduction"),h("h2",{className:"big"},"Fresh mind. ",h("span",{className:"sky"},"Full-stack ambition."))),
    h(Reveal,null,h("p",{className:"lead"},"I’m a B.Tech student in ",h("span",{className:"sky"},"Artificial Intelligence and Data Science"),", aspiring to build a career as a Full Stack Developer.")),
    h(Reveal,null,h("p",{className:"txt"},"I have hands-on experience with web development and programming fundamentals. Through a structured MERN stack internship with NPTEL, IIT Ropar, and my own project work, I’ve learned how front-end interfaces and back-end services come together to solve real problems.")),
    h(Reveal,null,h("p",{className:"txt"},"I’m a quick learner looking for an entry-level or internship role where I can apply my skills, keep growing, and contribute to a product-focused team.")),
    h("div",{className:"grid",style:{marginTop:30}},M.map((m,i)=>h(Reveal,{key:m[0],d:i*100},h("div",{className:"card mini"},h("small",null,m[0]),h("b",null,m[1]))))));
}
function Skills(){
  const G=[["</>","Programming",["Python","Java","C"]],["◎","Web technologies",["HTML","CSS","JavaScript"]],["◇","Frameworks & libraries",["React","Node.js","Express.js","Django"]],["▤","Databases",["SQL","MongoDB (CRUD)"]],[">_","Developer tools",["Git","GitHub","VS Code","Google Colab"]],["∑","Core concepts",["OOP","Data Structures","Problem Solving"]]];
  return h("section",{id:"skills"},Head("02","My toolkit","Skills &","technologies."),
    h("div",{className:"grid"},G.map((g,i)=>h(Reveal,{key:g[1],d:i*80,cls:"fh"},h("div",{className:"card",style:{height:"100%"}},Ico(g[0]),h("h3",null,g[1]),h("div",{className:"chips"},g[2].map(c=>h("span",{className:"chip",key:c},c))))))));
}
function Experience(){
  const P=["Built full-stack web modules using MongoDB, Express.js, React and Node.js, implementing client-side interfaces and server-side logic.","Designed and integrated REST APIs, applying GET, POST, PUT and DELETE across CRUD-based exercises.","Modeled MongoDB data schemas and implemented CRUD operations for backend data-handling assignments.","Worked with WebSockets and LLM-based tools through hands-on exercises in modern web development."];
  return h("section",{id:"experience"},Head("03","Where I’ve learned","Hands-on","experience."),
    h(Reveal,null,h("div",{className:"card"},
      h("div",{className:"dates"},h("span",null,"DEC 2025"),h("span",null,"JAN 2026")),
      h("div",{className:"badge"},"INTERNSHIP"),
      h("h3",{style:{fontSize:"1.5rem"}},"MERN Stack Winter Intern"),
      h("div",{style:{color:"var(--mute)"}},"NPTEL, IIT Ropar · MERN Stack"),
      h("ul",{className:"ck"},P.map(p=>h("li",{key:p},p))))));
}
function Projects(){
  return h("section",{id:"projects"},Head("04","Selected work","Projects that","make an impact."),
    h(Reveal,null,h("div",{className:"card pj"},
      h("div",{className:"frame",style:{margin:0}},h("div",{className:"bar"},h("i"),h("i"),h("i")),h("img",{src:PROJ,alt:"FoodLoop.ai dashboard"})),
      h("div",null,
        h("div",{className:"badge"},"FULL-STACK · WEB + ANDROID"),
        h("h3",{style:{fontSize:"1.8rem"}},"FoodLoop.ai"),
        h("div",{className:"chips"},["React","FastAPI","SQLite","Android"].map(c=>h("span",{className:"chip",key:c},c))),
        h("ul",{className:"ck"},
          h("li",null,"Connects restaurants and supermarkets that have surplus food with shelters and charities, so good food isn’t wasted."),
          h("li",null,"Food claiming with a reason, donor approve/decline, and a digital pickup pass to track each handoff from pickup to delivery."),
          h("li",null,"Smart matching that ranks donations against recipient needs by time, quantity and distance, shown on a live map.")),
        h("div",{className:"btns",style:{marginBottom:0}},h("a",{href:GITHUB,target:"_blank",rel:"noopener",className:"btn p"},"View on GitHub ↗"))))));
}
function Education(){
  const E=[["2024 — 2028 · EXPECTED","B.Tech — Artificial Intelligence & Data Science","Vasireddy Venkatadri Institute of Technology","CGPA","9.0","/10"],["2022 — 2024","Intermediate — MPC","Vignan Junior College","Percentage","97","%"],["2022","Secondary School (SSC)","Dreamz High School · Board of Secondary Education"]];
  const C=[["Django Web Development","Skill India","https://drive.google.com/file/d/1qEHsJ-rYsEkFB0ru5bGaEgZFK-FTwD2G/view?usp=sharing"],["Programming in Java","NPTEL, IIT Kharagpur","https://drive.google.com/file/d/1xU-bwjI1O9-_XRVYSiUE_-Nprrgi6nTi/view?usp=sharing"],["Python for Beginners","SkillUp","https://drive.google.com/file/d/1HXMBSDgTZRd-DXQaiizYT-3ORrfIs-Us/view?usp=sharing"],["Programming in C","Vignesh Computer Education","https://drive.google.com/file/d/1gC8bz-QB7ilz7QD6bVOeDsW8WzSna6FP/view?usp=sharing"]];
  return h("section",{id:"education"},Head("05","Academic background","Education &","certifications."),
    h("div",{style:{display:"grid",gap:18}},E.map((e,i)=>h(Reveal,{key:e[1],d:i*100},h("div",{className:"card edu"},
      h("div",{className:"top"},h("div",null,h("h3",{style:{fontSize:"1.35rem"}},e[1]),h("div",{style:{color:"var(--mute)",marginTop:6}},e[2])),h("span",{className:"yr"},e[0])),
      e[3]&&h("div",{className:"sc"},h("span",null,e[3]),h("b",null,e[4],h("small",null," "+e[5]))))))),
    h("div",{style:{marginTop:64}},h(Reveal,null,h("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:10}},h("h3",{style:{fontSize:"1.6rem"}},"Certifications"),h("span",{style:{color:"var(--mute)",fontSize:".85rem"}},"04 credentials"))),
      C.map((c,i)=>h(Reveal,{key:c[0],d:i*70},h("a",{href:c[2],target:"_blank",rel:"noopener",className:"cert"},h("em",null,"0"+(i+1)),h("span",null,c[0]," — ",h("span",{style:{color:"var(--mute)"}},c[1])),h("i",null,"↗"))))),
    h("div",{style:{marginTop:64}},h(Reveal,null,h("h3",{style:{fontSize:"1.6rem",marginBottom:18}},"Leadership & activities"),
      h("div",{className:"card"},h("h3",null,"Member, National Service Scheme (NSS)"),h("p",{className:"txt",style:{margin:"8px 0 0"}},"Participated in community service initiatives, strengthening teamwork, leadership and communication skills.")))));
}
function Contact(){
  const R=[["✉","Email",EMAIL,"mailto:"+EMAIL],["✆","Phone",PHONE,"tel:"+PHONE.replace(/ /g,"")],["in","LinkedIn","sikhakolli-udaya-sri",LINKEDIN],["GH","GitHub","sikhakolliudayasri",GITHUB]];
  return h("section",{id:"contact"},Head("06","Get in touch","Have an opportunity","or idea? Let’s connect."),
    h(Reveal,null,h("p",{className:"txt"},"I’m looking for internships and entry-level software development roles, and always happy to connect with people who enjoy building useful technology."),
      h("div",{className:"btns"},h("a",{href:"mailto:"+EMAIL,className:"btn p"},"Say hello ↗"))),
    R.map((r,i)=>h(Reveal,{key:r[1],d:i*70},h("a",{href:r[3],target:r[3].startsWith("http")?"_blank":undefined,rel:"noopener",className:"crow"},h("div",{className:"ico"},r[0]),h("span",null,h("small",null,r[1]),r[2]),h("i",{style:{fontStyle:"normal",color:"var(--mute)"}},"↗")))));
}
function App(){
  useEffect(()=>{const b=document.getElementById("bar");const f=()=>{b.style.width=(scrollY/(document.body.scrollHeight-innerHeight)*100)+"%"};addEventListener("scroll",f);return()=>removeEventListener("scroll",f)},[]);
  return h(React.Fragment,null,h("div",{id:"bar"}),h(Nav),h(Hero),h(Stats),h(About),h(Skills),h(Experience),h(Projects),h(Education),h(Contact),h("footer",null,"© 2026 Sikhakolli Udaya Sri · Built with React"));
}

export default App;
