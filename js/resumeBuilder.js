var bio = {
  "name": "Kevin Frutiger",
  "role": "Front-end Web Developer",
  "welcomeMessage": "Hi, I'm a front-end Web developer",
  "contacts": {
    "mobile": "",
    "email": "webmessage@frutigergroup.com",
    "github": "@KevinFrutiger",
    "twitter": "@KevinFrutiger",
    "location": "South San Francisco, CA"
  },
  "skills": ["skill1", "skill2"],
  "pictureUrl": "../image/fry.jpg"
};

var work = {
  "jobs": [
    {
      "employer": "Google",
      "title": "Technical Vendor Program Manager",
      "location": "San Francisco, CA",
      "dates": ["March 2008", "February 2015"],
      "description": "This is the description."
    }
  ]
};

var projects = {
  "projects": [
    {
      "title": "A project",
      "dates": ["2014", "2015"],
      "description": "This is the description",
      "images": [
        "http://"
      ]
    },
    {
      "title": "Another project",
      "dates": ["2014", "2015"],
      "description": "This is another description",
      "images": [
        "http://"
      ]
    }
  ]
};

projects.display = function() {
  var $projects = $('#projects');

  for (var i = 0, len = projects.projects.length; i < len; i++) {
    var project = projects.projects[i];


    var formattedTitle = HTMLprojectTitle.replace('%data%', project.title);
    var formattedDates = HTMLprojectDates.replace(
                             '%data%', project.dates.join('–'));
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

var education = {
  "schools": [
    {
      "name": "Art Institute of Colorado",
      "location": "Denver, CO",
      "degree": "Associates",
      "majors": ["Computer Animation"],
      "dates": [1999],
      "url": "http://"
    },
    {
      "name": "Wichia State University",
      "location": "Wichita, KS",
      "majors": ["BFA"],
      "years": 2005
    }
  ],
  "onlineCourses": [
    {
      "title": "",
      "schoole": "",
      "dates": "",
      "url": ""
    }
  ]
};

if (bio.skills.length > 0) {
  var formattedName = HTMLheaderName.replace('%data%', bio.name);
  var $header = $('#header');
  $header.prepend(formattedName);
  var formattedSkills = [];
  for (var i = 0, len = bio.skills.length; i < len; i++) {
    formattedSkills.push(HTMLskills.replace('%data%', bio.skills[i]));
  }
  $header.append($(HTMLskillsStart)).find('#skills').append(formattedSkills.join(''));
}


function displayWork() {
  var $workExperience = $('#workExperience');
  $workExperience.append(HTMLworkStart);

  // Really shouldn't use for..in to iterate over an array, but ok...
  for (job in work.jobs) {
    var obj = work.jobs[job];
    var formattedEmployer = HTMLworkEmployer.replace('%data%', obj.employer)
    var formattedWorkTitle = HTMLworkTitle.replace('%data%', obj.title);
    var formattedWorkLocation =  HTMLworkLocation.replace('%data%', obj.location);
    var formattedDates = HTMLworkDates.replace('%data%', obj.dates.join('–'));
    var formattedDescription = HTMLworkDescription.replace('%data%', obj.description);

    var $workEntry = $('.work-entry:last');
    $workEntry.append(formattedEmployer + formattedWorkTitle);
    $workEntry.append(formattedWorkLocation);
    $workEntry.append(formattedDates);
    $workEntry.append(formattedDescription);
  }
}

displayWork();

// $(document).click(function(loc) {
//   logClicks(loc.pageX, loc.pageY);
// });

$('#main').append(internationalizeButton);

function inName() {
  var names = bio.name.split(' ');

  var firstName = names[0][0].toUpperCase() + names[0].slice(1).toLowerCase();
  var surname = names[names.length - 1].toUpperCase();

  return firstName + ' ' + surname;
}

$('button').click(inName);


projects.display();

$('#mapDiv').append(googleMap);



