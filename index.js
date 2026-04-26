const stories = [
  { title: "Airfoil", domain: "ciechanow.ski", points: 1148, author: "todsacerdoti", time: "4 hours ago", comments: 115, type: "new" },
  { title: "Amazon lobbyists to be banned from European parliament", domain: "uni-europa.org", points: 42, author: "anigbrowl", time: "16 minutes ago", comments: 8, type: "new" },
  { title: "SuperTux", domain: "github.com/supertux", points: 61, author: "floriangosse", time: "1 hour ago", comments: 13, type: "show" },
  { title: "Pure Programming Language", domain: "agraef.github.io", points: 56, author: "tosh", time: "2 hours ago", comments: 4, type: "show" },
  { title: "Testing the F-35C Tailhook", domain: "the-engi-nerd.github.io", points: 239, author: "sklargh", time: "5 hours ago", comments: 101, type: "past" },
  { title: "Ant Geopolitics", domain: "aeon.co", points: 196, author: "romaintailhurat", time: "7 hours ago", comments: 61, type: "past" },
  { title: "Tesorio is Hiring a Head of Infrastructure", domain: "tesorio.com", points: 0, author: "tesorio", time: "21 minutes ago", comments: 0, type: "jobs" },
  { title: "The unblock API from Browserless", domain: "browserless.io", points: 75, author: "keepamovin", time: "3 hours ago", comments: 65, type: "comments" },
  { title: "I turned my open-source project into a full-time business", domain: "emailengine.app", points: 472, author: "andris9", time: "11 hours ago", comments: 185, type: "ask" },
  { title: "SpaceX discloses cause of Starship anomalies", domain: "arstechnica.com", points: 164, author: "rbanffy", time: "8 hours ago", comments: 188, type: "comments" },
  { title: "Blazer: Business intelligence made simple", domain: "github.com/ankane", points: 124, author: "tosh", time: "7 hours ago", comments: 27, type: "show" },
  { title: "Apple cancels work on electric car, shifts team to generative AI", domain: "bloomberg.com", points: 405, author: "colnetcb", time: "2 hours ago", comments: 416, type: "new" },
  { title: "Synthetic data generation for tabular data", domain: "github.com/sdv-dev", points: 20, author: "skadamat", time: "2 hours ago", comments: 1, type: "show" },
  { title: "Show HN: Mountaineer – Webapps in Python and React", domain: "github.com/piercefreeman", points: 82, author: "piqyfxx", time: "6 hours ago", comments: 33, type: "show" },
  { title: "Show HN: I built an open-source data copy tool called ingestr", domain: "github.com/bruin-data", points: 78, author: "karakanb", time: "6 hours ago", comments: 27, type: "show" },
  { title: "Dracula's Biggest Mistake", domain: "ayjay.org", points: 20, author: "chesterfield", time: "2 hours ago", comments: 24, type: "past" },
  { title: "Consider the Pawpaw", domain: "beltmag.com", points: 55, author: "PaulHoule", time: "7 hours ago", comments: 48, type: "ask" },
  { title: "Why time seems to pass faster as we age", domain: "invertedpassion.com", points: 215, author: "paraschorpa", time: "11 hours ago", comments: 138, type: "comments" },
  { title: "The Second Golden Age of Emacs", domain: "batsov.com", points: 78, author: "susserman", time: "9 hours ago", comments: 39, type: "past" },
  { title: "Social Media First Amendment Cases", domain: "lawfaremedia.org", points: 55, author: "Mjadams", time: "7 hours ago", comments: 140, type: "new" }
];

const storiesList = document.getElementById("storiesList");
const searchInput = document.getElementById("searchInput");
const clearBtn = document.getElementById("clearBtn");
const sectionTitle = document.getElementById("sectionTitle");
const navButtons = document.querySelectorAll("nav button");
const loginBtn = document.getElementById("loginBtn");

let currentFilter = "new";

function renderStories() {
  const searchTerm = searchInput.value.toLowerCase();

  const filteredStories = stories.filter(story => {
    const matchesFilter = currentFilter === "new" || story.type === currentFilter;
    const matchesSearch =
      story.title.toLowerCase().includes(searchTerm) ||
      story.domain.toLowerCase().includes(searchTerm) ||
      story.author.toLowerCase().includes(searchTerm);

    return matchesFilter && matchesSearch;
  });

  storiesList.innerHTML = "";

  if (filteredStories.length === 0) {
    storiesList.innerHTML = "<p class='empty'>No stories found.</p>";
    return;
  }

  filteredStories.forEach((story, index) => {
    const article = document.createElement("article");
    article.className = "story";

    article.innerHTML = `
      <div class="rank">${index + 1}.</div>
      <div>
        <p class="story-title">
          ▲ <a href="https://${story.domain}" target="_blank">${story.title}</a>
          <span class="domain">(${story.domain})</span>
          <span class="tag">${story.type}</span>
        </p>
        <p class="meta">
          ${story.points} points by ${story.author} ${story.time} | hide | ${story.comments} comments
        </p>
      </div>
    `;

    storiesList.appendChild(article);
  });
}

navButtons.forEach(button => {
  button.addEventListener("click", () => {
    navButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    currentFilter = button.dataset.filter;
    sectionTitle.textContent = button.textContent.charAt(0).toUpperCase() + button.textContent.slice(1);
    renderStories();
  });
});

searchInput.addEventListener("input", renderStories);

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  renderStories();
});

loginBtn.addEventListener("click", () => {
  alert("Login feature placeholder for this class project.");
});

document.querySelector('[data-filter="new"]').classList.add("active");
renderStories();
