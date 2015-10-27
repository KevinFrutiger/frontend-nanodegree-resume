/**
 * Note: contrary to techniques suggested in the course, I'm always using 
 * for loops instead of for...in loops to loop over arrays, to assure 
 * proper order, etc.
 * http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml#for-in_loop
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
 */

// Set up JSON objects for bio, work, projects, and education.

var bio = {
  "name": "Kevin Frutiger",
  "role": "Front-end Web Developer",
  "contacts": {
    "mobile": "",
    "email": "webmessage@frutigergroup.com",
    "github": "@KevinFrutiger",
    "twitter": "@KevinFrutiger",
    "location": "South San Francisco, CA"
  },
  "welcomeMessage": "I am a front-end Web and media developer, with an eye for motion and design. Having worked in both creative and technical roles, I am driven by a fondness for code and a love of animation and video.",
  "skills": ["HTML5", "CSS", "JavaScript", "SVG", "Flash CC", "Photoshop CC", 
             "Premiere Pro CC", "Illustrator CC"],
  "biopic": "images/fry.jpg"
};

bio.display = function() {
  var formattedName = HTMLheaderName.replace('%data%', bio.name);
  var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
  var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
  var formattedWelcomeMessage = HTMLwelcomeMsg.replace('%data%', 
                                                       bio.welcomeMessage);
  
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

  var formattedSkills = [];
  for (var i = 0, len = bio.skills.length; i < len; i++) {
    formattedSkills.push(HTMLskills.replace('%data%', bio.skills[i]));
  }
  
  var $header = $('#header');
  $header.prepend(formattedRole)
         .prepend(formattedName);

  $('#topContacts').append(formattedContacts.join(''))

  $header.append(formattedBioPic)
         .append(formattedWelcomeMessage)

  $header.append(HTMLskillsStart)
         .find('#skills')
         .append(formattedSkills.join(''));
};

var education = {
  "schools": [
    {
      "name": "Wichia State University",
      "location": "Wichita, KS",
      "degree": "BFA",
      "majors": ["Graphic Design"],
      "dates": 2005,
      "url": "http://www.wichita.edu/"
    },
    {
      "name": "Art Institute of Colorado",
      "location": "Denver, CO",
      "degree": "Associates",
      "majors": ["Computer Animation"],
      "dates": 1999,
      "url": "https://www.artinstitutes.edu/denver/"
    }
  ],
  "onlineCourses": [
  
  ]
};

education.display = function() {

  var $education = $('#education');

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

var work = {
  "jobs": [
    {
      "employer": "Google",
      "title": "Technical Vendor Program Manager",
      "location": "San Francisco, CA",
      "dates": "March 2008 – February 2015",
      "description": "This is the description."
    }
  ]
};

work.display = function() {
  // If there are no jobs, stop function execution.
  if (!work.jobs || work.jobs.length === 0) return;

  var $workExperience = $('#workExperience');
  $workExperience.append(HTMLworkStart);

  for (var i = 0, len = work.jobs.length; i < len; i++) {
    var obj = work.jobs[i];
    var formattedEmployer = HTMLworkEmployer.replace('%data%', obj.employer)
    var formattedWorkTitle = HTMLworkTitle.replace('%data%', obj.title);
    var formattedWorkLocation =  HTMLworkLocation.replace('%data%', obj.location);
    var formattedDates = HTMLworkDates.replace('%data%', obj.dates);
    var formattedDescription = HTMLworkDescription.replace('%data%', obj.description);

    var $workEntry = $('.work-entry:last');
    $workEntry.append(formattedEmployer + formattedWorkTitle);
    $workEntry.append(formattedWorkLocation);
    $workEntry.append(formattedDates);
    $workEntry.append(formattedDescription);
  }
};

var projects = {
  
};

projects.display = function() {
  // If there are no projects, stop function execution.
  if (!projects.projects || projects.projects.length === 0) return;

  var $projects = $('#projects');

  for (var i = 0, len = projects.projects.length; i < len; i++) {
    var project = projects.projects[i];


    var formattedTitle = HTMLprojectTitle.replace('%data%', project.title);
    var formattedDates = HTMLprojectDates.replace('%data%', project.dates);
    var formattedDescription = HTMLprojectDescription.replace(
                                   '%data%', project.description);

    var formattedImages = [];
    for (var j = 0, jlen = project.images.length; j < jlen; j++) {
      formattedImages.push(HTMLprojectImage.replace('%data%', project.images));
    }

    
    var $project = $(HTMLprojectStart);
    $project.append(formattedTitle)
            .append(formattedDates)
            .append(formattedDescription)
            .append(formattedImages.join(''));

    $projects.append($project);
  }
};

// Display all sections
bio.display();
work.display();
projects.display();
education.display();

// Add a map
$('#mapDiv').append(googleMap);

// Track click locations
$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});
