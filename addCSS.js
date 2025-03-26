function applyCSSBasedOnCheckbox(checkboxId, elementId, cssClass) {
    const checkbox = document.getElementById(checkboxId);
    const element = document.getElementById(elementId);

    if (checkbox && element) {
        if (checkbox.checked) {
            element.classList.add(cssClass);
        } else {
            element.classList.remove(cssClass);
        }
    }
}
