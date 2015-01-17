/* This JaveScript files contains a sample resume for Project 2. It utilizes style.css, helper.js and index.html to form the page. */

/* Programmed by Cameron Syme 1/17/15 */

var bio = {                     // JSON bio data
        "name": "John Doe",
        "role": "Developer",
        "contacts": {    //inbedded object
            "mobile": "617-999-3333",
            "email": "camsyme@gmail.com",
            "github": "csyme",
            "twitter": "twitter",
            "location": "Boston, MA"
    },
        "skills": ["Excel","RAN Newtork Design", "RAN Design" ],
        "welcomeMessage": "Welcome to my resume",
        "biopic": "images/fry.jpg",
}

function displayBio()   //simple function to diplay bio data using helper.js and index.html
{
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
      
    var formattedwelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedwelcome);
    
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedPic);

        $("#header").append(HTMLskillsStart);
    for (skill in bio.skills)
    {
        var formattedskills = HTMLskills.replace("%data%",bio.skills[skill]);
        $("#header").append(formattedskills);
    } 
}


function displayHeadFootContact(where)  //function to display contact information at the top or footer of page.
{
    var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $(where).append(formattedmobile);
      
    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
    $(where).append(formattedemail);

    
    var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $(where).append(formattedtwitter);

    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $(where).append(formattedgithub);

    var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $(where).append(formattedlocation);

}



var education = {     //education JSON
    "schools": [
        {
            "name": "Melbourne University",
            "location": "Melbourne, Vic, Australia",
            "degree": "ASEE",
            "majors": ["Physics", "painting"],
            "dates": "1993",
            "url": "http://www.melbourne.edu.au"
        },
        {
            "name": "Orange University",
            "location": "Hawthorn, Vic, Australia",
            "degree": "BSEE",
            "majors": ["Mathematics"],
            "dates": "1999",
            "url": "http://swinburne.edu.au"
        }
    ],

    "onLineCourses": [        
        {
            "title": "Into to LTE",
            "school": "Award Solutions",
            "date": "Jan 2009",
            "url": "http://www.awardsolutions.com"
        } 
        ]
}


function displayEducation() {   //simple function to diplay the education data using helper.js and index.html
    for (school in education.schools) {   // for loop to pull in all Education defined in the JSON object
        $("#education").append(HTMLschoolStart);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);   // concatinates School and Degree into 1 string

        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolLocation);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedSchoolDates);

        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedSchoolMajor);
    }
    
    $(".education-entry:last").append(HTMLonlineClasses);
    for (OnLine in education.onLineCourses) {    // for loop to pull in all online course defined in the JSON
        var formattedtitle = HTMLonlineTitle.replace("%data%", education.onLineCourses[OnLine].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onLineCourses[OnLine].school);
        $(".education-entry:last").append(formattedtitle + formattedSchool);
        var formattedDates = HTMLonlineDates.replace("%data%", education.onLineCourses[OnLine].date);
        $(".education-entry:last").append(formattedDates);
        var formattedUrl = HTMLonlineURL.replace("%data%", education.onLineCourses[OnLine].url);
        $(".education-entry:last").append(formattedUrl);
    }
}


    
var work = {  //past work experience JSON
    "jobs": [
        {
            "employer": "AT&T",
            "title": "RAN Design Manager",
            "location": "Framingham, MA, US",
            "dates": "2012-present",
            "description": "Overseeing the design and overlay of LTE on 2600 sites. ",
        },
        {
            "employer": "Lightsquared",
            "title": "RAN Design Manager",
            "location": "Herndon, VA, US",
            "dates": "2011-2012",
            "description": "",
        }      
    ]
}

function displayWork() {    //simple function to diplay the Work data using helper.js and index.html

    for (job in work.jobs) {  // for loop to pull in all Work defined in the JSON object
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedlocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
       $(".work-entry:last").append(formattedlocation);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

var projects = {    // past projects JSON
    "projects": [
        {   
            "title": "Project 1 - Mockup Webpage",
            "dates": "Dec 2014",
            "description": "1st web page mockup for Udacity",
            "images" : ["images/197x148.gif", "images/197x148.gif"]
         }
      ]    
}

projects.display = function() {   //simple function to diplay the Project data using helper.js and index.html

    for (project in projects.projects) {  // for loop to pull in all Proejct defined in the JSON object
        $("#projects").append(HTMLprojectStart);
       
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
               var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
               $(".project-entry:last").append(formattedImage); 
            }
        }
    }

}

$(document).click(function(loc) {   //click function pulls on x and y pixel location and displays on the console
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});

//calling functions to display the sectional data
displayBio();  
displayHeadFootContact("#topContacts")   
displayHeadFootContact("#footerContacts")  
displayWork();
projects.display();
displayEducation();
$("#mapDiv").append(googleMap);