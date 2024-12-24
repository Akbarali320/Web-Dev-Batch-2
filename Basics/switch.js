function gradeStudent() {
    var marks = 99;
  
    switch (true) {
      case (marks >= 90):
        return("Grade: A+");
        break;
      case (marks >= 80):
        return("Grade: A");
        break;
      case (marks >= 70):
        return("Grade: B");
        break;
      case (marks >= 60):
        return("Grade: c");
        break;
      case (marks >= 50):
        return("Grade: d");
        break;
      case (marks >= 40):
        return("Grade: E");
        break;
      default:
        return("fail");
    }
  }
  console.log ("your grade is:", gradeStudent());
  