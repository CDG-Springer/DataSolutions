const links = document.querySelectorAll('.scroll_to')
links.forEach((scrolling) =>{
    scrolling.addEventListener("click", () =>{
        const el = document.getElementById(scrolling.getAttribute("data-link"));

        el.scrollIntoView({behavior: "smooth", block: "start"})
    })
})