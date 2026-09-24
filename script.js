/* =====================================
   MENU DATA
===================================== */

const menu = [

    /* ================= SANDWICHES ================= */

    {
        category: "sandwiches",
        icon: "🥩",
        name: "كايزر لحم",
        price: 80,
        description: "شاورما لحم بتتبيلة سيخ"
    },

    {
        category: "sandwiches",
        icon: "🍗",
        name: "كايزر فراخ",
        price: 70,
        description: "شاورما فراخ بتتبيلة سيخ"
    },

    {
        category: "sandwiches",
        icon: "🥩",
        name: "فرنساوي لحم",
        price: 140,
        description: "شاورما لحم بصوصات سيخ"
    },

    {
        category: "sandwiches",
        icon: "🍗",
        name: "فرنساوي فراخ",
        price: 130,
        description: "شاورما فراخ بصوصات سيخ"
    },

    {
        category: "sandwiches",
        icon: "🥩",
        name: "لبناني لحم",
        price: 140,
        description: "شاورما لحم على الطريقة اللبنانية"
    },

    {
        category: "sandwiches",
        icon: "🍗",
        name: "لبناني فراخ",
        price: 130,
        description: "شاورما فراخ على الطريقة اللبنانية"
    },

    {
        category: "sandwiches",
        icon: "🔥",
        name: "حواوشي",
        price: 65,
        description: "حواوشي سيخ"
    },

    {
        category: "sandwiches",
        icon: "🔥",
        name: "حواوشي حار نار",
        price: 70,
        description: "حواوشي بتتبيلة حارة"
    },


    /* ================= BOXES ================= */

    {
        category: "boxes",
        icon: "🥩",
        name: "بوكس شاورما 2 ميل لحم",
        price: 180,
        description: "2 كايزر لحم + بطاطس + بيبسي"
    },

    {
        category: "boxes",
        icon: "🍗",
        name: "بوكس شاورما 2 ميل فراخ",
        price: 160,
        description: "2 كايزر فراخ + بطاطس + بيبسي"
    },

    {
        category: "boxes",
        icon: "🔥",
        name: "بوكس شاورما ميكس 2 ميل",
        price: 170,
        description: "كايزر لحم + كايزر فراخ + بطاطس + بيبسي"
    },

    {
        category: "boxes",
        icon: "🥩",
        name: "ربع دستة لحم",
        price: 240,
        description: "ربع دستة شاورما لحم"
    },

    {
        category: "boxes",
        icon: "🍗",
        name: "ربع دستة فراخ",
        price: 210,
        description: "ربع دستة شاورما فراخ"
    },

    {
        category: "boxes",
        icon: "🥩",
        name: "نص دستة لحم",
        price: 480,
        description: "نص دستة شاورما لحم"
    },

    {
        category: "boxes",
        icon: "🍗",
        name: "نص دستة فراخ",
        price: 420,
        description: "نص دستة شاورما فراخ"
    },


    /* ================= POTATOES ================= */

    {
        category: "potatoes",
        icon: "🍟",
        name: "باكت بطاطس عادي",
        price: 30,
        description: "بطاطس سيخ"
    },

    {
        category: "potatoes",
        icon: "🍟",
        name: "بطاطس فراخ مع صوص",
        price: 70,
        description: "بطاطس + فراخ + صوص"
    },

    {
        category: "potatoes",
        icon: "🍟",
        name: "ساندوتش بطاطس فرنساوي",
        price: 50,
        description: "بطاطس وتتبيلة سيخ"
    },


    /* ================= LOADED ================= */

    {
        category: "loaded",
        icon: "🥩",
        name: "لوديد فرايز لحم",
        price: 140,
        description: "بطاطس محملة بشاورما اللحم والصوص"
    },

    {
        category: "loaded",
        icon: "🍗",
        name: "لوديد فرايز فراخ",
        price: 130,
        description: "بطاطس محملة بشاورما الفراخ والصوص"
    },

    {
        category: "loaded",
        icon: "🔥",
        name: "لوديد ميكس",
        price: 135,
        description: "ميكس لحم وفراخ مع البطاطس والصوص"
    },


    /* ================= HAHAWASHI ================= */

    {
        category: "hawawshi",
        icon: "🔥",
        name: "حواوشي 2 ميل",
        price: 150,
        description: "2 حواوشي"
    },

    {
        category: "hawawshi",
        icon: "🔥",
        name: "ربع دستة",
        price: 195,
        description: "ربع دستة حواوشي"
    },

    {
        category: "hawawshi",
        icon: "🔥",
        name: "نص دستة",
        price: 390,
        description: "نص دستة حواوشي"
    },


    /* ================= EXTRAS ================= */

    {
        category: "extras",
        icon: "🧄",
        name: "تومية",
        price: 20,
        description: "إضافة"
    },

    {
        category: "extras",
        icon: "🥣",
        name: "طحينة",
        price: 20,
        description: "إضافة"
    },

    {
        category: "extras",
        icon: "🥒",
        name: "مخلل خيار",
        price: 20,
        description: "إضافة"
    },


    /* ================= DRINKS ================= */

    {
        category: "drinks",
        icon: "🥭",
        name: "عصير مانجو",
        price: 60,
        description: "مشروب بارد"
    },

    {
        category: "drinks",
        icon: "🍓",
        name: "عصير فراولة",
        price: 60,
        description: "مشروب بارد"
    },

    {
        category: "drinks",
        icon: "🥤",
        name: "بيبسي",
        price: 100,
        description: "مشروب بارد"
    },

    {
        category: "drinks",
        icon: "💧",
        name: "مياه معدنية",
        price: 15,
        description: "مياه"
    },

    {
        category: "drinks",
        icon: "🥤",
        name: "مشروبات غازية",
        price: 25,
        description: "اختيار من المشروبات الغازية"
    }

];


