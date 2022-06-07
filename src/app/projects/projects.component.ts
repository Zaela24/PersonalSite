import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  resumePositions = [{
    company: 'Optum',
    jobTitle: 'Assoc Software Engineer',
    startDate: 'Nov 2021',
    endDate: 'Present',
    jobFunctions: [
      {
        jobFunction: 'test'
      },
      {
        jobFunction: 'test'
      },
      {
        jobFunction: 'test'
      },
      {
        jobFunction: 'test'
      },
      {
        jobFunction: 'test'
      },
    ]
  },
  {
    company: 'Optum (Brooksource)',
    jobTitle: 'Contract Software Engineer',
    startDate: 'Apr 2021',
    endDate: 'Nov 2021',
    jobFunctions: [
      {
        jobFunction: 'test'
      },
      {
        jobFunction: 'test'
      },
      {
        jobFunction: 'test'
      },
      {
        jobFunction: 'test'
      },
      {
        jobFunction: 'test'
      },
    ]
  }]

  cards = [{
    title: "Tappy Pathogen",
    subtitle: "Android Game",
    images: [{
      img: "../../assets/img/tappypathogen1.webp",
      alt: "Screenshot of TappyPathogen game start"
    },
    {
      src: "../../assets/img/tappypathogen2.webp",
      alt: "Screenshot of TappyPathogen game over"
    }],
    description: "A simple android game made over the span of about"
      + "6 hours and published to the google play store.\n\n"
      + "This was a good opportunity to experience publishing an app,"
      + "even if it's a small one.",
    links: [{
      url: "https://play.google.com/store/apps/details?id=com.zaelaapps.TappyPathogen&gl=US",
      text: "Tappy Pathogen in the Play Store"
    }]
  },{
    title: "Tappy Pathogen 2",
    subtitle: "Android Game",
    images: [{
      img: "../../assets/img/tappypathogen1.webp",
      alt: "Screenshot of TappyPathogen game start"
    },
    {
      src: "../../assets/img/tappypathogen2.webp",
      alt: "Screenshot of TappyPathogen game over"
    }],
    description: "A simple android game made over the span of about"
      + "6 hours and published to the google play store.\n\n"
      + "This was a good opportunity to experience publishing an app,"
      + "even if it's a small one.",
    links: [{
      url: "https://play.google.com/store/apps/details?id=com.zaelaapps.TappyPathogen&gl=US",
      text: "Tappy Pathogen in the Play Store"
    }]
  },{
    title: "Tappy Pathogen 3",
    subtitle: "Android Game",
    images: [{
      img: "../../assets/img/tappypathogen1.webp",
      alt: "Screenshot of TappyPathogen game start"
    },
    {
      src: "../../assets/img/tappypathogen2.webp",
      alt: "Screenshot of TappyPathogen game over"
    }],
    description: "A simple android game made over the span of about"
      + "6 hours and published to the google play store.\n\n"
      + "This was a good opportunity to experience publishing an app,"
      + "even if it's a small one.",
    links: [{
      url: "https://play.google.com/store/apps/details?id=com.zaelaapps.TappyPathogen&gl=US",
      text: "Tappy Pathogen in the Play Store"
    }]
  },{
    title: "Tappy Pathogen 4",
    subtitle: "Android Game",
    images: [{
      img: "../../assets/img/tappypathogen1.webp",
      alt: "Screenshot of TappyPathogen game start"
    },
    {
      src: "../../assets/img/tappypathogen2.webp",
      alt: "Screenshot of TappyPathogen game over"
    }],
    description: "A simple android game made over the span of about"
      + "6 hours and published to the google play store.\n\n"
      + "This was a good opportunity to experience publishing an app,"
      + "even if it's a small one.",
    links: [{
      url: "https://play.google.com/store/apps/details?id=com.zaelaapps.TappyPathogen&gl=US",
      text: "Tappy Pathogen in the Play Store"
    }]
  },{
    title: "Tappy Pathogen 5",
    subtitle: "Android Game",
    images: [{
      img: "../../assets/img/tappypathogen1.webp",
      alt: "Screenshot of TappyPathogen game start"
    },
    {
      src: "../../assets/img/tappypathogen2.webp",
      alt: "Screenshot of TappyPathogen game over"
    }],
    description: "A simple android game made over the span of about"
      + "6 hours and published to the google play store.\n\n"
      + "This was a good opportunity to experience publishing an app,"
      + "even if it's a small one.",
    links: [{
      url: "https://play.google.com/store/apps/details?id=com.zaelaapps.TappyPathogen&gl=US",
      text: "Tappy Pathogen in the Play Store"
    }]
  },{
    title: "Tappy Pathogen 6",
    subtitle: "Android Game",
    images: [{
      img: "../../assets/img/tappypathogen1.webp",
      alt: "Screenshot of TappyPathogen game start"
    },
    {
      src: "../../assets/img/tappypathogen2.webp",
      alt: "Screenshot of TappyPathogen game over"
    }],
    description: "A simple android game made over the span of about"
      + "6 hours and published to the google play store.\n\n"
      + "This was a good opportunity to experience publishing an app,"
      + "even if it's a small one.",
    links: [{
      url: "https://play.google.com/store/apps/details?id=com.zaelaapps.TappyPathogen&gl=US",
      text: "Tappy Pathogen in the Play Store"
    }]
  },{
    title: "Tappy Pathogen 7",
    subtitle: "Android Game",
    images: [{
      img: "../../assets/img/tappypathogen1.webp",
      alt: "Screenshot of TappyPathogen game start"
    },
    {
      src: "../../assets/img/tappypathogen2.webp",
      alt: "Screenshot of TappyPathogen game over"
    }],
    description: "A simple android game made over the span of about"
      + "6 hours and published to the google play store.\n\n"
      + "This was a good opportunity to experience publishing an app,"
      + "even if it's a small one.",
    links: [{
      url: "https://play.google.com/store/apps/details?id=com.zaelaapps.TappyPathogen&gl=US",
      text: "Tappy Pathogen in the Play Store"
    }]
  },{
    title: "Tappy Pathogen 8",
    subtitle: "Android Game",
    images: [{
      img: "../../assets/img/tappypathogen1.webp",
      alt: "Screenshot of TappyPathogen game start"
    },
    {
      src: "../../assets/img/tappypathogen2.webp",
      alt: "Screenshot of TappyPathogen game over"
    }],
    description: "A simple android game made over the span of about"
      + "6 hours and published to the google play store.\n\n"
      + "This was a good opportunity to experience publishing an app,"
      + "even if it's a small one.",
    links: [{
      url: "https://play.google.com/store/apps/details?id=com.zaelaapps.TappyPathogen&gl=US",
      text: "Tappy Pathogen in the Play Store"
    }]
  },{
    title: "Tappy Pathogen 9",
    subtitle: "Android Game",
    images: [{
      img: "../../assets/img/tappypathogen1.webp",
      alt: "Screenshot of TappyPathogen game start"
    },
    {
      src: "../../assets/img/tappypathogen2.webp",
      alt: "Screenshot of TappyPathogen game over"
    }],
    description: "A simple android game made over the span of about"
      + "6 hours and published to the google play store.\n\n"
      + "This was a good opportunity to experience publishing an app,"
      + "even if it's a small one.",
    links: [{
      url: "https://play.google.com/store/apps/details?id=com.zaelaapps.TappyPathogen&gl=US",
      text: "Tappy Pathogen in the Play Store"
    }]
  },{
    title: "Tappy Pathogen 10",
    subtitle: "Android Game",
    images: [{
      img: "../../assets/img/tappypathogen1.webp",
      alt: "Screenshot of TappyPathogen game start"
    },
    {
      src: "../../assets/img/tappypathogen2.webp",
      alt: "Screenshot of TappyPathogen game over"
    }],
    description: "A simple android game made over the span of about"
      + "6 hours and published to the google play store.\n\n"
      + "This was a good opportunity to experience publishing an app,"
      + "even if it's a small one.",
    links: [{
      url: "https://play.google.com/store/apps/details?id=com.zaelaapps.TappyPathogen&gl=US",
      text: "Tappy Pathogen in the Play Store"
    }]
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
