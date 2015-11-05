# Résumé Project

This was a project to buid a résumé, forking from an existing codebase and meeting the requirements below.

# Criteria

## Stage 1
1. Fork the original repo
2. Update src/js/resumeBuilder.js with our content, which must contain
  * Four valid **JSON** objects, respresenting each resume section:
    * `bio` contains:

            name : string
            role : string
            contacts : an object with
                  mobile: string
                  email: string
                  github: string
                  twitter: string
                  location: string
            welcomeMessage: string
            skills: array of strings
            biopic: url
            display: function taking no parameters

    * `education` contains:

                schools: array of objects with
                     name: string
                     location: string
                     degree: string
                     majors: array of strings
                     dates: integer (graduation date)
                     url: string
                onlineCourses: array with
                     title: string
                     school: string
                     date: integer (date finished)
                     url: string
                display: function taking no parameters

    * `work` contains:

                jobs: array of objects with
                     employer: string
                     title: string
                     location: string
                     dates: string (works with a hyphen between them)
                     description: string
                display: function taking no parameters

    * `projects` contains:

                projects: array of objects with
                      title: string
                      dates: string (works with a hyphen between them)
                      description: string
                      images: array with string urls
                display: function taking no parameters

  * All of the code for adding elements to the resume must be within functions. And all of our functions should be encapsulated within the same objects containing your resume data.

3. Use the formatting strings in src/js/helper.js to format the data
4. Use **jQuery** to manipulate the elements and add them to the DOM
5. Implement the Google map (from provided code) and add information to the markers

Project was expected to look like the following:
![](http://i.imgur.com/pWU1Xbl.png)

## Stage 2 (optional)
1. Customize styling and functionality
