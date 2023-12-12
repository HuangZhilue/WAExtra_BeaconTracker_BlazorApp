window.themeInterop = {
    getSystemThemeColor: function () {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
};