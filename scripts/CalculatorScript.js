

function resetInputFields() {
  document.getElementById('battingRuns').value = ''; // Empty's all user-inputs when tab is selected
  document.getElementById('battingAvg').value = '';
  document.getElementById('battingDismissed').value = '';
  document.getElementById('battingReq').innerText = '';
  document.getElementById('battingResult').innerText = ''; 
  document.getElementById('bowlingRuns').value = '';
  document.getElementById('bowlingWickets').value = '';
  document.getElementById('bowlingAvg').value = '';
  document.getElementById('bowlingReq').innerText = '';
  document.getElementById('bowlingResult').innerText = '';
}

// This section allows for each calculator to appear only if their button is clicked
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





  // This section is the start of the Batting Calculator
  function calculateBattingAverage() {
    let runs = parseInt(document.getElementById('battingRuns').value);
    let avg = parseFloat(document.getElementById('battingAvg').value);
    let dismissed = parseInt(document.getElementById('battingDismissed').value);
    let requirement = document.getElementById('battingReq');
    let Answer = document.getElementById('battingResult');
  
   
  
    
    
    

     //Ensures only two fields are entered and informs user
    
    if ((runs && avg && dismissed)) {
      Answer.innerText = "";
      requirement.innerText = "Please only enter two values.";
      return;
    }
    if (!runs && !avg && !dismissed) {
      Answer.innerText = "";
      requirement.innerText = "Please enter two fields.";
      return;
    }
    if ((runs && !avg && !dismissed) || (!runs && avg && !dismissed) || (!runs && !avg && dismissed)) {
      Answer.innerText = "";
      requirement.innerText = "Please enter exactly two fields.";
      return;
    }
  
   
  // If two inputs exist, will do calculation and produce answer
  
    if (runs && avg) {
      requirement.innerText = "";
      let calcDismissed = runs / avg;
      Answer.innerText = "Times dismissed is " + calcDismissed.toFixed(2);
      return;
    } else if (avg && dismissed) {
      requirement.innerText = "";
      let calcRuns = avg * dismissed;
      Answer.innerText = "Total Runs scored is " + calcRuns.toFixed(2);
      return;
    } else if (runs && dismissed) {
      requirement.innerText = "";
      let calcAvg = runs / dismissed;
      Answer.innerText = "Batting Average is " + calcAvg.toFixed(2);
      return;
    }
  }
  





  // This section is the start of the Bowling Calculator
  function calculateBowlingAverage() {
    let runs = parseInt(document.getElementById('bowlingRuns').value);
    let wickets = parseInt(document.getElementById('bowlingWickets').value);
    let avg = parseFloat(document.getElementById('bowlingAvg').value);
    let requirement = document.getElementById('bowlingReq');
    let Answer = document.getElementById('bowlingResult');
  
  
   

  
    //Ensures only two fields are entered and informs user
    
    if ((runs && wickets && avg)) {
      Answer.innerText = "";
      requirement.innerText = "Please only enter two fields.";
      return;
    }

    if (!runs && !wickets && !avg) {
      Answer.innerText = "";
      requirement.innerText = "Please enter two fields.";
      return;
    }

    if ((runs && !wickets && !avg) || (!runs && wickets && !avg) || (!runs && !wickets && avg)) {
      Answer.innerText = "";
      requirement.innerText = "Please enter exactly two fields.";
      return;
    }


  // If two inputs exist, will do calculation and produce answer
 
    if (runs && wickets) {
      requirement.innerText = "";
      let calcAvg = runs / wickets;
      Answer.innerText = "Bowling Average is " + calcAvg.toFixed(2);
      return;
    } else if (wickets && avg) {
      requirement.innerText = "";
      let calcRuns = wickets * avg;
      Answer.innerText = "Runs against is " + calcRuns.toFixed(2);
      return;
    } else if (runs && avg) {
      requirement.innerText = "";
      let calcWickets = runs / avg;
      Answer.innerText = "Wickets taken is " + calcWickets.toFixed(2);
      return;
    }

    

  }
  
  