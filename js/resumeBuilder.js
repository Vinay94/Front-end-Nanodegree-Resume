function inName(name) {
    console.log(name);
    var newName = name;
    newName = newName[0].toUpperCase() + newName.slice(1, newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase();
    return newName;
}

var bio = {
    "name": "Vinay K N",
    "role": "WebDeveloper",
    "welcomeMessage": "I look forward to work with you!",
    "biopic": "images/image.jpg",
    "skills": ["Java Programming", "Front End Web-Development", "Team Player", "Communication"],
    "contacts":{
        "mobile": "8553467712",
        "github": "Vinay94",
        "twitter": "@vinaykothamachu",
        "location": "Bangalore,India",
        "email": "vinaykothamachu@gmail.com"
    }
};

var work = {
    "jobs": [{
        "employer": "Infosys",
        "title": "Web-developer",
        "dates": "2016-Present",
        "location": "Mysore",
        "description": "Fascinating job in Tech World"
    }, {
        "employer": "Syslog technologies",
        "title": "proj-intern",
        "dates": "2015-2016",
        "location": "Vijaynagar,Bangalore,India",
        "description": "Developed Android Application in Assosiation with the organization for academic uses"
    }]
};

var projects = {
    "projects": [{
        "title": "PORTFOLIO ",
        "dates": "2016 August",
        "description": "Created Portfolio in interaction with Udacity Nanodegree Program",
        "images": ["images/portfolio.png"]
    }, {
        "title": "ONLINE RESUME",
        "dates": "2016 September",
        "description": " Built Resume using javascript and Jquery to visualize my profile",
        "images": ["images/resume.png"]
    }]
};

var education = {
    "schools": [{
        "name": "APS College of Engineering",
        "location": "Kanakpura,Bangalore,India",
        "degree": "bachelor",
        "majors": ["computer science","Electronics"],
        "dates": "2012 - 2016",
        "url": "www.apsce.com"
    }, {
        "name": "vijaya Composite Pre-University",
        "location": "Jayanagar,Bangalore,India",
        "degree": "undergraduate",
        "majors": ["Electronics","computer science"],
        "dates": "2010-2012",
        "url": "www.vijaycomposite.com"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "udacity",
        "date": "2016-Present",
        "url": "https://www.udacity.com/course/nd001"
    }]
};


bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage, formattedMessage);
    $("#header").append(HTMLskillsStart);

    for (var skill = 0; skill < bio.skills.length; skill++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkills);
    }

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedgithub = HTMLcontactGeneric.replace("%contact%", "github").replace("%data%", bio.contacts.github);
        var formattedtwitter = HTMLcontactGeneric.replace("%contact%", "twitter").replace("%data%", bio.contacts.twitter);
        $("#topContacts,#footerContacts").append(formattedMobile, formattedEmail, formattedgithub, formattedtwitter);
};

education.display = function() {
    for (var school = 0; school < education.schools.length; school++) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedName + formattedDegree, formattedDates, formattedLocation, formattedMajor);
      }
};

work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        $(".work-entry:last").append(formattedEmployer + formattedTitle, formattedDates, formattedDescription);
    }
};

projects.display = function() {
    for (var item = 0; item < projects.projects.length; item++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[item].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[item].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[item].description);

        $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);
        for (var image = 0; image < projects.projects[item].images.length; image++) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[item].images[image]);
            $(".project-entry:last").append(formattedImage);
        }
    }
};

/*calling Functions*/
work.display();
projects.display();
education.display();
bio.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
