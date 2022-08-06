AFRAME.registerComponent("banner", {
    schema:{
        itemId: {type:"string", default:""}
    },
    update: function(){
        this.createInfo();
    },
    createInfo: function(){
        const comicPosterRef = {
        stickman1:{
            title: " Multiverse Of Madness ",
            url: "./assets/doctor_strange_in_the_multiverse_of_madness_ver2_xlg.jpeg",
            description: 'Doctor Strange In The Multiverse Of Madness: Dr. Stephen Strange casts a forbidden spell that opens the doorway to the multiverse, including alternate versions of himself, whose threat to humanity is too great for the combined forces of Strange, Wong, and Wanda Maximoff.'
        },
        stickman2:{
            title: "MoonKnight",
            url: "./assets/MoonKnight.jpeg",
            description: 'MoonKnight: Steven Grant discovers he is been granted the powers of an Egyptian moon god. But he soon finds out that these newfound powers can be both a blessing and a curse to his troubled life.'
        },
        stickman3:{
            title: "ShangChi",
            url: "./assets/shangchi_and_the_legend_of_the_ten_rings_ver9_xlg.webp",
            description: 'Shang-Chi, the master of weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.'
        },
        stickman4:{
            title: "Thor Love And Thunder",
            url: "./assets/Thor-Love-and-Thunder-Poster.png",
            description: 'Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.'
        }};

        const {itemId} = this.data;
        const item = comicPosterRef[itemId]
        const fadeBackgroundEl = document.querySelector("#fade-background");

        const bannerEl = this.createBanner();
        const posterEl = this.createPoster(item);
        const titleEl = this.createTitle(item);
        const descriptionEl = this.createDescription(item);

        bannerEl.appendChild(posterEl);
        bannerEl.appendChild(titleEl);
        bannerEl.appendChild(descriptionEl);

        fadeBackgroundEl.appendChild(bannerEl);
    },
    createBanner(){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("position", {x:0, y:0, z:-1});
        entityEl.setAttribute("geometry", {primitive:"plane", width: 1.5, height: 1});
        entityEl.setAttribute("material", {color: "#000"});
        entityEl.setAttribute("visible", true);
        return entityEl;
    },
    createPoster(item){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("position", {x:-0.41, y:0, z:0.0001})
        entityEl.setAttribute("geometry", {primitive:"plane", width: 0.5625, height: 0.875});
        entityEl.setAttribute("material", {src: item.url});
        entityEl.setAttribute("visible", true);
        return entityEl;
    },
    createTitle(item){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("position", {x:0.3, y:0.4, z:0.0001})
        entityEl.setAttribute("text", {
            value: item.title,
            font: "mozillavr",
            color: "#FFF",
            align: "center",
            width: 1.25
        });
        entityEl.setAttribute("visible", true);
        return entityEl;
    },
    createDescription(item){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("position", {x:0.3, y:0.3, z:0.0001})
        entityEl.setAttribute("text", {
            value: item.description,
            font: "mozillavr",
            color: "#FFF",
            align: "left",
            baseline: "top",
            width: 0.75,
            wrapCount: 30
        });
        entityEl.setAttribute("visible", true);
        return entityEl;
    },
})