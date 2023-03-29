const checkIfIncluded = (file) => {
    let links = document.getElementsByTagName("link");
    for(let i = 0; i < links.length; i++) {
        if (links[i].href.substr(-file.length) === file) return true;
    }

    let scripts = document.getElementsByTagName("script");
    for(let k = 0; k < scripts.length; k++) {
        if (scripts[k].src.substr(-file.length) === file) return true;
    }

    return false;
}

const SectionObserver = class {
    constructor(target, threshold) {
        this.target = target;
        this.threshold = threshold;
        this.observer();
    }

    observer () {
        let options = {
            rootMargin: '50% 0px',
            threshold: this.threshold
        }

        let observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    let section = entry.target
                    let sectionName = section.dataset.axSection;

                    let styleSrc;
                    window.assetsUrl.css.forEach(css => {
                        if (css.hasOwnProperty(sectionName)) {
                            styleSrc = css[sectionName];
                        }
                    });

                    let styleTag = document.createElement("link");
                    styleTag.type = "text/css";
                    styleTag.rel = "stylesheet";
                    styleTag.href = styleSrc;

                    let scriptSrc;
                    window.assetsUrl.js.forEach(js => {
                        if (js.hasOwnProperty(sectionName)) {
                            scriptSrc = js[sectionName];
                        }
                    });

                    let scriptTag = document.createElement("script");
                    scriptTag.type="text/javascript";
                    scriptTag.src=scriptSrc;

                    let checkingCss = checkIfIncluded(styleTag.href),
                        checkingJs = checkIfIncluded(scriptTag.src);

                    (!checkingCss && typeof styleSrc !== 'undefined') && document.getElementsByTagName('head')[0].appendChild(styleTag);
                    !checkingJs && document.getElementsByTagName('head')[0].appendChild(scriptTag);
                    observer.unobserve(section);
                }
            })
        }, options)

        let target = document.querySelectorAll(this.target);
        target.forEach(function (section) {
            observer.observe(section);
        })
    }
}

export default SectionObserver;