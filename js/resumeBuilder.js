var bio = {
        "name": "Cameron Syme",
        "role": "Developer",
        "contacts": {
            "mobile": "617-839-0572",
            "email": "camsyme@gmail.com",
            "github": "csyme",
            "twitter": "twitter",
            "location": "North Andover, MA"
    },
        "skills": ["Excel","RAN Newtork Design", "RAN Design" ],
        "welcomeMessage": "Welcome to my resume",
        "biopic": "images/fry.jpg",
}

function displayBio()
{
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
      
    var formattedwelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedwelcome);
    
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedPic);
    
    var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedmobile);
    $("#footerContacts").append(formattedmobile);
    
    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedemail);
    $("#footerContacts").append(formattedemail);
    
    var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedtwitter);
    $("#footerContacts").append(formattedtwitter);

    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedgithub);
    $("#footerContacts").append(formattedgithub);

    var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedlocation);
    $("#footerContacts").append(formattedlocation);

    $("#header").append(HTMLskillsStart);
    for (skill in bio.skills)
    {
        var formattedskills = HTMLskills.replace("%data%",bio.skills[skill]);
        $("#header").append(formattedskills);
    } 
}



var education = { 
    "schools": [
        {
            "name": "RMIT",
            "location": "Melbourne, Vic, Australia",
            "degree": "ASEE",
            "majors": "electronics",
            "dates": "1989",
            "url": "http://RMIT.edu.au"
        },
        {
            "name": "Swinburn University",
            "location": "Hawthorn, Vic, Australia",
            "degree": "BSEE",
            "majors": "Mathematics",
            "dates": "1995",
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


function displayEducation() {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);

        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolLocation);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedSchoolDates);

        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedSchoolMajor);
    }
    $(".education-entry:last").append(HTMLonlineClasses);
    
    for (OnLine in education.onLineCourses) {
        var formattedtitle = HTMLonlineTitle.replace("%data%", education.onLineCourses[OnLine].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onLineCourses[OnLine].school);
        $(".education-entry:last").append(formattedtitle + formattedSchool);
        var formattedDates = HTMLonlineDates.replace("%data%", education.onLineCourses[OnLine].date);
        $(".education-entry:last").append(formattedDates);
        var formattedUrl = HTMLonlineURL.replace("%data%", education.onLineCourses[OnLine].url);
        $(".education-entry:last").append(formattedUrl);
    }
}


       



var work = { 
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

function displayWork() {

    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        //var formattedlocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        //   $(".work-entry:last").append(formattedlocation);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

var projects = { 
    "projects": [
        {   
            "title": "Project 1 - Mockup Webpage",
            "dates": "Dec 2014",
            "description": "1st web page mockup for Udacity",
            "images" : ["images/197x148.gif", "images/197x148.gif"]
         }
      ]    
}

projects.display = function() {

    for (project in projects.projects) {
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

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});

displayBio();
displayWork();
projects.display();
displayEducation();
//education.display();
$("#mapDiv").append(googleMap);