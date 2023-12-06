const express = require('express');
const app = express();
const server = require('http').createServer(app);
const mysql = require('mysql');
const bodyParser = require('body-parser');
app.use(bodyParser.json());



const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'register'
    })

connection.connect((err) => {
    if (!err) {
        console.log('database connected successfully')
    }
    else {
        console.log('connection failed pls check');
        console.log(err)
    }
}
)



app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


//   Registration Page post api
app.post('/registration', (req, res) => {

    console.log(req.body);

    connection.query('insert into user(firstname,email,password,roletype)  values("' + req.body.firstname + '","' + req.body.email + '","' + req.body.password + '","' + req.body.roletype + '")', (err, row, fields) => {

        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })

})

// inserting data into tutor table
app.post('/tut', (req, res) => {

    console.log(req.body);

    connection.query('insert into tutor(firstname,email,password,roletype) values("' + req.body.firstname + '","' + req.body.email + '","' + req.body.password + '","' + req.body.roletype + '") ', (err, row, fields) => {

        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })

})

// inserting data into student table
app.post('/stud', (req, res) => {

    console.log(req.body);

    connection.query('insert into student(firstname,email,password,roletype) values("' + req.body.firstname + '","' + req.body.email + '","' + req.body.password + '","' + req.body.roletype + '")', (err, row, fields) => {

        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })

})




// Login post api
app.post('/login', (req, res) => {

    console.log(req.body);

    connection.query('select * from user where email="' + req.body.email + '" and password="' + req.body.password + '"', (err, row, fields) => {

        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })



})

// Tutor Login post api    
app.post('/tutorlogin', (req, res) => {

    console.log(req.body);

    connection.query('select * from tutor where email="' + req.body.email + '" and password="' + req.body.password + '"', (err, row, fields) => {

        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })



})

// Student Login post api        
app.post('/studentlogin', (req, res) => {

    console.log(req.body);

    connection.query('select * from student where email="' + req.body.email + '" and password="' + req.body.password + '"', (err, row, fields) => {

        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })



})

// Update post api

app.post('/updateuser/:id', (req, res) => {

    console.log(req.body);

    connection.query('update  `student` set firstname="' + req.body.firstname + '",email="' + req.body.email + '",password="' + req.body.password + '",course="' + req.body.course + '",content="' + req.body.content + '",start="' + req.body.start + '",end="' + req.body.end + '",project="' + req.body.project + '",actual="' + req.body.actual + '",total="' + req.body.total + '",discount="' + req.body.discount + '",paid="' + req.body.paid + '",remaining="' + req.body.remaining + '", roletype="' + req.body.roletype + '", assigned_to="' + req.body.assigned_to + '",status="' + req.body.status + '",fee_detail="' + req.body.fee_detail + '",paymode="' + req.body.paymode + '" where id="' + req.params.id + '"', (err, row, fields) => {


        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })

})

app.post('/updateuserpay/:id', (req, res) => {

    console.log(req.body);

    connection.query('update  `student` set paymode="' + req.body.paymode + '" where id="' + req.params.id + '"', (err, row, fields) => {


        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })

})

app.post('/tutorupdateuser/:id', (req, res) => {

    console.log(req.body);

    connection.query('update  `tutor` set firstname="' + req.body.firstname + '",email="' + req.body.email + '",password="' + req.body.password + '",course="' + req.body.course + '",start_time="' + req.body.start_time + '",end_time="' + req.body.end_time + '", roletype="' + req.body.roletype + '", assigned_to="' + req.body.assigned_to + '",status="' + req.body.status + '" where id="' + req.params.id + '"', (err, row, fields) => {


        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })

})

app.post('/fullstackupdate/:content', (req, res) => {

    console.log(req.body);

    connection.query('update  `courses` set course="' + req.body.course + '",content="' + req.body.content + '",date="' + req.body.date + '",task_status="' + req.body.task_status + '" , test="' + req.body.test + '" where content="' + req.params.content + '"', (err, row, fields) => {


        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })

})
app.post('/testingupdate/:content', (req, res) => {

    console.log(req.body);

    connection.query('update  `testing` set course="' + req.body.course + '",content="' + req.body.content + '",date="' + req.body.date + '",task_status="' + req.body.task_status + '" , test="' + req.body.test + '" where content="' + req.params.content + '"', (err, row, fields) => {


        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })

})

// user data get api

app.get('/userinfo', (req, res) => {
    connection.query('select * from  user', (err, rows, fields) => {

        if (!err) {
            res.send(rows)
        }
        else {
            res.send(err)
        }


    })

})

// Tutor data get api
app.get('/tutor', (req, res) => {

    connection.query('select * from  `tutor` ', (err, rows, fields) => {

        if (!err) {
            res.send(rows)
        }
        else {
            res.send(err)
        }


    })

})

app.get('/tuto', (req, res) => {

    connection.query('select * from  `tutor` ', (err, rows, fields) => {

        if (!err) {
            res.send(rows)
        }
        else {
            res.send(err)
        }


    })

})


