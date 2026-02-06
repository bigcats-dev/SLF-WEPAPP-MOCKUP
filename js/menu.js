const menus = [ 
  { label: "Dashboard", href: "dashboard.html" },
  { label: "รายชื่อนายจ้าง", href: "employer-list.html" },
  { label: "รายการลงพื้นที่", href: "visit-list.html" },
  { label: "ทีมลงพื้นที่", href: "team-list.html" },
  { label: "รายการลงพื้นที่", href: "report.html" }, 
  { label: "ออกจากระบบ", href: "login.html" },
];

function renderMenu(containerId) {
  let currentPage = window.location.pathname.split("/").pop();
 
  if (currentPage === "visit-add.html") {
    currentPage = "visit-list.html";
  }
  else if (currentPage === "visit-detail.html") {
    currentPage = "visit-list.html";
  } 

  const container = document.getElementById(containerId);

  let html = `<ul class="nav nav-tabs mb-3 menutx mb-x">`;

  menus.forEach((menu) => {
    const isActive = menu.href === currentPage ? "active" : "";
    html += `
      <li class="nav-item ${isActive}">
        <a class="nav-link" href="${menu.href}">
          ${menu.icon ? `<i class="${menu.icon}"></i>` : menu.label}
        </a>
      </li>
    `;
  });

  html += `</ul>`;
  container.innerHTML = html;
}
