/**
 * Note: contrary to techniques suggested in the course, I'm always using
 * for loops instead of for...in loops to loop over arrays, to assure
 * proper order, etc.
 * http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml#for-in_loop
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
 */

var bio = {
  "name": "Kevin Frutiger",
  "role": "Front-end Web Developer",
  "contacts": {
    "mobile": "xxx-xxx-xxxx",
    "email": "webmessage@frutigergroup.com",
    "github": "KevinFrutiger",
    "twitter": "@KevinFrutiger",
    "location": "South San Francisco, CA, USA"
  },
  "welcomeMessage": "Front-end Web Developer with creative skills in addition to technical skills. Proficient in scripting languages and multimedia production tools. Experienced collaborating in global, cross-functional teams.",
  "skills": ["HTML5", "CSS", "SASS", "Bootstrap", "JavaScript", "jQuery", "Git",
             "Grunt", "Flash CC", "Photoshop CC", "Premiere Pro CC",
             "Illustrator CC", "Blender"],
  "biopic": "images/kevin-frutiger@1x.jpg"
};

bio.display = function() {
  var formattedName = HTMLheaderName.replace('%data%', bio.name);
  var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
  var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
  var formattedWelcomeMessage = HTMLwelcomeMsg.replace('%data%',
                                                       bio.welcomeMessage);

  var formattedContacts = buildContactList();

  var formattedSkills = [];

  /* Class note: I'm setting the variable "len" to avoid JS recalculating the
     the length of the array on each loop. It's something I've aready been doing.
   */
  for (var i = 0, len = bio.skills.length; i < len; i++) {
    formattedSkills.push(HTMLskills.replace('%data%', bio.skills[i]));
  }

  var $header = $('#header .content');
  $header.prepend(formattedRole)
         .prepend(formattedName);

  $('#topContacts').append(formattedContacts.join(''))

  $header.append(formattedBioPic)
         .append(formattedWelcomeMessage)
         .append(HTMLskillsStart)
         .find('#skills')
         .append(formattedSkills.join(''));

};

var education = {
  "schools": [
    {
      "name": "Wichita State University",
      "location": "Wichita, KS",
      "degree": "Bachelor of Fine Arts",
      "majors": ["Graphic Design"],
      "dates": 2005,
      "url": "http://www.wichita.edu/"
    },
    {
      "name": "Art Institute of Colorado",
      "location": "Denver, CO",
      "degree": "Associate of Applied Science",
      "majors": ["Computer Animation"],
      "dates": 1999,
      "url": "https://www.artinstitutes.edu/denver/"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front-End Web Developer Nanodegree",
      "school": "Udacity",
      "dates": 2016,
      "url": "https://www.udacity.com/"
    }
  ]
};

education.display = function() {

  var $education = $('#education .content');

  if (education.schools && education.schools.length > 0) {

    for (var i = 0, len = education.schools.length; i < len; i++) {
      var $school = $(HTMLschoolStart);
      var obj = education.schools[i];

      var formattedName = HTMLschoolName.replace('%data%', obj.name);
      formattedName = formattedName.replace('#', obj.url);
      var formattedDegree = HTMLschoolDegree.replace('%data%', obj.degree);
      var formattedDates = HTMLschoolDates.replace('%data%', obj.dates);
      var formattedLocation = HTMLschoolLocation.replace(
                                  '%data%', obj.location);
      var formattedMajor = HTMLschoolMajor.replace(
                               '%data%', obj.majors.join(''));

      $school.append(formattedName + formattedDegree)
             .append(formattedDates)
             .append(formattedLocation)
             .append(formattedMajor);

      $education.append($school);
    }
  }

  if (education.onlineCourses && education.onlineCourses.length > 0) {

    $education.append(HTMLonlineClasses)

    for (var i = 0, len = education.onlineCourses.length; i < len; i++) {
      var $course = $(HTMLschoolStart);
      var obj = education.onlineCourses[i];

      var formattedTitle = HTMLonlineTitle.replace('%data%', obj.title);
      formattedTitle = formattedTitle.replace('#', obj.url);
      var formattedSchool = HTMLonlineSchool.replace('%data%', obj.school);
      var formattedDates = HTMLonlineDates.replace('%data%', obj.dates);
      var formattedUrl = HTMLonlineURL.replace('%data%', obj.url);
      formattedUrl = formattedUrl.replace('#', obj.url);

      $course.append(formattedTitle + formattedSchool)
             .append(formattedDates)
             .append(formattedUrl);

      $education.append($course);
    }
  }
};

