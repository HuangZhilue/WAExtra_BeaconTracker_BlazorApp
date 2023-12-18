window.themeInterop = {
    getSystemThemeColor: function () {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    },

    getComputedStyle: function (elementName) {
        const computedStyles = [];

        for (const sheet of document.styleSheets) {
            const rules = sheet.cssRules;
            for (const rule of rules) {
                if (rule.selectorText === elementName) {
                    const styles = rule.style;
                    for (const name of styles) {
                        const color = styles.getPropertyValue(name);
                        computedStyles.push({ name, color });
                    }
                    console.debug(computedStyles);
                    return computedStyles;
                }
            }
        }

        return computedStyles;
    }
};