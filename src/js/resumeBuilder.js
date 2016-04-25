/**
 * @file Holds resume data and adds contents to the page.
 * @author Kevin Frutiger [webmessage@frutigergroup.com]
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
  "biopic": ["images/kevin-frutiger@1x.jpg"]
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
      "title": "Portfolio",
      "dates": "2015-2016",
      "description": "Portfolio page built from a mock-up PDF utilizing Bootstrap for a responsive layout.",
      "images": [["images/portfolio-thumb@1x.png","images/portfolio-thumb@2x.png"]]
    },{
      "title": "Résumé",
      "dates": "2015-2016",
      "description": "Résumé utilizing jQuery and JSON objects for each section. You're viewing this now.",
      "images": [["images/resume-thumb@1x.png", "images/resume-thumb@2x.png"]]
    },{
      "title": "Arcade Game Clone",
      "dates": "2015",
      "description": "Clone of the classic arcade game <em>Frogger</em> uses pseudo-classical JavaScript OOP to create player and enemy entities.",
      "images": [["images/arcade-game-thumb@1x.png", "images/arcade-game-thumb@2x.png"]]
    },{
      "title": "Website Optimization",
      "dates": "2015",
      "description": "Project to optimize CRP and rendering performance during user interaction.",
      "images": [["images/web-optimization-thumb@1x.png", "images/web-optimization-thumb@2x.png"]]
    },{
      "title": "Neighborhood Map",
      "dates": "2015",
      "description": "Application utilizing Knockout.js to display a filterable list of places as markers on a Google Map.",
      "images": [["images/neighborhood-map-thumb@1x.png", "images/neighborhood-map-thumb@2x.png"]]
    },{
      "title": "Feed Reader Testing",
      "dates": "2015",
      "description": "Application utilizing Backbone.js to allow the user to query food items and save a calorie total for the day.",
      "images": [["images/feed-reader-testing-thumb@1x.png", "images/feed-reader-testing-thumb@2x.png"]]
    },{
      "title": "Health Tracker",
      "dates": "2016",
      "description": "Project to write Jasmine tests for an existing RSS feed reading application.",
      "images": [["images/health-tracker-thumb@1x.png", "images/health-tracker-thumb@2x.png"]]
    },]
};

/**
 * Adds information to the bio section.
 * @namespace
 */
var bioView = {
  // HTML markup to format the data.
  HTMLstrings: {
    headerName: '<h1 id="name">%data%</h1>',
    headerRole: '<span class="job-title">%data%</span><hr/>',
    contactGeneric: '<li class="flex-item"><span class="contact-labels">'+
                    '%contact%</span><span class="contact-item">%data%</span>' +
                    '</li>',
    mobile: '<li class="flex-item"><span class="contact-labels">mobile</span>'+
             '<span class="contact-item">%data%</span></li>',
    email: '<li class="flex-item"><span class="contact-labels">email</span>' +
            '<span class="contact-item">%data%</span></li>',
    twitter: '<li class="flex-item"><span class="contact-labels">twitter' +
              '</span><span class="contact-item">%data%</span></li>',
    github: '<li class="flex-item"><span class="contact-labels">github</span>'+
             '<span class="contact-item">%data%</span></li>',
    blog: '<li class="flex-item"><span class="contact-labels">blog</span>' +
           '<span class="contact-item">%data%</span></li>',
    location: '<li class="flex-item"><span class="contact-labels">location' +
               '</span><span class="contact-item">%data%</span></li>',
    bioPic: '<img src="%data%" class="biopic" width="211" height="211">',
    welcomeMsg: '<p class="welcome-message">%data%</p>',
    skillsStart: '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills">'+
                  '</ul>',
    skills: '<li><span class="skill-text">%data%</span></li>'
  },

  /**
   * Renders the bio to the page.
   * @memberof bioView
   * @method render
   */
  render: function() {
    var bio = controller.getBio();

    var formattedName = this.HTMLstrings.headerName.replace('%data%', bio.name);
    var formattedRole = this.HTMLstrings.headerRole.replace('%data%', bio.role);
    var formattedBioPic = this.HTMLstrings.bioPic.replace('%data%', bio.biopic);
    var formattedWelcomeMessage = this.HTMLstrings.welcomeMsg.replace(
                                      '%data%', bio.welcomeMessage);

    var formattedSkills = [];

    // Push formatted strings to the array
    for (var i = 0, len = bio.skills.length; i < len; i++) {
      formattedSkills.push(
          this.HTMLstrings.skills.replace('%data%', bio.skills[i]));
    }

    // Add objects to the page
    var $header = $('#header .content');
    $header.prepend(formattedRole)
           .prepend(formattedName);

    var formattedContacts = this.formatContactList();
    $('#topContacts').append(formattedContacts.join(''));

    $header.append(formattedBioPic)
           .append(formattedWelcomeMessage)
           .append(this.HTMLstrings.skillsStart)
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
      formattedContacts.push(this.HTMLstrings.mobile.replace('%data%', bio.contacts.mobile));
    }
    if (bio.contacts.email) {
      formattedContacts.push(this.HTMLstrings.email.replace('%data%', bio.contacts.email));
    }
    if (bio.contacts.github) {
      formattedContacts.push(this.HTMLstrings.github.replace('%data%', bio.contacts.github));
    }
    if (bio.contacts.twitter) {
      formattedContacts.push(this.HTMLstrings.twitter.replace('%data%', bio.contacts.twitter));
    }
    if (bio.contacts.location) {
      formattedContacts.push(
          this.HTMLstrings.location.replace('%data%', bio.contacts.location));
    }

    return formattedContacts;
  }
};

/**
 * Adds information to the education section.
 * @namespace
 */
