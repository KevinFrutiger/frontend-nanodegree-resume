/**
 * @file Holds resume data and adds contents to the page.
 * @author Kevin Frutiger [webmessage@frutigergroup.com]
 */


/*
 * Class note: contrary to techniques suggested in the course, I'm always using
 * for loops instead of for...in loops to loop over arrays, to assure
 * proper order, etc.
 * http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml#for-in_loop
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
 */

/* Define an object for each section, to hold data for that section. */

/**
 * A JSON object that holds bio/header information.
 * @property {string} name The name for person.
 * @property {string} role The desired role.
 * @property {object} contacts An object containing contact information.
 * @property {string} welcomeMessage A welcome message/summary.
 * @property {Array.<string>} skills An array of job skills.
 * @property {string} biopic A URL to a bio picture.
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

/**
 * A JSON object that holds education information.
 * @property {Array.<object>} schools An array of objects containing information
 *     about each school.
 * @property {Array.<object>} onlineCourses An array of objects containing
 *     information about each online course
 */
var education = {
  "schools": [{
      "name": "Wichita State University",
      "location": "Wichita, KS",
      "degree": "Bachelor of Fine Arts",
      "majors": ["Graphic Design"],
      "dates": 2005,
      "url": "http://www.wichita.edu/"
    },{
      "name": "Art Institute of Colorado",
      "location": "Denver, CO",
      "degree": "Associate of Applied Science",
      "majors": ["Computer Animation"],
      "dates": 1999,
      "url": "https://www.artinstitutes.edu/denver/"
    }],
  "onlineCourses": [{
      "title": "Front-End Web Developer Nanodegree",
      "school": "Udacity",
      "dates": 2016,
      "url": "https://www.udacity.com/"
    }]
};

// TODO: Replace job descriptions with bulleted lists. Requires display
// function and helper functions to be updated to accept them.
/**
 * A JSON object that holds work information.
 * @property {Array.<string>} jobs An array of objects containing information
 *     about each job
 */
var work = {
  "jobs": [{
      "employer": "Google",
      "title": "Technical Vendor Program Manager",
      "location": "San Francisco, CA",
      "dates": "Oct 2013 – February 2015",
      "description": "Managed technical vendor programs to support global, top-tier DoubleClick Rich Media and AdWords Display Ad Builder customers."
    },{
      "employer": "Google",
      "title": "Creative Technical Specialist",
      "location": "San Francisco, CA",
      "dates": "Oct 2011 – February 2013",
      "description": "Provided DoubleClick Studio technical consultation and troubleshooting for creative and media agencies. Created build guides and video training for core and advanced features of Studio to scale support, including Fundamentals, Dynamic Creative, and VPAID."
    },{
      "employer": "Google",
      "title": "Rich Media Production Specialist",
      "location": "San Francisco, CA",
      "dates": "March 2008 – Oct 2013",
      "description": "Updated clients’ ActionScript for deployment in DoubleClick Studio."
    },{
      "employer": "Dish Network",
      "title": "Instructional Media Developer",
      "location": "San Francisco, CA",
      "dates": "Oct 2007 – March 2008",
      "description": "Created e-learning simulations, interactions, and animations with ActionScript, Flash, Photoshop, and Blender."
    },{
      "employer": "CleverMedia",
      "title": "Flash Game Programmer (contract)",
      "location": "Denver, CO",
      "dates": "March 2007 – Oct 2007",
      "description": "Utilized ActionScript to realize clients’ game concepts."
    },{
      "employer": "Active Education",
      "title": "Instructional Media Developer",
      "location": "Denver, CO",
      "dates": "Oct 2004 – March 2007",
      "description": "Utilized ActionScript to realize clients’ game concepts."
    }]
};

/**
 * A JSON object that stores project information.
 * @property {Array.<object>} projects An array of objects containing
 *    information about each project.
 */
