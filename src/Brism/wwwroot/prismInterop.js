export function highlightAll() {
    return new Promise((resolve, reject) => {
        if (typeof Prism !== 'undefined') {
            Prism.highlightAll();
            resolve();
        } else {
            // Wait for Prism to be available
            const checkPrism = setInterval(() => {
                if (typeof Prism !== 'undefined') {
                    clearInterval(checkPrism);
                    Prism.highlightAll();
                    resolve();
                }
            }, 100);

            // Timeout after 5 seconds
            setTimeout(() => {
                clearInterval(checkPrism);
                reject('Prism not loaded after 5 seconds');
            }, 5000);
        }
    });
}

export function highlightCode(element,
	code,
	codeCssClass,
	preCssClass,
	preAttributes) {
	return new Promise((resolve, reject) => {
		if (typeof Prism !== 'undefined') {
			renderCode(element,
				code,
				codeCssClass,
				preCssClass,
				preAttributes);
			resolve();
		} else {
			// Wait for Prism to be available
			const checkPrism = setInterval(() => {
				if (typeof Prism !== 'undefined') {
					clearInterval(checkPrism);
					renderCode(element,
						code,
						codeCssClass,
						preCssClass,
						preAttributes);
					resolve();
				}
			}, 100);

			// Timeout after 5 seconds
			setTimeout(() => {
				clearInterval(checkPrism);
				reject('Prism not loaded after 5 seconds');
			}, 5000);
		}

		function renderCode(
			element,
			code,
			codeCssClass,
			preCssClass,
			preAttributes
		) {
			element.innerHTML = "";

			// Create Elementes
			const pre = document.createElement("pre");
			if (preCssClass) pre.className = preCssClass;
			for (const [key, val] of Object.entries(preAttributes)) {
				pre.setAttribute(key, val);
			}

			const codeElem = document.createElement("code");
			codeElem.className = codeCssClass;
			codeElem.textContent = code || "";
			pre.appendChild(codeElem);
			element.appendChild(pre);

			Prism.highlightElement(codeElem);
		}
	});
}