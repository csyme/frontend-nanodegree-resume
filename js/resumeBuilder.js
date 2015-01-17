var bio = {
        "name": "Cameron Syme",
        "role": "Developer",
        "contact": {
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
    
    var formattedmobile = HTMLmobile.replace("%data%", bio.contact.mobile);
    $("#topContacts").append(formattedmobile);
    
    var formattedemail = HTMLemail.replace("%data%", bio.contact.email);
    $("#topContacts").append(formattedemail);
    
    var formattedtwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
    $("#topContacts").append(formattedtwitter);

    var formattedgithub = HTMLgithub.replace("%data%", bio.contact.github);
    $("#topContacts").append(formattedgithub);
    
    var formattedlocation = HTMLlocation.replace("%data%", bio.contact.location);
    $("#topContacts").append(formattedlocation);

    $("#header").append(HTMLskillsStart);
    for (skill in bio.skills)
    {
        var formattedskills = HTMLskills.replace("%data%",bio.skills[skill]);
        $("#header").append(formattedskills);
    } 
}



var education = { 
    "Schools": [
        {
            "name": "RMIT",
            "location": "Melbourne, Vic, Australia",
            "degree": "ASEE",
            "majors": ["electronics", "physics"],
            "dates": 1989,
            "url": "http://RMIT.edu.au"
        },
        {
            "name": "Swinburn University",
            "location": "Hawthorn, Vic, Australia",
            "degree": ["BSEE"],
            "majors": ["Electonics", "Mathematics"],
            "dates": 1995,
            "url": "http://swinburne.edu.au"
        }
    ]
}

var onlineCourses = {
            "title": "Into to LTE",
            "school": "Award Solutions",
            "date": "Jan 2009",
            "url": "http://www.awardsolutions.com"
        
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
        },
        {
            "employer": "Clearwire",
            "title": "Market Director",
            "location": "Waltham, MA, US",
            "dates": "2009-2011",
            "description": "RAN Design Engineer",
        }
    ]
}
var projects = { 
    "prjects": [
        {   
            "title": "Project 1 - Mockup Webpage",
            "dates": "Dec 2014",
            "description": "1st web page mockup for Udacity",
            "images" : ["image/fry.jpg", "image/fry.jpg"]
        },
        {   
            "title": "Project 2 - Interactive Resume",
            "dates": "Jan 2015",
            "description": "1st web page mockup for Udacity",
            "images" : ["image/fry.jpg", "image/fry.jpg"]
        }
     ]    
}


displayBio();