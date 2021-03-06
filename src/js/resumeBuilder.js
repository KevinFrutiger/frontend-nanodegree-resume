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
    "mobile": "",
    "email": "webmessage@frutigergroup.com",
    "github": "KevinFrutiger",
    "twitter": "@KevinFrutiger",
    "location": "South San Francisco, CA, USA"
  },
  "welcomeMessage": "Front-end Web Developer with multimedia skills. Proficient in scripting languages and multimedia production tools. Experienced collaborating in global, cross-functional teams.",
  "skills": ["HTML5", "CSS", "Bootstrap", "JavaScript", "jQuery", "Git",
             "Grunt", "Animate", "Photoshop", "Premiere Pro",
             "Illustrator", "After Effects", "Blender", "Maya"],
  "biopic": ["images/kevin-frutiger@1x.jpg", "images/kevin-frutiger@2x.jpg"]
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
      "dates": null,
      "url": "http://www.wichita.edu/"
    },{
      "name": "Art Institute of Colorado",
      "location": "Denver, CO",
      "degree": "Associate of Applied Science",
      "majors": ["Computer Animation"],
      "dates": null,
      "url": "https://www.artinstitutes.edu/denver/"
    }],
  "onlineCourses": [{
      "title": "Front-End Web Developer Nanodegree",
      "school": "Udacity",
      "dates": 2016,
      "url": "https://www.udacity.com/"
    }]
};

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
      "dates": "2014 – 2015",
      "description": "<li>Managed support resources for global, top-tier DoubleClick Rich Media and AdWords Display Ad Builder customers</li><li>Supported template creation at scale for Google Web Designer’s Start-from-Template release</li>"
    },{
      "employer": "Google",
      "title": "Creative Technical Specialist",
      "location": "San Francisco, CA",
      "dates": "2011 – 2014",
      "description": "<li>Advised agencies on DoubleClick Studio capabilities and provided support to resolve issues (phone / email / tickets)</li><li>Conducted weekly Studio Fundamentals webinar to assure success of new Studio users</li>"
    },{
      "employer": "Google",
      "title": "Rich Media Production Specialist",
      "location": "San Francisco, CA",
      "dates": "2008 – 2011",
      "description": "<li>Revised clients’ ActionScript for DoubleClick Rich Media, with 98% accuracy to delight Campaign Managers and clients</li><li>Prototyped tool in Python / Django / App Engine with QA team to increase efficiency of global Rich Media production</li>"
    },{
      "employer": "Dish Network",
      "title": "Instructional Media Developer",
      "location": "San Francisco, CA",
      "dates": "2007 – 2008",
      "description": "<li>Created simulations and animations with Flash / AS, Photoshop, and Blender to make engaging eLearning courses</li>"
    },{
      "employer": "CleverMedia",
      "title": "Flash Game Programmer",
      "location": "Denver, CO",
      "dates": "2007",
      "description": "<li>Utilized ActionScript to realize clients’ game concepts</li>"
    },{
      "employer": "Active Education",
      "title": "Instructional Media Developer",
      "location": "Denver, CO",
      "dates": "2005 – 2007",
      "description": "<li>Created interactions and animations with Flash / AS and Photoshop to make engaging eLearning courses</li>"
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
      "dates": "2015 – 2016",
      "description": "Portfolio page built from a mock-up PDF utilizing Bootstrap for a responsive layout.",
      "images": [["images/portfolio-thumb@1x.png","images/portfolio-thumb@2x.png"]],
      "url": "https://github.com/KevinFrutiger/frontend-nanodegree-portfolio"
    },{
      "title": "Résumé",
      "dates": "2015 – 2016",
      "description": "Résumé utilizing jQuery and JSON objects for each section. You're viewing this now.",
      "images": [["images/resume-thumb@1x.png", "images/resume-thumb@2x.png"]],
      "url": "https://github.com/KevinFrutiger/frontend-nanodegree-resume"
    },{
      "title": "Arcade Game Clone",
      "dates": "2015",
      "description": "Clone of the classic arcade game <em>Frogger</em> uses pseudo-classical JavaScript OOP to create player and enemy entities.",
      "images": [["images/arcade-game-thumb@1x.png", "images/arcade-game-thumb@2x.png"]],
      "url": "https://github.com/KevinFrutiger/frontend-nanodegree-arcade-game"
    },{
      "title": "Website Optimization",
      "dates": "2015",
      "description": "Project to optimize CRP and rendering performance during user interaction.",
      "images": [["images/web-optimization-thumb@1x.png", "images/web-optimization-thumb@2x.png"]],
      "url": "https://github.com/KevinFrutiger/frontend-nanodegree-web-optimization"
    },{
      "title": "Neighborhood Map",
      "dates": "2015",
      "description": "Application utilizing Knockout.js to display a filterable list of places as markers on a Google Map.",
      "images": [["images/neighborhood-map-thumb@1x.png", "images/neighborhood-map-thumb@2x.png"]],
      "url": "https://github.com/KevinFrutiger/frontend-nanodegree-neighborhood-map"
    },{
      "title": "Feed Reader Testing",
      "dates": "2015",
      "description": "Application utilizing Backbone.js to allow the user to query food items and save a calorie total for the day.",
      "images": [["images/feed-reader-testing-thumb@1x.png", "images/feed-reader-testing-thumb@2x.png"]],
      "url": "https://github.com/KevinFrutiger/frontend-nanodegree-feed-reader"
    },{
      "title": "Health Tracker",
      "dates": "2016",
      "description": "Project to write Jasmine tests for an existing RSS feed reading application.",
      "images": [["images/health-tracker-thumb@1x.png", "images/health-tracker-thumb@2x.png"]],
      "url": "https://github.com/KevinFrutiger/frontend-nanodegree-health-tracker"
    },{
      "title": "Neighborhood Map - Backbone",
      "dates": "2016",
      "description": "A rebuild of the Knockout.js version of the application with improved accessibility. Utilizes Backbone.js to display a filterable list of places as markers on a Google Map.",
      "images": [["images/neighborhood-map-thumb@1x.png", "images/neighborhood-map-thumb@2x.png"]],
      "url": "https://github.com/KevinFrutiger/fend-neighborhood-map-backbone"
    }]
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
    bioPic: '<img srcset="%data1% 2x" src="%data2%" class="biopic" width="211" height="211" alt="%altTextData%">',
    welcomeMsg: '<p class="welcome-message">%data%</p>',
    skillsStart: '<h2 id="skills-heading">Skills at a Glance:</h2><ul id="skills">'+
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
    var formattedBioPic = '';
    if (bio.biopic.length) {
      formattedBioPic = this.HTMLstrings.bioPic;
      formattedBioPic = this.HTMLstrings.bioPic.replace('%data1%', bio.biopic[1])
                                               .replace('%data2%', bio.biopic[0])
                                               .replace('%altTextData%', bio.name);
    }
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
   * Returns array of &lt;li&gt; tag strings containing contact information.
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
    schoolStart: '<li class="education-entry"></li>',
    schoolName: '<h3><a href="#" target="_blank">%data%',
    schoolDegree: ' -- %data%</a></h3>',
    schoolDates: '<div class="date-text">%data%</div>',
    schoolLocation: '<div class="location-text">%data%</div>',
    schoolMajor: '<em>Major: %data%</em>',
    onlineClasses: '<h3 class="online-classes">Online Classes</h3>',
    onlineTitle: '<h4><a href="#" target="_blank">%data%',
    onlineSchool: ' - %data%</a></h4>',
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

      var $educationList = $('<ul></ul>');
      $educationList.appendTo($education);

      for (var i = 0, len = education.schools.length; i < len; i++) {
        var $school = $(this.HTMLstrings.schoolStart);
        var school = education.schools[i];

        // Format data
        var formattedName = this.HTMLstrings.schoolName.replace(
                                '%data%', school.name);
        formattedName = formattedName.replace('#', school.url);
        var formattedDegree = this.HTMLstrings.schoolDegree.replace(
                                  '%data%', school.degree);
        var formattedSchoolDates = '';
        if (school.dates) {
          formattedSchoolDates = this.HTMLstrings.schoolDates.replace(
                                                 '%data%', school.dates);
        }
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
        $educationList.append($school);
      }
    }

    if (education.onlineCourses && education.onlineCourses.length > 0) {

      // Add the online classes header
      $education.append(this.HTMLstrings.onlineClasses);

      var $onlineClassList = $('<ul></ul>');
      $onlineClassList.appendTo($education);

      for (var i2 = 0, len2 = education.onlineCourses.length; i2 < len2; i2++) {
        var $course = $('<li></li>');
        $course = $(this.HTMLstrings.schoolStart);
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
        $onlineClassList.append($course);
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
    workStart: '<li class="work-entry"></li>',
    workEmployer: '<h3 class="employer-text">%data%',
    workTitle: ' - %data%</h3>',
    workDates: '<div class="date-text">%data%</div>',
    workLocation: '<div class="location-text">%data%</div>',
    workDescription: '<ul class="work-entry-list">%data%</ul>'
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

    var $workExperience = $('#workExperience .content ul');

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
    projectStart: '<li class="project-entry col-4"></li>',
    projectTitle: '<h3><a href="#" aria-label="%data% project">%data%</a></h3>',
    projectDates: '<div class="date-text">%data%</div>',
    projectDescription: '<p>%data%</p>',
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
                               /\%data\%/g, project.title);
      formattedTitle = formattedTitle.replace(
                           'href="#"', 'href="' + project.url + '"');
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

    // Add A11y list of places.
    var $locationList = $('<ul id="places-list"></ul>');
    var locations = controller.locationFinder().sort();

    for (var i = 0, len = locations.length; i < len; i++) {
      $locationList.append('<li>' + locations[i] + '</li>');
    }

    // Add a list for screenreaders. Place before map so screenreaders read
    // it first.
    var $mapDiv = $('#mapDiv .content');
    $mapDiv.append($locationList);

    // Add a map.
    var $mapWrapper = $('<div id=\"map-wrapper\"></div>');
    $mapWrapper.append(googleMap);
    $mapDiv.append($mapWrapper);
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
   * @memberof controller
   * @returns {object}
   */
  getBio: function() {
    return bio;
  },

  /**
   * Returns education data.
   * @memberof controller
   * @returns {object}
   */
  getEducation: function() {
    return education;
  },

  /**
   * Returns project data.
   * @memberof controller
   * @returns {object}
   */
  getProjects: function() {
    return projects;
  },

  /**
   * Returns work data.
   * @memberof controller
   * @returns {object}
   */
  getWork: function() {
    return work;
  },

  /**
   * Returns de-duped array containing current, school, and work locations.
   * @returns {array}
   */
  locationFinder: function() {

    var locations = [];

    // Add the single location property from bio.
    locations.push(bio.contacts.location);

    // Add the school locations.
    for (var schoolIndex = 0, schoolLen = education.schools.length;
         schoolIndex < schoolLen;
         schoolIndex++) {
      if (locations.indexOf(education.schools[schoolIndex]) === -1) {
        locations.push(education.schools[schoolIndex].location);
      }
    }

    // Add the work locations.
    for (var jobsIndex = 0, jobsLen = work.jobs.length;
         jobsIndex < jobsLen;
         jobsIndex++) {
      if (locations.indexOf(work.jobs[jobsIndex].location) === -1) {
        locations.push(work.jobs[jobsIndex].location);
      }
    }

    return locations;
  }
};

// Initialize the page.
controller.init();