/* =====================================
   CATEGORY NAMES
===================================== */

const categoryNames = {

    sandwiches: "SANDWICHES",

    boxes: "SHAWERMA BOXES",

    potatoes: "POTATOES",

    loaded: "LOADED FRIES",

    hawawshi: "HAWAWSHI",

    extras: "EXTRAS",

    drinks: "DRINKS"

};


/* =====================================
   ELEMENTS
===================================== */

const productsContainer =
    document.getElementById("products");


const categoryButtons =
    document.querySelectorAll(".category");


const modal =
    document.getElementById("modal");


const modalClose =
    document.getElementById("modalClose");


const modalIcon =
    document.getElementById("modalIcon");


const modalCategory =
    document.getElementById("modalCategory");


const modalTitle =
    document.getElementById("modalTitle");


const modalPrice =
    document.getElementById("modalPrice");


const modalDescription =
    document.getElementById("modalDescription");


/* =====================================
   RENDER MENU
===================================== */

function renderMenu(category = "all") {

    productsContainer.innerHTML = "";


    const filteredMenu =

        category === "all"

            ? menu

            : menu.filter(
                item => item.category === category
            );


    filteredMenu.forEach((item, index) => {


        const card =
            document.createElement("article");


        card.className =
            "product reveal";


        card.style.transitionDelay =
            `${index * 40}ms`;


        card.innerHTML = `

            <div class="product-top">

                <div class="product-icon">
                    ${item.icon}
                </div>

                <div class="product-price">
                    ${item.price} EGP
                </div>

            </div>


            <h3>
                ${item.name}
            </h3>


            <p>
                ${item.description}
            </p>


            <div class="product-tag">

                ${categoryNames[item.category]}

            </div>

        `;


        card.addEventListener(
            "click",
            () => openModal(item)
        );


        productsContainer.appendChild(card);


        setTimeout(() => {

            card.classList.add("visible");

        }, 50);

    });

}


/* =====================================
   CATEGORY FILTER
===================================== */

categoryButtons.forEach(button => {


    button.addEventListener("click", () => {


        categoryButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        const category =
            button.dataset.category;


        renderMenu(category);


        productsContainer.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    });

});


/* =====================================
   MODAL
===================================== */

function openModal(item) {


    modalIcon.textContent =
        item.icon;


    modalCategory.textContent =
        categoryNames[item.category];


    modalTitle.textContent =
        item.name;


    modalPrice.textContent =
        `${item.price} EGP`;


    modalDescription.textContent =
        item.description;


    modal.classList.add("show");


    document.body.classList.add(
        "modal-open"
    );

}


function closeModal() {

    modal.classList.remove("show");

    document.body.classList.remove(
        "modal-open"
    );

}


modalClose.addEventListener(
    "click",
    closeModal
);


modal.addEventListener(
    "click",
    event => {

        if (event.target === modal) {

            closeModal();

        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeModal();

        }

    }
);


/* =====================================
   SCROLL REVEAL
===================================== */

const observer =

    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },

        {

            threshold: .12

        }

    );


document
    .querySelectorAll(".reveal")
    .forEach(element => {

        observer.observe(element);

    });


/* =====================================
   LOADER
===================================== */

window.addEventListener(
    "load",
    () => {

        setTimeout(() => {

            document
                .getElementById("loader")
                .classList.add("hide");

        }, 1700);

    }
);


/* =====================================
   CURSOR EFFECT
===================================== */

const cursorGlow =
    document.querySelector(".cursor-glow");


window.addEventListener(
    "mousemove",
    event => {

        cursorGlow.style.left =
            `${event.clientX}px`;

        cursorGlow.style.top =
            `${event.clientY}px`;

    }
);


/* =====================================
   START
===================================== */

renderMenu();