function gradeStudent() {

    if (marks >= 90 && marks <=100) {
      return ("Grade: A+");
    } else if (marks >= 80 &&  marks<=90) {
        return ("Grade: A");
    } else if (marks >= 70  && marks<=80) {
        return ("Grade: B+");
    } else if (marks >= 60 && marks <=70) {
        return ("Grade: B");
    } else if (marks >= 50 && marks <=60) {
        return ("Grade: C+");
    } else if (marks >= 40 && marks<=50) {
        return ("Grade: C");
    } else {
        return ("Grade: F");
    }
      marks = prompt("Enter the student's marks (out of 100)");
    
  }
  
  gradeStudent();
  
