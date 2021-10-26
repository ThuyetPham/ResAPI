var express = require('express');
var router = express.Router();
const tutor = [{
    subobject: {
      class: '4',
      nameobject: 'Toan',
      level: 'co ban',
      code: '112378'
    },
    status: 1,
    apllying: '12',
    apllied: '132',
    timeupdated: '12/12/2021',
    rating: 5

  },
  {
    subobject: {
      class: '3',
      nameobject: 'Toan',
      level: 'co ban',
      code: '112378'
    },
    status: 0,
    apllying: '12',
    apllied: '132',
    timeupdated: '12/12/2021',
    rating: 4

  },
  {
    subobject: {
      class: '3',
      nameobject: 'Toan',
      level: 'co ban',
      code: '112378'
    },
    status: 0,
    apllying: '12',
    apllied: '132',
    timeupdated: '12/12/2021',
    rating: 2

  },
  {
    subobject: {
      class: '3',
      nameobject: 'Toan',
      level: 'co ban',
      code: '112378'
    },
    status: 1,
    apllying: '12',
    apllied: '132',
    timeupdated: '12/12/2021',
    rating: 5

  },
  {
    subobject: {
      class: '3',
      nameobject: 'Toan',
      level: 'co ban',
      code: '112378'
    },
    status: 1,
    apllying: '12',
    apllied: '132',
    timeupdated: '12/12/2021',
    rating: 0

  }
]
const classes =  [
  {
    status: 1,
    subject: "Toán cơ bản",
    classcode: "T3.082101",
    coursestatus: 1,
    time: "12p trước",
    numberstudent: "3/5",
    numberoflessons: "14/20",
    timetable: "20:00-21:00",
    timetableor: "19:00-20:00",
    schedule: "T2-T4",
    teacher: "cô Huyền Trân",
  },
  {
    status: 1,
    subject: "Toán cơ bản",
    classcode: "T3.082101",
    coursestatus: 2,
    time: "Hôm nay, 20:00",
    numberstudent: "3/5",
    numberoflessons: "14/20",
    timetable: "20:00-21:00",
    timetableor: "19:00-20:00",
    schedule: "T2-T4",
    teacher: "cô Huyền Trân",
  },
  {
    status: 1,
    subject: "Toán cơ bản",
    classcode: "T3.082101",
    coursestatus: 2,
    time: "Ngày mai, 20:00",
    numberstudent: "3/5",
    numberoflessons: "14/20",
    timetable: "20:00-21:00",
    timetableor: "19:00-20:00",
    schedule: "T2-T4",
    teacher: "cô Huyền Trân",
  },
  {
    status: 1,
    subject: "Toán cơ bản",
    classcode: "T3.082101",
    coursestatus: 2,
    time: " 22/12/2021, 20:00",
    numberstudent: "3/5",
    numberoflessons: "14/20",
    timetable: "20:00-21:00",
    timetableor: "19:00-20:00",
    schedule: "T2-T4",
    teacher: "cô Huyền Trân",
  },
  {
    status: 1,
    subject: "Toán cơ bản",
    classcode: "T3.082101",
    coursestatus: 2,
    time: " 22/12/2021, 20:00",
    numberstudent: "3/5",
    numberoflessons: "14/20",
    timetable: "20:00-21:00",
    timetableor: "19:00-20:00",
    schedule: "T2-T4",
    teacher: "cô Huyền Trân",
  },
  {
    status: 1,
    subject: "Toán cơ bản",
    classcode: "T3.082101",
    coursestatus: 2,
    time: " 22/12/2021, 20:00",
    numberstudent: "3/5",
    numberoflessons: "14/20",
    timetable: "20:00-21:00",
    timetableor: "19:00-20:00",
    schedule: "T2-T4",
    teacher: "cô Huyền Trân",
  },
  {
    status: 0,
    subject: "Toán cơ bản",
    classcode: "T3.082101",
    coursestatus: 0,
    time: "",
    numberstudent: "3/5",
    numberoflessons: "0/20",
    timetable: "20:00-21:00",
    timetableor: "19:00-20:00",
    schedule: "T2-T4",
    teacher: "cô Huyền Trân",
  },
  {
    status: 0,
    subject: "Toán cơ bản",
    classcode: "T3.082101",
    coursestatus: 0,
    time: "",
    numberstudent: "3/5",
    numberoflessons: "0/20",
    timetable: "20:00-21:00",
    timetableor: "19:00-20:00",
    schedule: "T2-T4",
    teacher: "cô Huyền Trân",
  },
  {
    status: 2,
    subject: "Toán cơ bản",
    classcode: "T3.082101",
    coursestatus: 3,
    time: "",
    numberstudent: "3/5",
    numberoflessons: "0/20",
    timetable: "20:00-21:00",
    timetableor: "19:00-20:00",
    schedule: "T2-T4",
    teacher: "cô Huyền Trân",
  },
  {
    status: 2,
    subject: "Toán cơ bản",
    classcode: "T3.082101",
    coursestatus: 3,
    time: "",
    numberstudent: "3/5",
    numberoflessons: "0/20",
    timetable: "20:00-21:00",
    timetableor: "19:00-20:00",
    schedule: "T2-T4",
    teacher: "cô Huyền Trân",
  },
  {
    status: 2,
    subject: "Toán cơ bản",
    classcode: "T3.082101",
    coursestatus: 3,
    time: "",
    numberstudent: "3/5",
    numberoflessons: "0/20",
    timetable: "20:00-21:00",
    timetableor: "19:00-20:00",
    schedule: "T2-T4",
    teacher: "cô Huyền Trân",
  },
  {
    status: 2,
    subject: "Toán cơ bản",
    classcode: "T3.082101",
    coursestatus: 3,
    time: "",
    numberstudent: "3/5",
    numberoflessons: "0/20",
    timetable: "20:00-21:00",
    timetableor: "19:00-20:00",
    schedule: "T2-T4",
    teacher: "cô Huyền Trân",
  },
  {
    status: 2,
    subject: "Toán cơ bản",
    classcode: "T3.082101",
    coursestatus: 3,
    time: "",
    numberstudent: "3/5",
    numberoflessons: "0/20",
    timetable: "20:00-21:00",
    timetableor: "19:00-20:00",
    schedule: "T2-T4",
    teacher: "cô Huyền Trân",
  },
]
/* GET home page. */
router.get('/', function (req, res, next) {
  res.send(tutor);
});
router.get('/listclass', function (req, res, next) {
  res.send(classes);
});

module.exports = router;
