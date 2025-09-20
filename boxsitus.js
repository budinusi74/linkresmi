const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    const BOXSITUS = document.querySelectorAll(".boxsitus");

    function filterMenus() {
      const keyword = searchInput.value.toLowerCase();
      BOXSITUS.forEach(box => {
        const text = box.textContent.toLowerCase();
        box.style.display = text.includes(keyword) ? "block" : "none";
      });
    }

    // Event untuk input dan tombol
    searchInput.addEventListener("input", filterMenus);
    searchBtn.addEventListener("click", filterMenus);