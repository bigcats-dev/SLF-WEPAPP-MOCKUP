document.addEventListener("DOMContentLoaded", () => {

  /* ===== Inject HTML ===== */
  const mobileMenuHTML = `
    <div id="mobileOverlay"></div>

    <div id="mobileMenu">
      <div class="mobile-menu-header">
          วรรณา พาสุข  <b>Admin</b>
        <br>
        บริษัท เจ มาร์ท จำกัด (มหาชน)  
        <i class="far fa-times" id="closeMobileMenu"></i>
      </div>
      <ul class="mobile-menu">
        <li><a href="dashboard.html">Dashboard</a></li>
        <li><a href="employer-list.html">รายชื่อนายจ้าง</a></li>
        <li><a href="visit-list.html">รายการลงพื้นที่</a></li>
        <li><a href="team-list.html">ทีมลงพื้นที่</a></li>
        <li><a href="report.html">รายงานการลงพื้นที่</a></li> 
        <li class="logout"><a href="#">ออกจากระบบ</a></li>
      </ul>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", mobileMenuHTML);

  /* ===== Logic ===== */
  const openBtn = document.querySelector(".bar-m i");
  const closeBtn = document.getElementById("closeMobileMenu");
  const menu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("mobileOverlay");

  if (!openBtn) return;

  openBtn.addEventListener("click", () => {
    menu.classList.add("open");
    overlay.classList.add("show");
  });

  closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  function closeMenu() {
    menu.classList.remove("open");
    overlay.classList.remove("show");
  }
/* ===== Active Menu ===== */
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".mobile-menu a").forEach(link => {
  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {
    link.classList.add("active");
    link.closest("li")?.classList.add("active");
  }
});
});

