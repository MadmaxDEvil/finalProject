



// code for side menu
const openButton = document.getElementById('open-sidebar-button')
const navbar = document.getElementById('navbar')

const media = window.matchMedia("(width < 700px)")

media.addEventListener('change', (e) => updateNavbar(e))

function updateNavbar(e){
  const isMobile = e.matches
  console.log(isMobile)
  if(isMobile){
    navbar.setAttribute('inert', '')
  }
  else{
    // desktop device
    navbar.removeAttribute('inert')
  }
}

function openSidebar(){
  navbar.classList.add('show')
  openButton.setAttribute('aria-expanded', 'true')
  navbar.removeAttribute('inert')
}

function closeSidebar(){
  navbar.classList.remove('show')
  openButton.setAttribute('aria-expanded', 'false')
  navbar.setAttribute('inert', '')
}







// Code for slider

new Swiper(".banner-wrapper", {
    
    
    loop: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  










  // Data for dynamic cards
const cardData = [
  {
    image: "./photos/fire.webp", // Update this with the correct path to your image
    category: "SPORTS",
    title: "How AT&T, Verizon, and T-Mobile are responding to the LA wildfires",
    author: "Sarang Sawant",
    date: " Jan 11, 2025",
    description:
      "All the major US carriers have opened up calling and data access for customers affected by the wildfires.",
    link: "#",
  },
  {
    image: "./photos/whatapp.webp", // Another image
    category: "TECHNOLOGY",
    title: "WhatsApp really hopes you want to talk with AI bots",
    author: "John Doe",
    date: "Jan 9, 2025",
    description:
      "A beta update replaces the Communities tab with a new section just for AI chatbots.",
    link: "#",
  },

  {
    image: "./photos/verge.webp", // Another image
    category: "TECHNOLOGY",
    title: "The Verge Awards at CES 2025",
    author: "John Doe",
    date: "Jan 9, 2025",
    description:
      "Fluffy robots, portable TVs, and vacuums with arms and legs. This is what we come to CES for..",
    link: "#",
  },
];

// Function to create and append cards
const createCard = (data) => {
  const container = document.getElementById("card-container");

  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="card-image" style="background-image: url('${item.image}');"></div>
      <div class="card-content">
        <h3><a href="${item.link}">${item.title}</a></h3>
        <div class="meta">
          <i class="fa fa-user"></i> ${item.author} &nbsp; 
          <i class="fa fa-calendar"></i> ${item.date}
        </div>
        <p>${item.description}</p>
        <a href="${item.link}" class="read-more">Read more</a>
      </div>
    `;

    container.appendChild(card);
  });
};

// Generate cards with the data
createCard(cardData);





const listData = [
  {
    number: 1,
    title:
      "Meta is leaving its users to wade through hate and disinformation",
    author: "Yash Sawant",
    date: "JAN 15",
    comments: 27,
    link: "#",
  },

  {
    number: 2,
    title:
      "Zuckerberg trash talks Apple in interview with Joe Roga",
    author: "Abdul Khan",
    date: "JAN 12",
    comments: 77,
    link: "#",
  },
  {
    number: 3,
    title:
      "This stick tests your hormones using your phone and saliva",
    author: "Victoria Alice",
    date: "JAN 5",
    comments: 89,
    link: "#",
  },
  
  {
    number: 4,
    title:
      "Blue Ghost Lunar Lander scheduled to launch on January 15th",
    author: "JUSTINE CALMA",
    date: "JAN 5",
    comments: 89,
    link: "#",
  },

  {
    number: 5,
    title:
      "LG’s StanbyME sequel adds a carrying strap to the portable TV",
    author: "QUENTYN KENNERMER",
    date: "JAN 7",
    comments: 5,
    link: "#",
  },
];

// Function to create and append list items
const createListItems = (data) => {
  const listContainer = document.getElementById("list");

  data.forEach((item) => {
    const listItem = document.createElement("div");
    listItem.className = "item";

    listItem.innerHTML = `
  <div class="number">${item.number}</div>
  <div class="item-content">
    <a href="${item.link}">${item.title}</a>
    <div class="meta">
      ${item.author} <i>|</i> ${item.date} <i>|</i> ${item.comments} comments
    </div>
  </div>
`;

    listContainer.appendChild(listItem);

    if (item.number !== data.length) {
      const separator = document.createElement("hr");
      separator.className = "separator";
      listContainer.appendChild(separator);
    }
  });
};

// Generate the list
createListItems(listData);

// Data for dynamic "sto" sections
const stoData = [
  {
    title: "Tech",
    cards: [
      {
        image: "./photos/MARK.PNG", // Image for this card
        category: "mEDIA",
        title: "Mark Zuckerberg lies ",
        author: "Jane Doe",
        date: "Jan 1, 2025",
        description:
          "Mark Zuckerberg lies about content moderation to Joe Rogan’s face.",
        link: "#",
      },
      {
        image: "./photos/ROCKET.webp", // Image for another card
        category: "TECHNOLOGY",
        title: "How to watch Blue Origin’s next big rocket launch",
        author: "John Smith",
        date: "Jan 3, 2025",
        description:
          "If successful, New Glenn’s first spaceflight will heat up Blue Origin and Project Kuiper’s rivalries with SpaceX.",
        link: "#",
      },

      {
        image: "./photos/CHARGER.png", // Image for another card
        category: "TECHNOLOGY",
        title: "Anker’s display-equipped wall charger from CES is already on sale",
        author: "John Smith",
        date: "Jan 3, 2025",
        description:
          "Amazon’s inexpensive air quality is also discounted today, along with the entry-level Samsung Galaxy Buds FE",
        link: "#",
      },
    ],
    list: [
      {
        number: 1,
        title: "Zuckerberg trash talks Apple in interview with Joe Rogan",
        author: "Abdul Khan",
        date: "Jan 12, 2025",
        comments: 120,
        link: "#",
      },
      {
        number: 2,
        title: "Fortnite Festival is turning into Rock Band with local multiplayer",
        author: "Mahesh Bhat",
        date: "Jan 5, 2025",
        comments: 38,
        link: "#",
      },
      {
        number: 3,
        title: "Microsoft’s Xbox Developer Direct returns on January 23rd with a ‘brand new game’",
        author: "Akhsay Kumar",
        date: "Dec 22, 2025",
        comments: 21,
        link: "#",
      },
      {
        number: 4,
        title: "Keychron is putting Hall effect switches into more keyboards",
        author: "Mahim Williams",
        date: "Jan 9, 2025",
        comments: 64,
        link: "#",
      },
      {
        number: 5,
        title: "Samsung announces foldable TV",
        author: "Bob Williams",
        date: "Jan 5, 2025",
        comments: 8,
        link: "#",
      },
    ],
  },

  {
    title: "Science",
    cards: [
      {
        image: "./photos/snake.webp", // Image for this card
        category: "SPORTS",
        title: "Meta is leaving its users to wade through hate and disinformation",
        author: "Yash Sawant",
        date: "Jan 15, 2025",
        description:
          "The end of fact-checking at Meta stoked backlash from researchers and advocates.",
        link: "#",
      },
      {
        image: "./photos/drone.webp", // Image for another card
        category: "TECHNOLOGY",
        title: "Drone takes out Super Scooper fighting Los Angeles wildfires",
        author: "John Smith",
        date: "Jan 3, 2025",
        description:
          "The water-dropping aircraft is now grounded for repairs as civilian drones hamper firefighting efforts",
        link: "#",
      },

      {
        image: "./photos/climate.webp", // Image for another card
        category: "TECHNOLOGY",
        title: "How AT&T, Verizon, and T-Mobile are responding to the LA wildfires",
        author: "Emma Roth",
        date: "Jan 9, 2025",
        description:
          "All the major US carriers have opened up calling and data access for customers affected by the wildfires.",
        link: "#",
      },
    ],
    list: [
      {
        number: 1,
        title: "Joe Biden’s national climate adviser sees AI as a ‘massive opportunity’",
        author: "Alice Johnson",
        date: "Jan 4, 2025",
        comments: 12,
        link: "#",
      },
      {
        number: 2,
        title: "Blue Ghost Lunar Lander scheduled to launch on January 15th",
        author: "Bob Williams",
        date: "Jan 5, 2025",
        comments: 89,
        link: "#",
      },
      {
        number: 3,
        title: "Samsung’s cheap Galaxy Fit 3 fitness tracker is coming to the US",
        author: "Will Williams",
        date: "Jan 3, 2025",
        comments: 100,
        link: "#",
      },
      {
        number: 4,
        title: "This stick tests your hormones using your phone and saliva",
        author: "Victoria Alice",
        date: "Jan 5, 2025",
        comments: 89,
        link: "#",
      },
      {
        number: 5,
        title: "Researchers put bird legs on a drone so it can take off by jumping",
        author: "Adam Smith",
        date: "Jan 5, 2025",
        comments: 54,
        link: "#",
      },
    ],
  },

  {
    title: "AI",
    cards: [
      {
        image: "./photos/glass.webp", // Image for this card
        category: "SPORTS",
        title: "The smart glasses era is here — I got a first look",
        author: "Victoria Doe",
        date: "Jan 1, 2025",
        description:
          "At CES, the next generation of eyewear was everywhere. It’s just no one seems to agree on why we want it or what the best approach is.",
        link: "#",
      },
      {
        image: "./photos/robot.webp", // Image for another card
        category: "TECHNOLOGY",
        title: "Robot vacuums just keep growing",
        author: "John Smith",
        date: "Jan 14, 2025",
        description:
          "Arms for picking up after you",
        link: "#",
      },

      {
        image: "./photos/iphone.webp", // Image for another card
        category: "TECHNOLOGY",
        title: "How to turn off Apple Intelligence on your iPhone",
        author: "John Smith",
        date: "Jan 3, 2025",
        description:
          "If you don’t find Apple’s AI extras useful, you can disable them.",
        link: "#",
      },
    ],
    list: [
      {
        number: 1,
        title: "How Elon Musk’s xAI is quietly taking over X",
        author: "Marvin Johnson",
        date: "Jan 4, 2025",
        comments: 12,
        link: "#",
      },
      {
        number: 2,
        title: "From ChatGPT to Gemini: how AI is rewriting the internet",
        author: "Shantaram Bajirao",
        date: "Dec 5, 2024",
        comments: 99,
        link: "#",
      },
      {
        number: 3,
        title: "Google is building its own ‘world modeling’ AI team for games and robot training",
        author: "Elon Starc",
        date: "Jan 10, 2025",
        comments: 8,
        link: "#",
      },
      {
        number: 4,
        title: "Nvidia announces $3,000 personal AI supercomputer called Digits",
        author: "Bob Williams",
        date: "Jan 6, 2025",
        comments: 8,
        link: "#",
      },
      {
        number: 5,
        title: "Acer brings AMD chips to its Swift Go Copilot Plus laptops",
        author: "Priya Rao",
        date: "Jan 5, 2025",
        comments: 8,
        link: "#",
      },
    ],
  },
];




// Function to create a "sto" section
const createStoSection = (data) => {
  const mainContainer = document.querySelector("main"); // Target the main container

  data.forEach((sto) => {
    const stoSection = document.createElement("div");
    stoSection.className = "sto";

    stoSection.innerHTML = `
<h1>${sto.title}</h1>
<div class="fullstore">
<div class="leftstore">
  <div class="card-container">
    ${sto.cards
      .map(
        (card) => `
      <div class="card">
        <div class="card-image" style="background-image: url('${card.image}');"></div>
        <div class="card-content">
          <h3><a href="${card.link}">${card.title}</a></h3>
          <div class="meta">
            <i class="fa fa-user"></i> ${card.author} &nbsp; 
            <i class="fa fa-calendar"></i> ${card.date}
          </div>
          <p>${card.description}</p>
          <a href="${card.link}" class="read-more">Read more</a>
        </div>
      </div>
    `
      )
      .join("")}
  </div>
</div>
<div class="rightstore">
  <div class="container">
    <h2>JUST FOR YOU</h2>
    <div class="list">
      ${sto.list
        .map(
          (item) => `
        <div class="item">
          <div class="number">${item.number}</div>
          <div class="item-content">
            <a href="${item.link}">${item.title}</a>
            <div class="meta">
              ${item.author} <i>|</i> ${item.date} <i>|</i> ${item.comments} comments
            </div>
          </div>
        </div>
      `
        )
        .join("")}
    </div>
    <div class="background-text">FOR YOU</div>
  </div>
</div>
</div>
`;

    mainContainer.appendChild(stoSection);
  });
};

// Generate "sto" sections dynamically
createStoSection(stoData);


  