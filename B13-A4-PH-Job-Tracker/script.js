const jobs = [
  {
    id: 1,
    company: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130k - $175k",
    description: "Build cross-platform mobile applications used worldwide.",
    status: "all"
  },
  {
    id: 2,
    company: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles",
    type: "Part-time",
    salary: "$80k - $120k",
    description: "Create modern web experiences for clients.",
    status: "all"
  },
  {
    id: 3,
    company: "DataViz Solutions",
    position: "Data Visualization Specialist",
    location: "Boston",
    type: "Full-time",
    salary: "$125k - $165k",
    description: "Transform complex data into visuals.",
    status: "all"
  },
  {
    id: 4,
    company: "CloudFirst Inc",
    position: "Backend Developer",
    location: "Seattle",
    type: "Full-time",
    salary: "$140k - $190k",
    description: "Design scalable backend systems.",
    status: "all"
  },
  {
    id: 5,
    company: "Innovation Labs",
    position: "UI/UX Engineer",
    location: "Austin",
    type: "Full-time",
    salary: "$110k - $150k",
    description: "Build beautiful user interfaces.",
    status: "all"
  },
  {
    id: 6,
    company: "MegaCorp Solutions",
    position: "JavaScript Developer",
    location: "New York",
    type: "Full-time",
    salary: "$130k - $170k",
    description: "Develop enterprise applications.",
    status: "all"
  },
  {
    id: 7,
    company: "StartupXYZ",
    position: "Full Stack Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$120k - $160k",
    description: "Work on fast-growing startup platform.",
    status: "all"
  },
  {
    id: 8,
    company: "TechCorp Industries",
    position: "Senior Frontend Developer",
    location: "San Francisco",
    type: "Full-time",
    salary: "$130k - $175k",
    description: "Build scalable frontend apps.",
    status: "all"
  }
];

let currentTab = "all";

const container = document.getElementById("jobsContainer");
const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const tabCount = document.getElementById("tabCount");
const emptyState = document.getElementById("emptyState");

/* Render */
function renderJobs() {
  container.innerHTML = "";

  const filtered = jobs.filter(job =>
    currentTab === "all" ? true : job.status === currentTab
  );

  tabCount.innerText = filtered.length + " jobs";

  if (filtered.length === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
  }

  filtered.forEach(job => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <span class="delete" data-id="${job.id}">🗑</span>

      <h3>${job.company}</h3>
      <p class="position">${job.position}</p>

      <p class="meta">${job.location} • ${job.type} • ${job.salary}</p>

      <span class="status">
        ${job.status === "interview" ? "Interview" :
          job.status === "rejected" ? "Rejected" : "Not Applied"}
      </span>

      <p class="description">${job.description}</p>

      <div class="buttons">
        <button class="interview" data-id="${job.id}">Interview</button>
        <button class="rejected" data-id="${job.id}">Rejected</button>
      </div>
    `;

    container.appendChild(div);
  });

  updateCounts();
}

/* Counts */
function updateCounts() {
  totalCount.innerText = jobs.length;
  interviewCount.innerText = jobs.filter(j => j.status === "interview").length;
  rejectedCount.innerText = jobs.filter(j => j.status === "rejected").length;
}

/* Click events */
container.addEventListener("click", e => {
  const id = Number(e.target.dataset.id);
  const job = jobs.find(j => j.id === id);

  if (e.target.classList.contains("interview")) {
    job.status = "interview";
  }

  if (e.target.classList.contains("rejected")) {
    job.status = "rejected";
  }

  if (e.target.classList.contains("delete")) {
    const index = jobs.findIndex(j => j.id === id);
    jobs.splice(index, 1);
  }

  renderJobs();
});

/* Tabs */
document.querySelectorAll(".tab").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    btn.classList.add("active");

    currentTab = btn.dataset.tab;
    renderJobs();
  });
});

renderJobs();