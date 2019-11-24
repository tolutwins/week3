function Add(x, y) {
    return x + y;
}

var objStudent = {
    'firstname': 'Folarin',
    'middlename': 'emeka',
    'lastname': 'ibeji',
    'sex': 'male',
    'dob': '2019/11/11',
    'age': 12
};

function getName(x) {
    console.log(x.firstname + " " + x.lastname);
}

// alert(objStudent.age);

// write a function called getName that will print out a student's firstname and lastname

// getName(objStudent); // Folarin ibeji

// var sum = 0;
// var y = [1, 2, 3, 4, 6, 7, 8, 9, 11, 22];
// for(var i = 0; i < y.length; i++) {
//     console.log(`The ${i}th value in array y is ${y[i]}`);
//     sum = sum + y[i];
// }
// console.log(sum);

// i = i + 1; // i++
// sum = sum + 1; // sum += 1
 
var arrStudents = [
    {
        'firstname': 'Tolu',
        'lastname': 'Ifenyinwa'
    },
    {
        'firstname': 'Bolu',
        'lastname': 'Hassan'
    },
    {
        'firstname': 'Olise',
        'lastname': 'Danladi'
    }
];

// loop through arrStudents and get the names of every student
for(var i = 0; i < arrStudents.length; i++){
    getName(arrStudents[i]);
}

var studentObj = {
    'name': 'Folarin Adeniji',
    'Courses': [],
    'CalculateScores': GetScores(this.Courses)
};

function GetScores(x) {
    console.log('Running');
    var total = 0;
    for(var i = 0; i < x.length; i++){
        total += x;
    }
    return total;
}