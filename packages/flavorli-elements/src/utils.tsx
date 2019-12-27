export function focusFirstDescendant(element: HTMLElement) {
  for (let i = 0; i < element.childNodes.length; i++) {
    const child = element.childNodes[i] as HTMLElement;
    if (attemptFocus(child) || focusFirstDescendant(child)) {
      return true;
    }
  }
  return false;
}

export function focusLastDescendant(element: HTMLElement) {
  for (let i = element.childNodes.length - 1; i >= 0; i--) {
    const child = element.childNodes[i] as HTMLElement;
    if (attemptFocus(child) || focusLastDescendant(child)) {
      return true;
    }
  }
  return false;
}

function attemptFocus(element: HTMLElement) {
  try {
    element.focus();
  } catch (e) {
    // Continue
  }

  return document.activeElement === element;
}

export function trapFocus(e: any, element: any) {
  const KEYCODE_TAB = 9;

  const focusableElements = element.querySelectorAll(
    "a[href]:not([tabindex='-1']), area[href]:not([tabindex='-1']), input:not([disabled]):not([tabindex='-1']), select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']), iframe:not([tabindex='-1']), [tabindex]:not([tabindex='-1']), [contentEditable=true]:not([tabindex='-1'])",
  );

  const firstFocusableEl = focusableElements[0];
  const lastFocusableEl = focusableElements[focusableElements.length - 1];

  const isTab = e.key === 'Tab' || e.keyCode === KEYCODE_TAB;

  if (!isTab) {
    return;
  }

  if (e.shiftKey) {
    if (document.activeElement === firstFocusableEl) {
      e.preventDefault();

      lastFocusableEl.focus();
    }
  } else {
    if (document.activeElement === lastFocusableEl) {
      e.preventDefault();
      firstFocusableEl.focus();
    }
  }
}
