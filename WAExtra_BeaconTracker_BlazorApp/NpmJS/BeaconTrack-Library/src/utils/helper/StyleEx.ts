export class StyleEx {
  /**
   * Returns the computed value of a specified CSS property for an element with the given class name.
   * If the class name or property name is not provided, returns null.
   * @param className - The class name of the element
   * @param propertyName - The name of the CSS property
   * @returns The computed value of the CSS property, or null if the element or property cannot be found
   */
  public static getStyleValueByClassName = (
    className: string,
    propertyName: string,
  ): string | null => {
    // if either className or propertyName is not provided, return null
    if (!className || !propertyName) return null;

    // iterate through all of the stylesheets on the page
    for (const styleSheet of document.styleSheets) {
      // iterate through all of the rules in each stylesheet
      for (const rule of styleSheet.cssRules) {
        // if the rule is not a CSSStyleRule, skip it
        if (!(rule instanceof CSSStyleRule)) continue;
        // if the rule's selector matches the given className
        if ((rule as CSSStyleRule).selectorText.startsWith(`.${className}`)) {
          // get the element with the matching class name
          const element = document.querySelector(
            (rule as CSSStyleRule).selectorText,
          );
          // if the element does not exist, skip it
          if (!element) continue;
          // get the computed styles for the element
          const styles = window.getComputedStyle(element);

          // return the computed value of the specified CSS property
          return styles.getPropertyValue(propertyName);
        }
      }
    }
    // if no matching element or property is found, return null
    return null;
  };
}
