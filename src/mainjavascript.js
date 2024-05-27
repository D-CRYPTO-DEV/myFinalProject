const jambQuestions = [
{
      id: 1,
      course: "chemistry",
      question: `Some metals are extracted from their ores after some
      preliminary treatments by electrolysis (L) some by
      thermal reaction(T) and some by a combination of both
      processes(TL). Which set-up in the following for the
      extraction of iron copper and aluminum is correct?`,
      option_A: "Iron (L), copper (L)maluminum(T)",
      option_B:"Iron (T), copper (L), aluminum(T)",
      option_C:"Ion (TL), copper (TL), aluminium(TL)",
      option_D:" Iron (L), copper (T), aluminium(T).",
    },
    {
        id: 2,
        course: "chemistry",
        question: `starting with CuO, a student gave the following
        statements as steps he employed.Which of these shows
        a flawin his report?`,
        option_A: "Some CuO was reacted with excess dilute H2SO4",
        option_B:"The solution was concentrated",
        option_C:`When the concentrate was cooled, crystals
        formed were removed by filtration.`,
        option_D:"The crystals werewashedwith very cold water",
    },
    {
        id: 3,
        course: "chemistry",
        question:`Which of the following seperation processes is most
        likely to yield high quality ethanol (>95%) from palm
        wine?` ,
        option_A:"Fractional disllation without a dehydrant",
        option_B:"Simple distillation without a dehydrant",
        option_C:"Fractional distillation with a dehydrant",
        option_D:"Column chromatography"
    },
    {
        id: 4,
        course: "chemistry",
        question:`Increasing the pressure of a gas` ,
        option_A:`lowers the average kinetic energy of the
        molecules`,
        option_B:`decreases the density of the gas`,
        option_C:`decreases the temperature of the gas`,
        option_D:`increases the density of the gas`,
    },
    {
        id: 5,
        course: "chemistry",
        question: `Stainless steel is an alloy of`,
        option_A:`Carbon, iron and lead`,
        option_B:`Carbon, ion and chromium`,
        option_C:`Carbon, iron and silver`,
        option_D:`Carbon iron and copper`
    },
    {
    id: 1,
    course: "Mathematics",
    question: `The letters of the word MATRICULATION are cut and
    put into a box. One of the letter is drawn at randomfrom
    the box. Find the probability of drawing a vowel.`,
    option_A: "2/13",
    option_B:"5/13",
    option_C:"6/13",
    option_D:" 8/13",
    },
  {
      id: 2,
      course: "Mathematics",
      question: `If a rod of length 250cm is measured as 255cm longer in
      error, what is the percentage error in measurement?`,
      option_A: "55",
      option_B:"10",
      option_C:`5`,
      option_D:"4",
  },
  {
      id: 3,
      course: "Mathematics",
      question:`Correct each of the number 59.81789 and 0.0746829 to
      three significant figures andmultiply them, giving your
      answer to three significant figures` ,
      option_A:"4.46",
      option_B:"4.48",
      option_C:"4.47",
      option_D:"4.49"
  },
  {
      id: 4,
      course: "Mathematics",
      question:`If (2/3)m (3/4)n = 256/729, find thevalues ofm and n` ,
      option_A:`m=4,n= 2`,
      option_B:`m=-4,n=-2`,
      option_C:`m=-4,n= 2`,
      option_D:`m=4,n=-2`,
  },
  {
      id: 5,
      course: "Mathematics",
      question: `Factorize completely 81a4 - 16b4`,
      option_A:`(3a + 2b) (2a - 3b) (9a2 + 4b2)`,
      option_B:`(3a - 2b) (2a - 3b) (4a2 - 9b2)`,
      option_C:`(3a - 2b) (3a - 2b) (9a2 + 4b2)`,
      option_D:`(3a - 2b) (2a - 3b) (9a2 + 4b2)`
  },
  {
    id: 1,
    course: "Physics",
    question: `If the pressure on 1000cm3 of an ideal gas is
    doubled while its Kelvin temperature is halved,
    then the new volume of the gas will become`,
    option_A: "25",
    option_B:"50",
    option_C:"100",
    option_D:" 200",
    },
  {
      id: 2,
      course: "Physics",
      question: `A ship traveling towards a cliff receives the echo
      of its whistle after 3.5 seconds.Ashort while later,
      it receives the echo after 2.5 seconds. If the speed
      of sound in air under the prevailing conditions is
      250m s-1, howmuch closer is the ship to the cliff?`,
      option_A: "10",
      option_B:"125",
      option_C:`175`,
      option_D:"350",
     },
    {
      id: 3,
      course: "Physics",
      question:`The force with which an object is attracted to the
      earth is called its` ,
      option_A:"Acceleration",
      option_B:"Mass",
      option_C:"Gravity",
      option_D:"Impulse"
  },
  {
      id: 4,
      course: "Physics",
      question:`The refractive index of a liquid is 1.5. If the velocity
      of light in vacuum is 3.0 x 108m s-1, the velocity of
      light in the liquid is` ,
      option_A:`1.5 x 103m s-1`,
      option_B:` 2.0 x 103m s-1`,
      option_C:`3.0 x 103m s-1`,
      option_D:`4.5 x 103m s-1`,
  },
  {
      id: 5,
      course: "Physics",
      question: `If the relative density of a metal is 19, what will be
      themass of 20cm3 of the metal when immersed in
      water?`,
      option_A:`380g`,
      option_B:`400g`,
      option_C:`360g`,
      option_D:`39g`
  }]


const countDownTimer = document.getElementById("timer");
const fullPage = document.getElementsByTagName("body")
const mainContent = document.getElementById("qbody");
const optionA = document.getElementById("QA");
const optionB = document.getElementById("QB");
const optionC = document.getElementById("QC");
const optionD = document.getElementById("QD");
let qnumber = document.getElementById("QNUM");
let subject = document.getElementById("subject");
var startingMinutes = 30;
var time = startingMinutes * 60;
var target = 1;
counter(); // Call counter once to avoid the initial delay
var timerInterval = setInterval(counter, 1000);

function counter() {
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;

    countDownTimer.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    if (time <= 0) {
        clearInterval(timerInterval); // Stop the timer when it reaches zero
    } else {
        time--;
    }
}
const nextbtn = document.getElementById("Nextbtn");
var selectedId = 0;
window.addEventListener("DOMContentLoaded", change());
nextbtn.addEventListener("click",()=>{
    var selectedId = 1;
    if(selectedId <= jambQuestions.length - 1){
        change();
    }
    else{
        fullPage.innerHTML =` <nav class="bg-blue-800">
        <ul class="mx-20 py-4  text-white flex justify-between">
           <li id="subject">
                Djambite
           </li>
           <li>
                these are the questions you are yet to answer!
           </li>
        </ul>
    </nav>
    <div class="h-4 bg-orange-400">
    </div>
    <main>
        <div class="flex m-auto justify-between h-5 w-9/12 my-10">
            <button class="rounded-3xl bg-blue-700 size-12">1</button>
        </div>
    </main>`
    };
});

function change(){ 
    var questionID = jambQuestions[selectedId];
    mainContent.innerHTML = questionID.question;
    optionA.innerHTML =questionID.option_A;
    optionB.innerHTML =questionID.option_B;
    optionC.innerHTML =questionID.option_C;
    optionD.innerHTML =questionID.option_D;
    qnumber.innerHTML = questionID.id;
    selectedId++;
    subject.innerHTML = questionID.course;
    console.log(jambQuestions[1].id) // since question ids start from 1
}
console.log(jambQuestions.length)



