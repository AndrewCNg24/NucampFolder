class Student {
    constructor(name, email, community) {
    this.name = name;
    this.email = email;
    this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students) {
        this.name = name;
        this.level = level;
        this.students = new Array;
    }


    registerStudent(student) {

        if (this.students.length == 0) {
            this.students.push(student);
            console.log(`Congratulations, you're the first student to register for this camp! Welcome ${student.email}!`)
            console.log(this.students);
        }

        else {
            for (var i = 0; i < this.students.length; i++) {
                if (student.email == this.students[i].email) {
                    console.log(`The email ${student.email} has already been used please try another!`);
                    console.log(this.students);
                    break;
                }
    
                else if (i == (this.students.length - 1) && student.email != this.students[i].email) {
                    this.students.push(student);
                    console.log(`You have been registered! Welcome ${student.email}!`);
                    console.log(this.students);
                    break;
                }
    
            }
        }
    }
}