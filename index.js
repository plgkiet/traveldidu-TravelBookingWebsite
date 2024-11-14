$(document).ready(function () {
    //get datepicker from jquery
    $(function () {
        $(".datepicker").datepicker();
    });

    // Define active and inactive image sources
    const iconSources = {
        "Hotels": {
            active: "images/hotel-active.png",
            inactive: "images/hotel.png"
        },
        "Flights": {
            active: "images/plane-active.png",
            inactive: "images/plane.png"
        },
        "Transport": {
            active: "images/bus-active.png",
            inactive: "images/bus.png"
        },
        "Things to Do": {
            active: "images/journey-active.png",
            inactive: "images/journey.png"
        }
    };
    // Function to set active/inactive icon based on tab selection
    function setActiveTab(selectedTab) {
        document.querySelectorAll('#tabnav .nav-link').forEach(tab => {
            const icon = tab.querySelector('.icon');
            const tabName = tab.textContent.trim();

            // Change icon based on active state
            if (tab === selectedTab) {
                tab.classList.add('active');
                icon.src = iconSources[tabName].active;
            } else {
                tab.classList.remove('active');
                icon.src = iconSources[tabName].inactive;
            }
        });
    }
    // Add click event listener to each tab link
    document.querySelectorAll('#tabnav .nav-link').forEach(tab => {
        const tabs = document.querySelectorAll("#tabnav .nav-link");
        const forms = document.querySelectorAll(".form-selection");
        tab.addEventListener('click', function (event) {
            event.preventDefault();
            setActiveTab(this);
            const targetForm = tab.getAttribute("href").slice(1) + "-form";
            forms.forEach(form => form.style.display = "none");
            document.getElementById(targetForm).style.display = "block";
        });
    });

    /********************************/

    //show more menu infor in desktop
    $(function showMoreMenu() {
        let clickShow = $(".mobile-nav li.has-children > a");
        clickShow.click(ShowMore);

        function ShowMore(event) {
            $(this).siblings(".mobile-sub-nav").slideToggle(100);
        }
    });

    //show more menu infor in mobile
    $(function showMenuMobile() {
        $("ul.mobile-nav").hide();
        let showM = $("#menu-mobile-btn");
        showM.hover(shoow, false);
        function shoow() {
            console.log("hel");
            $("ul.mobile-nav").show();
        }
    });

    //close menu mobile
    $(function closeMobileMenu() {
        $(".close").click(function () {
            $("ul.mobile-nav").hide();
        })
    });

    //video btn
    $(function playVideo() {
        $(".video-box").hide();
        $(".play-video-btn").click(function () {
            $(".video-box").show();
        });

        $("#close-video").click(function () {
            $(".video-box").hide();
        })
    });

    //load items
    function loadVillaItems() {
        let villas = $("#villa-items-row");
        let secondvillas = $("#villa-items-2ndrow");
        let villasArr = [
            { overlay: "Vinh Hy Bay", imgSrc: `images/amanoi.png`, name: "Amanoi Resort", ratingscore: "9.5", ratinglabel: "Superb", ratingcount: "2.540 reviews", details: "Nestled in the tranquil bay, Amanoi offers luxury villas with breathtaking views and world-class wellness experiences.", price: "34,749,946" },
            { overlay: "Phu Quoc", imgSrc: `images/regentpq.png`, name: "Regent Resort", ratingscore: "9.1", ratinglabel: "Exceptional", ratingcount: "2.789 reviews", details: "Discover tropical elegance at Regent Phu Quoc, where pristine beaches and refined luxury create an unforgettable stay.", price: "11,097,068" },
            { overlay: "Bai San Ho", imgSrc: `images/zannier.png`, name: "Zannier Villas", ratingscore: "9.3", ratinglabel: "Superb", ratingcount: "2.356 reviews", details: "Experience the charm of Vietnam’s coastline with Zannier’s serene villas, blending local culture and modern comfort.", price: "10,136,684" }
        ];
        let secondVillasArr = [
            { overlay: "Can Tho", imgSrc: `images/azeraicantho.png`, name: "Azerai Villas", ratingscore: "9.2", ratinglabel: "Superb", ratingcount: "1.970 reviews", details: "A lush riverside retreat in the heart of Can Tho, Azerai offers peace, privacy, and unique cultural experiences.", price: "12,765,212" },
            { overlay: "Mui Ne", imgSrc: `images/anammuine.png`, name: "Anam Resort", ratingscore: "9.6", ratinglabel: "Superb", ratingcount: "3.126 reviews", details: "Escape to Anam Mui Ne, where timeless charm meets modern luxury along Vietnam’s sandy coastline.", price: "10,136,684" },
            { overlay: "Da Nang", imgSrc: `images/intercondanang.png`, name: "Intercontinental Resort", ratingscore: "9.7", ratinglabel: "Exceptional", ratingcount: "5.379 reviews", details: "Set on a secluded beach, Intercontinental Da Nang provides opulent stays with stunning views and refined amenities.", price: "23,798,017" }
        ];
        let VillasEl = "";
        let secondVillasEl = "";
        for (s of villasArr) {
            VillasEl += `
                <div class="col-lg-4 col-sm-12">
                    <div class="villa-items">
                        <div class="villa-img">
                            <p class="overlay">${s.overlay}</p>
                            <img src="${s.imgSrc}" alt="">
                        </div>
                        <div class="info">
                            <div class="stars">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            </div>

                            <h3>${s.name}</h3>
                            <!-- bieu tuong -->
                            <div class="facility-icons">
                                <span id="score" > ${s.ratingscore}</span>
                                <span> ${s.ratinglabel}</span> 
                                <span id="count" > • ${s.ratingcount}</span>
                            </div>
                            <p>${s.details}</p>
                            <hr>
                            <div class="price-and-details">
                                <p><span id="from";>from </span><span id="price">${s.price} ₫</span> / Night<button class="more-details-btn-two">More Details</button></p>
                            </div>
                        </div>
                    </div>
                </div>`;
        }
        for (s of secondVillasArr) {
            secondVillasEl += `
                <div class="col-lg-4 col-sm-12">
                    <div class="villa-items">
                        <div class="villa-img">
                            <p class="overlay">${s.overlay}</p>
                            <img src="${s.imgSrc}" alt="">
                        </div>
                        <div class="info">
                            <div class="stars">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            </div>

                            <h3>${s.name}</h3>
                            <!-- bieu tuong -->
                            <div class="facility-icons">
                                <span id="score" > ${s.ratingscore}</span>
                                <span> ${s.ratinglabel}</span> 
                                <span id="count" > • ${s.ratingcount}</span>
                            </div>
                            <p>${s.details}</p>
                            <hr>
                            <div class="price-and-details">
                                <p><span id="from";>from </span><span id="price">${s.price} ₫</span> / Night<button class="more-details-btn-two">More Details</button></p>
                                
                            </div>
                        </div>
                    </div>
                </div>`;
        }
        villas.append(VillasEl);
        secondvillas.append(secondVillasEl);
    }
    loadVillaItems();

    //load destinations
    function loadDestinations() {
        let destinations = $("#destinations");
        let desArr = [
            { imgSrc: `images/tphcm.png`, name: "Ho Chi Minh City", count: "5.120 accommodations" },
            { imgSrc: `images/hanoi.png`, name: "Ha Noi", count: "4.380 accommodations" },
            { imgSrc: `images/dalat.png`, name: "Da Lat", count: "6.678 accommodations" },
            { imgSrc: `images/danang.png`, name: "Da Nang", count: "7.249 accommodations" },
            { imgSrc: `images/cantho.png`, name: "Can Tho", count: "4.621 accommodations" },
            { imgSrc: `images/hoian.png`, name: "Hoi An", count: "3.452 accommodations" },
            { imgSrc: `images/halong.png`, name: "Ha Long", count: "5.537 accommodations" },
            { imgSrc: `images/vt.png`, name: "Vung Tau", count: "7.834 accommodations" },
            { imgSrc: `images/hagiang.png`, name: "Ha Giang", count: "2.114 accommodations" },
            { imgSrc: `images/phuquoc.png`, name: "Phu Quoc", count: "5.994 accommodations" },
        ];
        let desEl = "";
        for (s of desArr) {
            desEl += `
                <div class="col-lg-4 col-sm-12" id="des">
                    <div class="des-items">
                        <div class="des-img">
                            <img src="${s.imgSrc}" alt="">
                        </div>
                        <div class="info">
                            <h3>${s.name}</h3>
                            <p class="count">${s.count}</p>
                        </div>
                    </div>
                </div>`;
        }
        destinations.append(desEl);
    }
    loadDestinations();


    //load blogs
    function loadBlogs() {
        let blogArr = [
            { imgSrc: `images/Blog 1.jpg"`, title: "10 Ways Villas Can Make Your Holiday Enjoyable", date: "June 13, 2024" },
            { imgSrc: `images/Blog 2.jpg"`, title: "Top 8 destinations & villas you must visit in 2024", date: "June 13, 2024" },
            { imgSrc: `images/Blog 3.jpg"`, title: "Plan your days and weeks to allocate time for Family", date: "June 8, 2024" }
        ];
        let blogEl = "";
        for (const b of blogArr) {

            blogEl += `
            <div class="col-lg-4 col-sm-12">
                <div class="blogs">
                    <a href="#">
                        <div class="blog-img-box">
                            <img src="${b.imgSrc}" alt="blog-1">
                        </div>
                        <div class="overlay">
                            <h4>${b.title}</h4>
                            <p><i class="fa-regular fa-clock"></i> ${b.date}</p>
                        </div>
                    </a>
                </div>
            </div>
            `;
        }
        $("#blogs-row").append(blogEl);
    }
    loadBlogs();

    //control card
    $(function controlCard() {
        const caroselCard = document.querySelector(".carousel-card");
        const arrowBtns = document.querySelectorAll(".control i");
        const firstCardWidth = caroselCard.querySelector(".card").offsetWidth;
        const carouselChildren = [...caroselCard.children];

        let isDragging = false, startX, startScrollLeft;

        let cardPerView = Math.round(caroselCard.offsetWidth / firstCardWidth);

        carouselChildren.slice(-cardPerView).reverse().forEach(card => {
            caroselCard.insertAdjacentHTML("afterbegin", card.outerHTML);
        });

        carouselChildren.slice(0, cardPerView).forEach(card => {
            caroselCard.insertAdjacentHTML("beforeend", card.outerHTML);
        });

        arrowBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                caroselCard.scrollLeft += btn.id === "previous1" ? -(firstCardWidth + 30) : (firstCardWidth + 30);
            });
        }
        );

        const dragStart = (e) => {
            isDragging = true;
            caroselCard.classList.add("dragging");
            startX = e.pageX;
            startScrollLeft = caroselCard.scrollLeft;
        }

        const dragging = (e) => {
            if (!isDragging) return;
            caroselCard.scrollLeft = startScrollLeft - (e.pageX - startX);
        }

        const dragStop = () => {
            isDragging = false;
            caroselCard.classList.remove("dragging");
        }

        // const infiniteScroll = () => {
        //     if (caroselCard.scrollLeft === 0) {
        //         caroselCard.classList.add("no-transition");
        //         caroselCard.scrollLeft = caroselCard.scrollWidth - (2 * caroselCard.offsetWidth);
        //         caroselCard.classList.remove("no-transition");
        //     } else if (Math.ceil(caroselCard.scrollLeft) === caroselCard.scrollWidth - caroselCard.offsetWidth) {
        //         caroselCard.classList.add("no-transition");
        //         caroselCard.scrollLeft = caroselCard.offsetWidth;
        //         caroselCard.classList.remove("no-transition");
        //     }
        // }

        caroselCard.addEventListener("mousedown", dragStart);
        caroselCard.addEventListener("mousemove", dragging);
        caroselCard.addEventListener("mouseup", dragStop);
        // caroselCard.addEventListener("scroll", infiniteScroll);

    });

    //control  destinations card
    $(function controlCard() {
        const carouselCard = document.querySelector("#destinations");
        const arrowBtns = document.querySelectorAll(".destination-container i");
        const firstCardWidth = carouselCard.querySelector(".col-lg-4").offsetWidth;
        const moveAmount = firstCardWidth + 333;

        let isDragging = false, startX, startScrollLeft;

        let cardPerView = Math.round(carouselCard.offsetWidth / firstCardWidth);
        let carouselChildren = [...carouselCard.children];

        carouselChildren.slice(-cardPerView).reverse().forEach(card => {
            carouselCard.insertAdjacentHTML("afterbegin", card.outerHTML);
        });
        carouselChildren.slice(0, cardPerView).forEach(card => {
            carouselCard.insertAdjacentHTML("beforeend", card.outerHTML);
        });

        arrowBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                carouselCard.scrollLeft += btn.id === "previous" ? -moveAmount : moveAmount;
            });
        });

        const dragStart = (e) => {
            isDragging = true;
            carouselCard.classList.add("dragging");
            startX = e.pageX;
            startScrollLeft = carouselCard.scrollLeft;
        };

        const dragging = (e) => {
            if (!isDragging) return;
            carouselCard.scrollLeft = startScrollLeft - (e.pageX - startX);
        };

        const dragStop = () => {
            isDragging = false;
            carouselCard.classList.remove("dragging");
        };
        carouselCard.addEventListener("mousedown", dragStart);
        carouselCard.addEventListener("mousemove", dragging);
        carouselCard.addEventListener("mouseup", dragStop);
        carouselCard.addEventListener("mouseleave", dragStop);
    });



    //go-to-top
    $(".go-to-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $(".go-to-top").fadeIn();
        } else {
            $(".go-to-top").fadeOut();
        }
    })


});

//edit profile and update
function enableEditing() {
    const fields = ["user-name", "user-email", "user-phone", "user-dob", "user-nationality", "user-gender", "user-address"];
    fields.forEach(fieldId => {
        const displaySpan = document.getElementById(fieldId);
        const inputField = document.getElementById(`${fieldId}-input`);
        displaySpan.style.display = "none";
        inputField.style.display = "inline";
    });
    document.getElementById("edit-button").style.display = "none";
    document.getElementById("update-button").style.display = "inline";
}

function saveChanges() {
    const fields = ["user-name", "user-email", "user-phone", "user-dob", "user-nationality", "user-gender", "user-address"];
    fields.forEach(fieldId => {
        const displaySpan = document.getElementById(fieldId);
        const inputField = document.getElementById(`${fieldId}-input`);
        displaySpan.textContent = inputField.value;
        displaySpan.style.display = "inline";
        inputField.style.display = "none";
    });

    document.getElementById("edit-button").style.display = "inline";
    document.getElementById("update-button").style.display = "none";
}

document.getElementById("update-button").addEventListener("click", saveChanges);



