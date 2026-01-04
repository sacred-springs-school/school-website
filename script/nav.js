function renderNavbar(activePage = "home") {
    const isActive = (page) =>
        page === activePage
            ? "block py-2 px-3 text-primary bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0"
            : "block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0";

    return `
<nav id="nav-menu" class="bg-neutral-primary fixed w-full z-50 top-0 start-0 bg-white">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://sacredspringsschool.com" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="./img/sacred-springs-school-logo.webp" class="h-10" alt="Sacred Springs Logo" />
            <span class="self-center text-xl text-heading font-semibold whitespace-nowrap">
                Sacred Springs Schools
            </span>
        </a>

        <div class="inline-flex cursor-pointer md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a type="button"
                target="_blank" rel="noopener noreferrer"
                href="https://wa.me/256782833430?text=Hello%20Sacred%20Springs%20School%2C%0A%0AI%20would%20like%20to%20inquire%20about%20enrolling%20my%20child%20in%20the%20Nursery%20or%20Primary%20section.%20Kindly%20share%20details%20on%20admission%20requirements%2C%20available%20classes%2C%20and%20the%20enrollment%20process.%0A%0AThank%20you."                            
                class="hidden md:block bg-primary text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-md text-sm px-3 py-2 focus:outline-none">
                Enroll your child
            </a>

            <button data-collapse-toggle="navbar-cta" type="button"
                class="inline-flex items-center p-2 w-9 h-9 justify-center text-sm text-body rounded-md md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
                aria-controls="navbar-cta" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                        d="M5 7h14M5 12h14M5 17h14" />
                </svg>
            </button>
        </div>

        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-md bg-neutral-secondary-soft
                       md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">

                <li>
                    <a href="./index.html" class="${isActive("home")}" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="./about.html" class="${isActive("about")}">About</a>
                </li>
                <li>
                    <a href="./gallery.html" class="${isActive("gallery")}">Gallery</a>
                </li>
                <li>
                    <a href="./facilities.html" class="${isActive("facilities")}">Facilities</a>
                </li>
                <li>
                    <a href="./resources.html" class="${isActive("communication")}">Communication</a>
                </li>
                <li>
                    <a href="./contact.html" class="${isActive("contact")}">Contact us</a>
                </li>

            </ul>
        </div>
    </div>
</nav>
`;
}
