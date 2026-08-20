const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');

// توابع کمکی برای جلوگیری از تکرار کد (DRY)
const openMenu = () => {
    mobileMenu?.classList.remove('-translate-x-full');
    mobileMenuBackdrop?.classList.remove('opacity-0', 'hidden');
};

const closeMenu = () => {
    mobileMenu?.classList.add('-translate-x-full');
    mobileMenuBackdrop?.classList.add('opacity-0', 'hidden');
};

// ثبت رویدادها
mobileMenuToggle?.addEventListener('click', openMenu);
mobileMenuClose?.addEventListener('click', closeMenu);
mobileMenuBackdrop?.addEventListener('click', closeMenu); // بهبود UX: بستن با کلیک روی بک‌دراپ

// جایگزین بهینه‌تر برای رویداد resize
const mediaQuery = window.matchMedia('(min-width: 1022px)');
mediaQuery.addEventListener('change', (e) => {
    console.log(e)
    if (e.matches) closeMenu();
});