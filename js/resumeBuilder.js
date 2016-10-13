/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name": "Zeng Tian",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "18867137983",
        "email": "844410616@qq.com",
        "github": "Gluneko",
        "twitter": "@gluneko",
        "location": "Hangzhou"
    },
    "welcomeMessage": "Slayyyyyy!",
    "skills": [
        "Java web","C++","Javascript","Bootstrap"
    ],
    "bioPic": "images/me.jpg"
}

var education = {
    "schools": [
        {
            "name": "Zhejiang University",
            "location": "Hangzhou,Zhejiang",
            "degrees": "Masters",
            "majors": ["Mechanical Design"],
            "dates": 2018,
            "url": "http://www.zju.edu.cn/"
        },
        {
            "name": "Nanjing University of Aeronautics & Astronautics",
            "location": "Nanjing,Jiangsu",
            "degrees": "BA",
            "majors": ["Mechanical Engineering"],
            "dates": 2015,
            "url": "http://www.nuaa.edu.cn/"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": 2016,
            "url": "https://cn.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ]
}

var work = {
    "jobs": [
        {
            "employer": "Canny Elevator Company",
            "title": "Engineer",
            "dates": "April 1,2016 - August 31,2017",
            "location": "Suzhou,Jiangsu",
            "description": "Made researches on the frontier technologies, optimized and improved some existing product designs. Help promoting Informatization of the company, and establish some information system to improve the quality of management and the work efficiency. Trained company employees to use information system. "
        }
    ]
}

var projects = {
    "projects": [
        {
            "title": "Establishing Contract Management System of an elevator company",
            "dates": "April 1,2016 - August 31,2017",
            "description": "Integrated all the information of a contract into a public platform to optimize the use of information of different departments and to improve the work efficiency. Design and implement the data structure and functional modules of the system. ",
            "images": [
                "images/project1.jpg",
                "images/project2.jpg"
            ]
        }
    ]
}

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

for(contact in bio.contacts){
    var formattedContact = HTMLcontactGeneric.replace("%contact%",contact).replace("%data%",bio.contacts[contact]);
    $("#topContacts").append(formattedContact);
}

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {

    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(skill) {
        var formattedSkill = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkill);
    });

}

function displayWork() {
    for(job in work.jobs){
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
    var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
    var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
    var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(
        formattedEmployerTitle).append(
        formattedDates).append(
        formattedLocation).append(
        formattedDescription);
}
}

displayWork();

$(document).click(function(loc){
        logClicks(loc.pageX,loc.pageY);
    });

function inName() {
    var name = bio.name.trim().split(" ");
    var intName = name[0][0].toUpperCase()+name[0].slice(1).toLowerCase()+" "+name[1].toUpperCase();
    return intName;
}

$("#main").append(internationalizeButton);
// Shows a map
$("#mapDiv").append(googleMap);

projects.display = function() {
    projects.projects.forEach( function(project) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%",project.title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%",project.dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%",project.description);
        $(".project-entry:last").append(formattedDescription);
        if(project.images.length>0){
            project.images.forEach( function(image) {
                var formattedImage = HTMLprojectImage.replace("%data%",image);
                $(".project-entry:last").append(formattedImage);
            });
        }
    });
}

projects.display();

education.display = function() {
    education.schools.forEach( function(school) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%",school.name);
        var formattedDegree = HTMLschoolDegree.replace("%data%",school.degrees);
        var formattedNameDegree = formattedName + formattedDegree;
        $(".education-entry:last").append(formattedNameDegree);
        var formattedDates = HTMLschoolDates.replace("%data%",school.dates);
        $(".education-entry:last").append(formattedDates);
        var formattedLocation = HTMLschoolLocation.replace("%data%",school.location);
        $(".education-entry:last").append(formattedLocation);
        if(school.majors.length>0){
            school.majors.forEach( function(major) {
                var formattedMajor = HTMLschoolMajor.replace("%data%",major);
                $(".education-entry:last").append(formattedMajor);
            });
        }
    });
    education.onlineCourses.forEach( function(onlineCourse) {
        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%",onlineCourse.title);
        var formattedSchool = HTMLonlineSchool.replace("%data%",onlineCourse.school);
        var formattedTitleSchool = formattedTitle + formattedSchool;
        $(".education-entry:last").append(formattedTitleSchool);
        var formattedDates = HTMLonlineDates.replace("%data%",onlineCourse.dates);
        $(".education-entry:last").append(formattedDates);
        var formattedURL = HTMLonlineURL.replace("%data%",onlineCourse.url);
        $(".education-entry:last").append(formattedURL);
    });
}

education.display();