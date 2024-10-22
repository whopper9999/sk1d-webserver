class Container {
    constructor (windowTitle = "", flex = "100%", className = "window") {
        this.flex = flex;

        this.element = document.createElement("div");
        this.element.className = className;
        this.element.style.flex = "0";
        this.element.style.margin = "30px";
        

        this.topbar = document.createElement("div");
        this.topbar.className = "top-bar";
        this.title = document.createElement("h1");
        this.title.innerText = windowTitle;
        this.topbar.appendChild(this.title);
        this.element.appendChild(this.topbar);
    }

    append(parent) {
        parent.appendChild(this.element);

        setTimeout(() => {
            this.element.style.flex = this.flex;
            this.element.style.margin = "10px";
        }, 50);
    }
}

let cachedWindow = new Container("test", "100%", "window");
let currentDepth = 0;

window.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() == "t") {
        if (cachedWindow == null) return;
        cachedWindow.append(document.body);
        cachedWindow = new Container("test", "100%", "window");
        cachedWindow.element.style.flexDirection = (currentDepth % 2 === 0) ? "row" : "column";
        currentDepth += 1;
    }
});