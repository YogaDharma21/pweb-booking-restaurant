function heroSection() {
    const section = document.createElement("section");
    section.innerHTML = `
        <section id="hero" class="section hero">
            <div class="container hero-content">
                <h1>Book Your Table Easily</h1>
                <p>
                    Experience the best dining with an easy and fast reservation
                    system.
                </p>
                <a href="#/booking" class="btn">Book Now</a>
            </div>
        </section>`;
    return section;
}

function menuSection() {
    const section = document.createElement("section");
    section.innerHTML = `  <section id="menu" class="section menu">
            <div class="container">
                <h2>Our Menu</h2>

                <div class="menu-list">
                    <div class="menu-card">
                        <image src="./assets/burger.jpg" alt="Burger"/>
                        <div class="menu-details">
                            <h3>Burger</h3>
                            <p>Burger Berkualitas Tinggi.</p>
                        </div>
                    </div>

                    <div class="menu-card">
                        <image src="./assets/fish.jpg" alt="Fish"/>
                        <div class="menu-details">
                            <h3>Fish</h3>
                            <p>Ikan Goreng Berkualitas Tinggi.</p>
                        </div>
                    </div>

                    <div class="menu-card">
                        <image src="./assets/steak.png" alt="Steak"/>
                        <div class="menu-details">
                            <h3>Steak</h3>
                            <p>Steak Berkualitas Tinggi.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;
    return section;
}

function bookingSection() {
    const section = document.createElement("section");
    section.innerHTML = `   <section id="booking" class="section booking">
            <div class="container">
                <h2>Book a Table</h2>
                <form class="booking-form">
                    <input type="text" id="name" placeholder="Your Name" required />
                    <input type="email" id="email"placeholder="Email" required />
                    <input type="date" id="date" required />
                    <input type="time" id="time" required />
                    <input
                        type="number"
                        id="guests"
                        placeholder="Guests"
                        min="1"
                        required
                    />
                    <button type="button" onclick="booking()">Submit Booking</button>
                </form>
                <p id="hasil"></p>
            </div>
        </section>`;
    return section;
}

function booking() {
    let Name = document.getElementById("name").value;
    let Date = document.getElementById("date").value;
    let Time = document.getElementById("time").value;
    let Guests = document.getElementById("guests").value;
    if (Name !== "" && Guests !== "" && Date !== "" && Time !== "") {
        document.getElementById("hasil").innerHTML =
            "Terima kasih sudah melakukan booking di restoran kami! <br> Anda sudah melakukan booking di restaurant kami atas nama " +
            Name +
            " untuk " +
            Guests +
            " orang.<br> Pada Tanggal " +
            Date +
            " pukul " +
            Time +
            " telah berhasil";
    }
    hasil.classList.add("Hasil");
}

function contactSection() {
    const section = document.createElement("section");
    section.innerHTML = `    <section id="contact" class="section contact">
            <div class="container">
                <h2>Contact Us</h2>

                <form class="contact-form">
                    <input type="text" id="name"placeholder="Your Name" required />
                    <input type="email" id="email"placeholder="Your Email" required />
                    <textarea
                        placeholder="Your Message"
                        rows="5"
                        required
                    ></textarea>
                    <button type="button" onclick="kontak()">Send Message</button>
                </form>
                <p id="kntk"></p>
            </div>
        </section>`;
    return section;
}

function kontak() {
    let Name = document.getElementById("name").value;
    let Email = document.getElementById("email").value;
    if (Name !== "" && Email !== "") {
        document.getElementById("kntk").innerHTML =
            "Terima kasih!! Pesan Anda Atas nama " +
            Name +
            " Dengan email " +
            Email +
            " pasti Akan Kami Baca";
    }
    kntk.classList.add("contk");
}

function homePage() {
    const page = document.createElement("div");
    page.appendChild(heroSection());
    page.appendChild(menuSection());
    page.appendChild(bookingSection());
    page.appendChild(contactSection());
    return page;
}

function menuPage() {
    const page = document.createElement("div");
    page.appendChild(menuSection());
    return page;
}

function bookingPage() {
    const page = document.createElement("div");
    page.appendChild(bookingSection());
    return page;
}

function contactPage() {
    const page = document.createElement("div");
    page.appendChild(contactSection());
    return page;
}

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
    console.log(hash);
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
