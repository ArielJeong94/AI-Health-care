document.addEventListener("DOMContentLoaded", () => {
        const btn = document.getElementById("hamburgerBtn");
        const menu = document.getElementById("dropdownMenu");

    function closeMenu() {
        menu.classList.remove("show");
        btn.setAttribute("aria-expanded", "false");
    }

    btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

    const isOpen = menu.classList.toggle("show");
        btn.setAttribute("aria-expanded", String(isOpen));
    });

  // 바깥 클릭하면 닫기
    document.addEventListener("click", closeMenu);

  // 메뉴 내부 클릭은 닫힘 방지
    menu.addEventListener("click", (e) => e.stopPropagation());

  // ESC로 닫기
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeMenu();
    });
});