// TODO: Replace descriptions with bulleted lists from resume doc after
// rendering code is updated to accept them.
var work = {
  "jobs": [
    {
      "employer": "Google",
      "title": "Technical Vendor Program Manager",
      "location": "San Francisco, CA",
      "dates": "Oct 2013 – February 2015",
      "description": "Managed technical vendor programs to support global, top-tier DoubleClick Rich Media and AdWords Display Ad Builder customers."
    },
    {
      "employer": "Google",
      "title": "Creative Technical Specialist",
      "location": "San Francisco, CA",
      "dates": "Oct 2011 – February 2013",
      "description": "Provided DoubleClick Studio technical consultation and troubleshooting for creative and media agencies. Created build guides and video training for core and advanced features of Studio to scale support, including Fundamentals, Dynamic Creative, and VPAID."
    },
    {
      "employer": "Google",
      "title": "Rich Media Production Specialist",
      "location": "San Francisco, CA",
      "dates": "March 2008 – Oct 2013",
      "description": "Updated clients’ ActionScript for deployment in DoubleClick Studio."
    },
    {
      "employer": "Dish Network",
      "title": "Instructional Media Developer",
      "location": "San Francisco, CA",
      "dates": "Oct 2007 – March 2008",
      "description": "Created e-learning simulations, interactions, and animations with ActionScript, Flash, Photoshop, and Blender."
    },
    {
      "employer": "CleverMedia",
      "title": "Flash Game Programmer (contract)",
      "location": "Denver, CO",
      "dates": "March 2007 – Oct 2007",
      "description": "Utilized ActionScript to realize clients’ game concepts."
    },
    {
      "employer": "Active Education",
      "title": "Instructional Media Developer",
      "location": "Denver, CO",
      "dates": "Oct 2004 – March 2007",
      "description": "Utilized ActionScript to realize clients’ game concepts."
    }
  ]
};

work.display = function() {
  // If there are no jobs, stop function execution.
  if (!work.jobs || work.jobs.length === 0) return;

  var $workExperience = $('#workExperience .content');

  for (var i = 0, len = work.jobs.length; i < len; i++) {
    var obj = work.jobs[i];
    var formattedEmployer = HTMLworkEmployer.replace('%data%', obj.employer)
    var formattedWorkTitle = HTMLworkTitle.replace('%data%', obj.title);
    var formattedWorkLocation =  HTMLworkLocation.replace('%data%', obj.location);
    var formattedDates = HTMLworkDates.replace('%data%', obj.dates);
    var formattedDescription = HTMLworkDescription.replace('%data%', obj.description);

    $workExperience.append(HTMLworkStart);

    $workLocation = $(formattedWorkLocation);
    $workLocation.on('click', function() {console.log('clicking')});

    var $workEntry = $('.work-entry:last');
    $workEntry.append(formattedEmployer + formattedWorkTitle)
              .append($workLocation)
              .append(formattedDates)
              .append(formattedDescription);

  }
};

var projects = {
  projects: [
    {
      "title": "Project 1",
      "dates": "2015",
      "description": "This is Project 1’s description.",
      "images": ["images/portfolio-thumbnail-placeholder@1x.png",
                 "images/portfolio-thumbnail-placeholder@1x.png"]
    },
    {
      "title": "Project 2",
      "dates": "2015",
      "description": "This is Project 2’s description.",
      "images": ["images/portfolio-thumbnail-placeholder@1x.png"]
    },
    {
      "title": "Project 3",
      "dates": "2015",
      "description": "This is Project 3’s description.",
      "images": ["images/portfolio-thumbnail-placeholder@1x.png"]
    },
    {
      "title": "Project 4",
      "dates": "2015",
      "description": "This is Project 4’s description.",
      "images": ["images/portfolio-thumbnail-placeholder@1x.png"]
    },
    {
      "title": "Project 5",
      "dates": "2015",
      "description": "This is Project 5’s description.",
      "images": ["images/portfolio-thumbnail-placeholder@1x.png"]
    }
  ]
};

projects.display = function() {
  // If there are no projects, stop function execution.
  if (!projects.projects || projects.projects.length === 0) return;

  var $projects = $('#projects-wrapper');

  for (var i = 0, len = projects.projects.length; i < len; i++) {
    var project = projects.projects[i];


    var formattedTitle = HTMLprojectTitle.replace('%data%', project.title);
    var formattedDates = HTMLprojectDates.replace('%data%', project.dates);
    var formattedDescription = HTMLprojectDescription.replace(
                                   '%data%', project.description);

    var formattedImages = [];
    for (var j = 0, jlen = project.images.length; j < jlen; j++) {
      formattedImages.push(HTMLprojectImage.replace('%data%', project.images[j]));
    }

    var $project = $(HTMLprojectStart);
    $project.append(formattedTitle)
            .append(formattedDates)
            .append(formattedDescription)
            .append(formattedImages);

    $projects.append($project);
  }
};

// Display all sections
bio.display();
work.display();
projects.display();
education.display();

// Populate "Let's Connect" footer
$footer = $('#footerContacts');

var formattedContacts = buildContactList();
$footer.append(formattedContacts);

// // Add a map
$('#mapDiv .content').append(googleMap);

// Track click locations
$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});

function buildContactList() {
  var formattedContacts = [];
  if (bio.contacts.mobile) {
    formattedContacts.push(HTMLmobile.replace('%data%', bio.contacts.mobile));
  }
  if (bio.contacts.email) {
    formattedContacts.push(HTMLemail.replace('%data%', bio.contacts.email));
  }
  if (bio.contacts.github) {
    formattedContacts.push(HTMLgithub.replace('%data%', bio.contacts.github));
  }
  if (bio.contacts.twitter) {
    formattedContacts.push(HTMLtwitter.replace('%data%', bio.contacts.twitter));
  }
  if (bio.contacts.location) {
    formattedContacts.push(HTMLlocation.replace('%data%',
                                                 bio.contacts.location));
  }

  return formattedContacts;
}
