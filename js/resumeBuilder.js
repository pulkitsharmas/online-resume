/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var bio = {
 	"name": "John Doe",
 	"role": "Web Developer",
 	"contacts": {
 		"mobile": "650-555-5555",
 		"email": "john@example.com",
 		"github": "johndoe",
 		"twitter": "@johndoe",
 		"location": "San Francisco",
 	},
 	"welcomeMessage": "lorem ipsum dolor sit amet etc etc etc.",
 	"skills": ["awesomeness","delivering things","cyrogenic sleep","saving the universe"],
 	"biopic": "images/fry.jpg",
 	"display": function() {
 		var formattedName = HTMLheaderName.replace("%data%",bio.name);
 		$("#header").append(formattedName);
 		var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
 		$("#header").append(formattedRole);
 		var contactList = $("#header").children("ul");
 		$("#header").append(contactList);
 		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
 		$("#topContacts, #footerContacts").append(formattedMobile);
 		var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
 		$("#topContacts, #footerContacts").append(formattedEmail);
 		var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
 		$("#topContacts, #footerContacts").append(formattedGithub);
 		var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
 		$("#topContacts, #footerContacts").append(formattedTwitter);
 		var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
 		$("#topContacts, #footerContacts").append(formattedLocation);
 		var formattedImage = HTMLbioPic.replace("%data%",bio.biopic);
 		$("#header").append(formattedImage);
 		var formattedMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
 		$("#header").append(formattedMsg);
 		if(bio.skills.length > 0) {
	 		$("#header").append(HTMLskillsStart);
	 		for(var x = 0; x < bio.skills.length; x++) {
	 			var formattedSkill = HTMLskills.replace("%data%",bio.skills[x]);
	 			$("#skills").append(formattedSkill);
	 		}
 		}	

 	}
 };

 var education = {
 	"schools": [
 		{
 			"name": "Nova Southeastern University",
 			"location": "Fort Louderdale, FL",
 			"degree": "Masters",
 			"majors": ["CS"],
 			"dates": "2013",
 			"url": "www.nsu.edu"
 		},
 		{
 			"name": "Eckerd College",
 			"location": "Saint Petersburg , FL",
 			"degree": "BA",
 			"majors": ["CS"],
 			"dates": "2003",
 			"url": "www.ekc.edu"
 		}
 	],
 	"onlineCourses" : [
 		{
 			"title": "JavaScript Crash Course",
 			"school": "Udacity",
 			"dates": "2014",
 			"url": "http://www.udacity.com/course/ud804"
 		}
 	],
 	"display" : function() {
 		if(education.schools.length > 0) {
 			$("#education").append(HTMLschoolStart);
 			for(var x = 0; x < education.schools.length; x++) {
 				var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[x].name);
 				formattedSchoolName = formattedSchoolName.replace("#",education.schools[x].url);
 				var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[x].degree);	
 				$(".education-entry:last").append(formattedSchoolName+formattedSchoolDegree);
 				var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[x].location);	
 				$(".education-entry:last").append(formattedSchoolLocation);
 				if(education.schools[x].majors.length > 0) {
 					for( var y = 0 ; y < education.schools[x].majors.length; y++) {
 						var formattedSchoolMajors = HTMLschoolMajor.replace("%data%",education.schools[x].majors[y]);	
 						$(".education-entry:last").append(formattedSchoolMajors);		
 					}
 				}			
 				var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[x].dates);	
 				$(".education-entry:last").append(formattedSchoolDates);
 			}
 		}
 		if(education.onlineCourses.length > 0) {
 			$(".education-entry").append(HTMLonlineClasses);
 			for(var z = 0; z < education.onlineCourses.length; z++) {
 				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[z].title);
 				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[z].school);
 				$(".education-entry:last").append(formattedOnlineTitle+formattedOnlineSchool);
 				var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[z].dates);
 				$(".education-entry:last").append(formattedOnlineDates);
 				var formattedOnlineUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[z].url);
 				$(".education-entry:last").append(formattedOnlineUrl);
 			}
 		} 		
 	}
 };

 var work = {
 	"jobs": [
 		{
 			"employer": "Planet Express",
 			"title": "Delivery Boy",
 			"location": "Brooklyn, NY",
 			"dates": "January 2000 - Future",
 			"description": "Who moved my cheese cheesy feet cauliflower cheese.",
 		},
 		{
 			"employer": "Panucci's Pizza",
 			"title": "Delivery Boy",
 			"location": "Manhatten, NY",
 			"dates": "1998 - December 31, 1999",
 			"description": "Who moved my cheese cheesy feet cauliflower cheese.",
 		}
 	],
 	"display": function() {
 		if(work.jobs.length > 0) {
 			$("#workExperience").append(HTMLworkStart);
 			for(var x = 0; x < work.jobs.length; x++) {
 				var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[x].employer);
 				var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[x].title);
 				var formattedEmployerTitle = formattedEmployer + formattedTitle;
				$(".work-entry:last").append(formattedEmployerTitle);
				var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[x].location);
				$(".work-entry:last").append(formattedLocation);
				var formattedDates = HTMLworkDates.replace("%data%",work.jobs[x].dates);
				$(".work-entry:last").append(formattedDates);
				var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[x].description);
				$(".work-entry:last").append(formattedDescription); 				

 			}
 		}			
 	}
 };

 var projects = {
 	"projects": [
 		{
 			"title": "Sample Project 1",
 			"dates": "2014",
 			"description": "Who moved my cheese cheesy feet cauliflower cheese.",
 			"images": ["images/img.gif","images/img.gif"]
 		}
 	],
 	"display": function() {
 		// body...
 		if(projects.projects.length > 0) {
 			$("#projects").append(HTMLprojectStart);
 			for( var zy =  0; zy < projects.projects.length; zy++) {
 				var formattedprojectTitle = HTMLprojectTitle.replace("%data%",projects.projects[zy].title);
 				$(".project-entry:last").append(formattedprojectTitle);
 				var formattedprojectDate = HTMLprojectDates.replace("%data%",projects.projects[zy].dates);
 				$(".project-entry:last").append(formattedprojectDate);
 				var formattedprojectDescription = HTMLprojectDescription.replace("%data%",projects.projects[zy].description);
 				$(".project-entry:last").append(formattedprojectDescription);
 				if( projects.projects[zy].images.length > 0) {
 					for(var i = 0; i < projects.projects[zy].images.length; i++) {
 						var formattedprojectImages = HTMLprojectImage.replace("%data%",projects.projects[zy].images[i]);
		 				$(".project-entry:last").append(formattedprojectImages);			
 					}
 				
 				}
 				

 			}
 		}
 	}
 };

 bio.display();
 work.display();
 projects.display();
 education.display();
 $("#mapDiv").append(googleMap);
 