app.get('/tutor/:id/:course', (req, res) => {

    connection.query('select * from  `tutor` where id = "' + req.params.id + '" ', (err, rows, fields) => {

        if (!err) {
            res.send(rows)
        }
        else {
            res.send(err)
        }


    })

})

app.post('/fullstack', (req, res) => {

    connection.query('select * from  `courses`  ', (err, rows, fields) => {

        if (!err) {
            res.send(rows)
        }
        else {
            res.send(err)
        }


    })

})

app.post('/testing', (req, res) => {

    connection.query('select * from  `testing`  ', (err, rows, fields) => {

        if (!err) {
            res.send(rows)
        }
        else {
            res.send(err)
        }


    })

})




// to get student details in dropdown select options.
app.get('/role/:id', (req, res) => {

    connection.query('select * from  tutor ', (err, rows, fields) => {

        if (!err) {
            res.send(rows)
        }
        else {
            res.send(err)
        }


    })

})


// Student data get api
app.get('/student/:id', (req, res) => {

    connection.query('select * from  `student` where id ="' + req.params.id + '"', (err, rows, fields) => {

        if (!err) {
            res.send(rows)
        }
        else {
            res.send(err)
        }


    })

})

app.get('/studen', (req, res) => {

    connection.query('select * from  `student`', (err, rows, fields) => {

        if (!err) {
            res.send(rows)
        }
        else {
            res.send(err)
        }


    })

})



// api to get tutor id into student table for assigned students.
app.get('/tutorname/:id', (req, res) => {
    console.log(req.params.id)
    connection.query('select * from  tutor where id = "' + req.params.id + '" ', (err, row, fields) => {

        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })

})


// app.get('/student/:id',(req,res)=>{ 
//     console.log(req.params.id)
//     connection.query('select * from  student ',(err,row,fields)=>{

//     if(!err)

//     {
//         res.send(row)
//     }
//     else{
//         res.send(err)
//     }


//     })

//     })      

// experiment 
app.get('/assigned/:id', (req, res) => {
    console.log(req.params.id)
    connection.query('select `firstname` from tutor where tutor.id = student.assigned_to in student', (err, row, fields) => {

        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })

})


// getting data of single user to update page using id 

app.get('/singleuser/:id', (req, res) => {
    console.log(req.params.id)
    connection.query('select * from  `student` where id="' + req.params.id + '"', (err, row, fields) => {

        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })

})

app.get('/fullstack/:content', (req, res) => {
    console.log(req.params.content)
    connection.query('select * from  `courses` where course="Full Stack" and content="' + req.params.content + '" ', (err, row, fields) => {

        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })

})

app.get('/testing/:content', (req, res) => {
    console.log(req.params.content)
    connection.query('select * from  `testing` where course="Testing" and content="' + req.params.content + '" ', (err, row, fields) => {

        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })

})


app.get('/tutorsingleuser/:id', (req, res) => {
    console.log(req.params.id)
    connection.query('select * from  `tutor` where id="' + req.params.id + '"', (err, row, fields) => {

        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })

})

server.listen(5000, () => {

    console.log('server running innnnnnn in port 5000 ');


})

// Contact page post api

app.post('/contactreg', (req, res) => {

    console.log(req.body);

    connection.query('insert into contact(name,email,comment) values("' + req.body.name + '","' + req.body.email + '","' + req.body.comment + '")', (err, row, fields) => {

        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })

})

app.post('/feedbackinfo', (req, res) => {

    console.log(req.body);

    connection.query('insert into feedback(firstname,email,feedback) values("' + req.body.firstname + '","' + req.body.email + '","' + req.body.feedback + '")', (err, row, fields) => {

        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })

})

// Contact data get api
app.get('/contactinfo', (req, res) => {
    connection.query('select * from  contact', (err, rows, fields) => {

        if (!err) {
            res.send(rows)
        }
        else {
            res.send(err)
        }


    })

})

app.get('/feedinfo', (req, res) => {
    connection.query('select * from  feedback', (err, rows, fields) => {

        if (!err) {
            res.send(rows)
        }
        else {
            res.send(err)
        }


    })

})
// Deleting the record using id value with post api

app.post('/delrec/:id', (req, res) => {
    console.log(req.params.id)
    connection.query('delete  from  `user` where id="' + req.params.id + '"', (err, row, fields) => {

        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })

})

app.post('/deltut/:id', (req, res) => {
    console.log(req.params.id)
    connection.query('delete  from  `tutor` where id="' + req.params.id + '"', (err, row, fields) => {

        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })

})

app.post('/delstu/:id', (req, res) => {
    console.log(req.params.id)
    connection.query('delete  from  `student` where id="' + req.params.id + '"', (err, row, fields) => {

        if (!err) {
            res.send(row)
        }
        else {
            res.send(err)
        }


    })

})

