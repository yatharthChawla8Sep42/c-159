AFRAME.registerComponent("cursor-event", {
    schema: {
        selectedItemId: {type:"string", default:""}
    },
    init: function(){
        this.handleMouse();
    },
    update: function(){
        const fadeBackgroundEl = document.querySelector("#fade-background");

        child = fadeBackgroundEl.children;
        if (child.length > 0){
            for (var i = 0; i <= child.length; i++){
                fadeBackgroundEl.removeChild(child[i])
            }
        } else {
            this.handleMouseClick();
        }
    },
    handleMouse: function(){
        this.el.addEventListener("mouseenter", ()=>{
            this.handleItem(true);
        });
        this.el.addEventListener("mouseleave", ()=>{
            this.handleItem(false);
        });
    },
    handleMouseClick: function(){
        this.el.addEventListener("click", ()=>{
            const {selectedItemId} = this.data;

            const fadeBackgroundEl = document.querySelector("#fade-background");
            const titleEl = document.querySelector("#title");
            const cursorEl = document.querySelector("#camera-cursor");

            if (selectedItemId) {
                fadeBackgroundEl.setAttribute("visible", true);
                fadeBackgroundEl.setAttribute("banner", {itemId: selectedItemId});
                titleEl.setAttribute("visible", false);
                cursorEl.setAttribute("position", {x:0, y:0, z:0});
            } else {
                fadeBackgroundEl.setAttribute("visible", false);
                titleEl.setAttribute("visible", true);
                cursorEl.setAttribute("position", {x:0, y:0, z:-3});
            }
        })
    },
    handleItem: function(selected){
        const id = this.el.getAttribute("id");
        const comicsId = ["stickman1", "stickman2", "stickman3", "stickman4"];

        if (comicsId.includes(id)){
            const comicsContainer = document.querySelector("#comics-container");
            comicsContainer.setAttribute("cursor-event", {
                selectedItemId: id,
            });

            var color;
            if (selected) {color = "#1C76DF"}
            else {color = "#FFF"};

            this.el.setAttribute("material", {color: color});
        }
    }
});