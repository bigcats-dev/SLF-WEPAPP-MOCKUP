const menus = [
  { label: "Dashboard", href: "index.html" },
  { label: "รายการลงพื้นที่", href: "visit-list.html" },

  {
    label: "การตั้งค่า",
    dropdown: true,
    items: [
      { label: "สร้างรอบลงพื้นที่", href: "visit-add.html" },
      { label: "แก้ไขที่อยู่ลงพื้นที่", href: "map-list.html" }
    ]
  }
];


function renderMenu(containerId) {
  let currentPage = window.location.pathname.split("/").pop();

  // map หน้าย่อย → หน้าหลัก
  if (["visit-add.html", "visit-detail.html"].includes(currentPage)) {
    currentPage = "visit-list.html";
  }

  if (["team-add.html", "team-edit.html", "team-view.html"].includes(currentPage)) {
    currentPage = "team-list.html";
  }

  const container = document.getElementById(containerId);

  let html = `<ul class="nav mb-3 menutx mb-x">`;

  menus.forEach((menu) => {

    /* ===== Dropdown Menu ===== */
    if (menu.dropdown) {
      const isActive = menu.items.some(i => i.href === currentPage) ? "active" : "";

      html += `
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle ${isActive}"
             data-bs-toggle="dropdown"
             href="#"
             role="button">
             ${menu.label}
          </a>
          <ul class="dropdown-menu">
            ${menu.items.map(item => `
              <li>
                <a class="dropdown-item ${item.href === currentPage ? "active" : ""}"
                   href="${item.href}">
                   ${item.label}
                </a>
              </li>
            `).join("")}
          </ul>
        </li>
      `;
      return;
    }

    /* ===== Normal Menu ===== */
    const isActive = menu.href === currentPage ? "active" : "";
    html += `
      <li class="nav-item">
        <a class="nav-link ${isActive}" href="${menu.href}">
          ${menu.label}
        </a>
      </li>
    `;
  });

  html += `</ul>`;
  container.innerHTML = html;
}
