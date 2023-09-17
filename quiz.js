function check() {
    var ans = 0;
    var incans = 0;
    var ans1 = document.querySelector('input[name="question1"]:checked').value;
    if (ans1 === "Charles Babbage") {
      ans++;
    } else {
      incans++;
    }
    var ans2 = document.querySelector('input[name="question2"]:checked').value;
    if (ans2 === "Fortran") {
      ans++;
    } else {
      incans++;
    }
    var ans3 = document.querySelector('input[name="question3"]:checked').value;
    if (ans3 === "Cascading Style Sheets") {
      ans++;
    } else {
      incans++;
    }
    var ans4 = document.querySelector('input[name="question4"]:checked').value;
    if (ans4 === "1000 volt-amps") {
      ans++;
    } else {
      incans++;
    }
    var ans5 = document.querySelector('input[name="question5"]:checked').value;
    if (ans5 === "13") {
      ans++;
    } else {
      incans++;
    }
    
    alert("Correct answers: " + ans + " and Incorrect answers: " + incans);
  }