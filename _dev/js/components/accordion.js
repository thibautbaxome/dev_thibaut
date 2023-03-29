const Accordion = class {
    constructor(parent, title, content) {
        this.parent = parent;
        this.title = title;
        this.content = content;
        this.accordions = document.querySelectorAll(this.parent);
        this.init();
    }

    closeOtherAccordions() {
        this.accordions.forEach((accordion) => {
            let toggleTitle = accordion.querySelector(this.title);
            let toggleContent = accordion.querySelector(this.content);
            toggleContent.classList.contains("active") && toggleContent.classList.remove("active");
            toggleTitle.classList.contains("active") && toggleTitle.classList.remove("active");
        });
    }

    init() {
        this.accordions.forEach((accordion) => {
            let toggleTitle = accordion.querySelector(this.title);
            let toggleContent = accordion.querySelector(this.content);

            toggleTitle.addEventListener("click", () => {
                !toggleContent.classList.contains("active") && this.closeOtherAccordions();
                toggleContent.classList.toggle("active");
                toggleTitle.classList.toggle("active");
            });
        });
    }
}

export default Accordion;