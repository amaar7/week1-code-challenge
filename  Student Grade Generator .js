function calculateGrade(marks){
    if(marks > 79)
    return 'A';
    else if(marks >=60 && marks <=79){
        return 'B';
    }
    else if(marks >=50 && marks <60){
        return 'C';
    }
    else if(marks >=40 && marks <50){
        return 'D';
    }
    else {
        return 'E';
    }
}
const marks = 30;

const grade = calculateGrade(marks);

console.log(`Marks: ${marks}, Grade: ${grade}`);