var projects = {
  "projects": [{
      "title": "Project 1",
      "dates": "2015",
      "description": "This is Project 1’s description.",
      "images": ["images/portfolio-thumbnail-placeholder@1x.png",
                 "images/portfolio-thumbnail-placeholder@1x.png"]
    },{
      "title": "Project 2",
      "dates": "2015",
      "description": "This is Project 2’s description.",
      "images": ["images/portfolio-thumbnail-placeholder@1x.png"]
    },{
      "title": "Project 3",
      "dates": "2015",
      "description": "This is Project 3’s description.",
      "images": ["images/portfolio-thumbnail-placeholder@1x.png"]
    },{
      "title": "Project 4",
      "dates": "2015",
      "description": "This is Project 4’s description.",
      "images": ["images/portfolio-thumbnail-placeholder@1x.png"]
    },{
      "title": "Project 5",
      "dates": "2015",
      "description": "This is Project 5’s description.",
      "images": ["images/portfolio-thumbnail-placeholder@1x.png"]
    }]
};

/**
 * Adds information to the bio section.
 * @namespace
 */
var bioView = {
  /**
   * Renders the bio to the page.
   * @memberof bioView
   * @method render
   */
  render: function() {
    var bio = controller.getBio();
    var formattedName = HTMLheaderName.replace('%data%', bio.name);
    var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
    var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace('%data%',
                                                         bio.welcomeMessage);

    var formattedSkills = [];

    // Push formatted strings to the array
    for (var i = 0, len = bio.skills.length; i < len; i++) {
      formattedSkills.push(HTMLskills.replace('%data%', bio.skills[i]));
    }

    // Add objects to the page
    var $header = $('#header .content');
    $header.prepend(formattedRole)
           .prepend(formattedName);

    var formattedContacts = this.formatContactList();
    $('#topContacts').append(formattedContacts.join(''))

    $header.append(formattedBioPic)
           .append(formattedWelcomeMessage)
           .append(HTMLskillsStart)
           .find('#skills')
           .append(formattedSkills.join(''));
  },

  /**
   * Returns array of &lt;li&gt; tags containing contact information.
   * @memberof bioView
   * @method formatContactList
   * @returns {Array.<strings>}
   */
  formatContactList: function() {
    var bio = controller.getBio();
    var formattedContacts = [];

    // If the entry isn't blank, format the data and push it to the array.
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
      formattedContacts.push(
          HTMLlocation.replace('%data%', bio.contacts.location));
    }

    return formattedContacts;
  }
};

/**
 * Adds information to the education section.
 * @namespace
 */
var educationView = {
  /**
   * Renders the education items to the page.
   * @memberof educationView
   * @method render
   */
  render: function() {

    var education = controller.getEducation();
    var $education = $('#education .content');

    if (education.schools && education.schools.length > 0) {

      for (var i = 0, len = education.schools.length; i < len; i++) {
        var $school = $(HTMLschoolStart);
        var obj = education.schools[i];

        // Format data
        var formattedName = HTMLschoolName.replace('%data%', obj.name);
        formattedName = formattedName.replace('#', obj.url);
        var formattedDegree = HTMLschoolDegree.replace('%data%', obj.degree);
        var formattedDates = HTMLschoolDates.replace('%data%', obj.dates);
        var formattedLocation = HTMLschoolLocation.replace(
                                    '%data%', obj.location);
        var formattedMajor = HTMLschoolMajor.replace(
                                 '%data%', obj.majors.join(''));

        // Prepare object
        $school.append(formattedName + formattedDegree)
               .append(formattedDates)
               .append(formattedLocation)
               .append(formattedMajor);

        // Add object to the page
        $education.append($school);
      }
    }

    if (education.onlineCourses && education.onlineCourses.length > 0) {

      // Add the online classes header
      $education.append(HTMLonlineClasses)

      for (var i = 0, len = education.onlineCourses.length; i < len; i++) {
        var $course = $(HTMLschoolStart);
        var obj = education.onlineCourses[i];

        // Format data
        var formattedTitle = HTMLonlineTitle.replace('%data%', obj.title);
        formattedTitle = formattedTitle.replace('#', obj.url);
        var formattedSchool = HTMLonlineSchool.replace('%data%', obj.school);
        var formattedDates = HTMLonlineDates.replace('%data%', obj.dates);
        var formattedUrl = HTMLonlineURL.replace('%data%', obj.url);
        formattedUrl = formattedUrl.replace('#', obj.url);

        // Prepare object
        $course.append(formattedTitle + formattedSchool)
               .append(formattedDates)
               .append(formattedUrl);

        // Add object to the page
        $education.append($course);
      }
    }
  }

}

