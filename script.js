function homePage() {}
function bookingPage() {}
function contactPage() {}

function errorPage() {
    const page = document.createElement("div");
    page.innerHTML = `
        <h2>Error Page</h2>
        <p>Halaman error</p>`;
    return page;
}

const route = {
    "/": homePage(),
    "/menu": menuPage(),
    "/booking": bookingPage(),
    "/contact": contactPage(),
};

function router() {
    const hash = window.location.hash || "#/";
    const path = hash.replace("#/", "/");
    try {
        document.getElementById("app");
        app.innerHTML = "";
    } catch (error) {
        app.appendChild(errorPage());
    } finally {
        app.appendChild(route[path]);
    }
}

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