var educationView = {
  // HTML markup to format the data.
  HTMLstrings: {
    schoolStart: '<div class="education-entry"></div>',
    schoolName: '<a href="#" target="_blank">%data%',
    schoolDegree: ' -- %data%</a>',
    schoolDates: '<div class="date-text">%data%</div>',
    schoolLocation: '<div class="location-text">%data%</div>',
    schoolMajor: '<em><br>Major: %data%</em>',
    onlineClasses: '<h3>Online Classes</h3>',
    onlineTitle: '<a href="#" target="_blank">%data%',
    onlineSchool: ' - %data%</a>',
    onlineDates: '<div class="date-text">%data%</div>',
    onlineURL: '<br><a href="#" target="_blank">%data%</a>'
  },


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
        var $school = $(this.HTMLstrings.schoolStart);
        var school = education.schools[i];

        // Format data
        var formattedName = this.HTMLstrings.schoolName.replace(
                                '%data%', school.name);
        formattedName = formattedName.replace('#', school.url);
        var formattedDegree = this.HTMLstrings.schoolDegree.replace(
                                  '%data%', school.degree);
        var formattedSchoolDates = this.HTMLstrings.schoolDates.replace(
                                       '%data%', school.dates);
        var formattedLocation = this.HTMLstrings.schoolLocation.replace(
                                    '%data%', school.location);
        var formattedMajor = this.HTMLstrings.schoolMajor.replace(
                                 '%data%', school.majors.join(''));

        // Prepare object
        $school.append(formattedName + formattedDegree)
               .append(formattedSchoolDates)
               .append(formattedLocation)
               .append(formattedMajor);

        // Add object to the page
        $education.append($school);
      }
    }

    if (education.onlineCourses && education.onlineCourses.length > 0) {

      // Add the online classes header
      $education.append(this.HTMLstrings.onlineClasses);

      for (var i2 = 0, len2 = education.onlineCourses.length; i2 < len2; i2++) {
        var $course = $(this.HTMLstrings.schoolStart);
        var course = education.onlineCourses[i2];

        // Format data
        var formattedTitle = this.HTMLstrings.onlineTitle.replace(
                                 '%data%', course.title);
        formattedTitle = formattedTitle.replace('#', course.url);
        var formattedSchool = this.HTMLstrings.onlineSchool.replace(
                                  '%data%', course.school);
        var formattedCourseDates = this.HTMLstrings.onlineDates.replace(
                                       '%data%', course.dates);
        var formattedUrl = this.HTMLstrings.onlineURL.replace(
                               '%data%', course.url);
        formattedUrl = formattedUrl.replace('#', course.url);

        // Prepare object
        $course.append(formattedTitle + formattedSchool)
               .append(formattedCourseDates)
               .append(formattedUrl);

        // Add object to the page
        $education.append($course);
      }
    }
  }

};

/**
 * Adds information to the work section.
 * @namespace
 */
var workView = {
  // HTML markup to format the data.
  HTMLstrings: {
    workStart: '<div class="work-entry"></div>',
    workEmployer: '<div class="employer-text">%data%',
    workTitle: ' - %data%</div>',
    workDates: '<div class="date-text">%data%</div>',
    workLocation: '<div class="location-text">%data%</div>',
    workDescription: '<p>%data%</p>'
  },

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
      var formattedEmployer = this.HTMLstrings.workEmployer.replace(
                                  '%data%', job.employer);
      var formattedWorkTitle = this.HTMLstrings.workTitle.replace(
                                   '%data%', job.title);
      var formattedWorkLocation =  this.HTMLstrings.workLocation.replace(
                                       '%data%', job.location);
      var formattedDates = this.HTMLstrings.workDates.replace(
                               '%data%', job.dates);
      var formattedDescription = this.HTMLstrings.workDescription.replace(
                                     '%data%', job.description);

      // Append the start of the work entry.
      $workExperience.append(this.HTMLstrings.workStart);

      // Append objects to the last work entry, which is the empty one we just
      // added.
      var $workEntry = $('.work-entry:last');
      $workEntry.append(formattedEmployer + formattedWorkTitle)
                .append(formattedWorkLocation)
                .append(formattedDates)
                .append(formattedDescription);

    }
  }
};

/**
 * Adds information to the project section.
 * @namespace
 */
var projectsView = {
  // HTML markup to format the data.
  HTMLstrings: {
    projectStart: '<div class="project-entry col-4"></div>',
    projectTitle: '<a href="#">%data%</a>',
    projectDates: '<div class="date-text">%data%</div>',
    projectDescription: '<p><br>%data%</p>',
    // These thumbnails are cosmetic, so alt is empty.
    projectImage: '<img srcset="%data1% 2x" src="%data2%" alt="" >'
  },

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
      var formattedTitle = this.HTMLstrings.projectTitle.replace(
                               '%data%', project.title);
      var formattedDates = this.HTMLstrings.projectDates.replace(
                               '%data%', project.dates);
      var formattedDescription = this.HTMLstrings.projectDescription.replace(
                                     '%data%', project.description);

      // Build array of HTML strings for the images
      var formattedImages = [];
      for (var j = 0, jlen = project.images.length; j < jlen; j++) {
        if (project.images.length) {
          var imgStr = this.HTMLstrings.projectImage;
          imgStr = imgStr.replace('%data1%', project.images[j][1])
                         .replace('%data2%', project.images[j][0]);
          formattedImages.push(imgStr);

        }
      }

      // Prepare the object
      var $project = $(this.HTMLstrings.projectStart);
      $project.append(formattedTitle)
              .append(formattedDates)
              .append(formattedDescription)
              .append(formattedImages);

      // Add the object to the page
      $projects.append($project);
    }
  }

};

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
                   'Received nothing.');
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
};

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
};

// Initialize the page.
controller.init();