/**
 * Adds information to the work section.
 * @namespace
 */
var workView = {
  /**
   * Renders the work items to the page.
   * @memberof workView
   * @method render
   */
  render: function() {
    var jobs = controller.getWork().jobs;

    // If there are no jobs, stop function execution.
    if (!jobs || jobs.length === 0) return;

    var $workExperience = $('#workExperience .content');

    for (var i = 0, len = jobs.length; i < len; i++) {
      var job = jobs[i];

      // Format data
      var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer)
      var formattedWorkTitle = HTMLworkTitle.replace('%data%', job.title);
      var formattedWorkLocation =  HTMLworkLocation.replace('%data%', job.location);
      var formattedDates = HTMLworkDates.replace('%data%', job.dates);
      var formattedDescription = HTMLworkDescription.replace('%data%', job.description);

      // Append the start of the work entry.
      $workExperience.append(HTMLworkStart);

      // Append objects to the last work entry, which is the empty one we just
      // added.
      var $workEntry = $('.work-entry:last');
      $workEntry.append(formattedEmployer + formattedWorkTitle)
                .append(formattedWorkLocation)
                .append(formattedDates)
                .append(formattedDescription);

    }
  }
}

/**
 * Adds information to the project section.
 * @namespace
 */
var projectsView = {
  /**
   * Renders the projects to the page.
   * @memberof projectsView
   * @method render
   */
  render: function() {
    var projects = controller.getProjects().projects;

    // If there are no projects, stop function execution.
    if (!projects || projects.length === 0) return;

    var $projects = $('#projects-wrapper');

    for (var i = 0, len = projects.length; i < len; i++) {
      var project = projects[i];

      // Format data
      var formattedTitle = HTMLprojectTitle.replace('%data%', project.title);
      var formattedDates = HTMLprojectDates.replace('%data%', project.dates);
      var formattedDescription = HTMLprojectDescription.replace(
                                     '%data%', project.description);

      // Build array of HTML strings for the images
      var formattedImages = [];
      for (var j = 0, jlen = project.images.length; j < jlen; j++) {
        formattedImages.push(HTMLprojectImage.replace('%data%', project.images[j]));
      }

      // Prepare the object
      var $project = $(HTMLprojectStart);
      $project.append(formattedTitle)
              .append(formattedDates)
              .append(formattedDescription)
              .append(formattedImages);

      // Add the object to the page
      $projects.append($project);
    }
  }

}

/**
 * Adds information to the footer section.
 * @namespace
 */
var footerView = {
  /**
   * Renders the footer items to the page.
   * @memberof footerView
   * @method render
   */
  render: function(liElementStrings) {
    if (liElementStrings) {
      $footer = $('#footerContacts');
      $footer.append(liElementStrings);
    } else {
      console.warn('footer.display() expected array of LI strings. ' +
                   'Received nothing.')
    }
  }

};

/**
 * Adds the map to the page.
 * @namespace
 */
var mapView = {
  /**
   * Renders the map to the page.
   * @memberof mapView
   * @method render
   */
  render: function() {
    // Add a map.
    $('#mapDiv .content').append(googleMap);
  }
}

/**
 * Main control between data and views.
 * @namespace
 */
var controller = {
  /**
   * Initializes the page.
   * @memberof controller
   * @method init
   */
  init: function() {
    // Track click locations.
    $(document).click(function(loc) {
                          logClicks(loc.pageX, loc.pageY);
                      });

    // Render all the sections.
    bioView.render();
    workView.render();
    projectsView.render();
    educationView.render();
    mapView.render();
    footerView.render(bioView.formatContactList());
  },

  /**
   * Returns bio data.
   * @returns {object}
   */
  getBio: function() {
    return bio;
  },

  /**
   * Returns education data.
   * @returns {object}
   */
  getEducation: function() {
    return education;
  },

  /**
   * Returns project data.
   * @returns {object}
   */
  getProjects: function() {
    return projects;
  },

  /**
   * Returns work data.
   * @returns {object}
   */
  getWork: function() {
    return work;
  }
}

// Initialize the page.
controller.init();
