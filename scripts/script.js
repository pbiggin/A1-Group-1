//start of carousel script
const carouselItems = document.querySelectorAll(".carousel-item");
let currentIndex = 0;

// hides images in carousel
function showImage(index) {
  carouselItems.forEach((item) => {
    item.style.display = "none";
  });

  //showing slide at set index
  carouselItems[index].style.display = "block";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showImage(currentIndex);
}

function previousImage() {
  currentIndex =
    (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  showImage(currentIndex);
}

showImage(currentIndex);
//end of carousel script

//learn run animation script

function moveRunner() {
  let id = null;
  const runnerElement = document.getElementById("run-animation");
  const runDiv = document.getElementById("run-container").offsetWidth;
  let runnerPos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);

  function frame() {
    if (runnerPos == runDiv) {
      clearInterval(id);
    } else {
      runnerPos++;
      runnerElement.style.left = runnerPos + "px";
    }
  }
}




document.addEventListener('DOMContentLoaded', function() {

   function resetInputFields() {
    document.getElementById('battingRuns').value = '';
    document.getElementById('battingAvg').value = '';
    document.getElementById('battingDismissed').value = '';
    document.getElementById('bowlingRuns').value = '';
    document.getElementById('bowlingWickets').value = '';
    document.getElementById('bowlingAvg').value = '';
}
  // This section allows for each calculator to appear if their button is clicked
  document.getElementById('battingTab').addEventListener('click', function() {
      document.getElementById('battingCalc').style.display = 'block';
      document.getElementById('bowlingCalc').style.display = 'none';
      resetInputFields();
  });

  document.getElementById('bowlingTab').addEventListener('click', function() {
      document.getElementById('battingCalc').style.display = 'none';
      document.getElementById('bowlingCalc').style.display = 'block';
      resetInputFields();
  });
});




  // This section is for the Batting Calculator
  function calculateBattingAverage() {
    let runs = parseInt(document.getElementById('battingRuns').value);
    let avg = parseFloat(document.getElementById('battingAvg').value);
    let dismissed = parseInt(document.getElementById('battingDismissed').value);
  
   
  
    let Answer = document.getElementById('battingResult');
    

     //Ensures only two fields are entered
    if ((runs && avg && dismissed)) {
      Answer.innerText = "Please only enter two values.";
      return;
    }
    if (!runs && !avg && !dismissed) {
      Answer.innerText = "Please enter two fields.";
      return;
    }
    if ((runs && !avg && !dismissed) || (!runs && avg && !dismissed) || (!runs && !avg && dismissed)) {
      Answer.innerText = "Please enter exactly two fields.";
      return;
    }
  
  
    if (runs && avg) {
      let calcDismissed = runs / avg;
      Answer.innerText = "Times dismissed is " + calcDismissed.toFixed(2);
    } else if (avg && dismissed) {
      let calcRuns = avg * dismissed;
      Answer.innerText = "Total Runs scored is " + calcRuns.toFixed(2);
    } else if (runs && dismissed) {
      let calcAvg = runs / dismissed;
      Answer.innerText = "Batting Average is " + calcAvg.toFixed(2);
    }
  }
  





  // This section is for the Bowling Calculator
  function calculateBowlingAverage() {
    let runs = parseInt(document.getElementById('bowlingRuns').value);
    let wickets = parseInt(document.getElementById('bowlingWickets').value);
    let avg = parseFloat(document.getElementById('bowlingAvg').value);
  
  
    let Answer = document.getElementById('bowlingResult');

  
    //Ensures only two fields are entered
    if ((runs && wickets && avg)) {
      Answer.innerText = "Please only enter two fields.";
      return;
    }

    if (!runs && !wickets && !avg) {
      Answer.innerText = "Please enter two fields.";
      return;
    }

    if ((runs && !wickets && !avg) || (!runs && wickets && !avg) || (!runs && !wickets && avg)) {
      Answer.innerText = "Please enter exactly two fields.";
      return;
    }


  
 
    if (runs && wickets) {
      let calcAvg = runs / wickets;
      Answer.innerText = "Bowling Average is " + calcAvg.toFixed(2);
    } else if (wickets && avg) {
      let calcRuns = wickets * avg;
      Answer.innerText = "Runs against is " + calcRuns.toFixed(2);
    } else if (runs && avg) {
      let calcWickets = runs / avg;
      Answer.innerText = "Wickets taken is " + calcWickets.toFixed(2);
    }

    

  }
  
  
  




