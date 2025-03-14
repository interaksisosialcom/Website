// Toggle navbar saat tombol menu diklik
function toggleMenu() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
}

// Tutup navbar jika klik di luar area menu
document.addEventListener("click", function(event) {
    var navbar = document.getElementById("navbar");
    var menuToggle = document.querySelector(".menu-toggle");

    if (!navbar.contains(event.target) && !menuToggle.contains(event.target)) {
        navbar.classList.remove("active");
    }
});