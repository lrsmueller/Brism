export function highlightAll(objRef) {
    return new Promise((resolve, reject) => {
        if (typeof Prism !== 'undefined') {
			Prism.highlightAll();
			objRef.invokeMethodAsync("StopTimer");
            resolve();
        } else {
            // Wait for Prism to be available
            const checkPrism = setInterval(() => {
                if (typeof Prism !== 'undefined') {
                    clearInterval(checkPrism);
					Prism.highlightAll();
					objRef.invokeMethodAsync("StopTimer");
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

export function highlightCode(objRef,element,
	code,
	codeCssClass,
	preCssClass,
	preAttributes) {
	return new Promise((resolve, reject) => {
		if (typeof Prism !== 'undefined') {
			renderCode(objRef,element,
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
					renderCode(objRef,element,
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
			objRef,
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
			objRef.invokeMethodAsync("StopTimer");
		}
	});
}