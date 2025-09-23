/**
 * Debug utility to find elements causing horizontal overflow
 * Run this in browser console to identify problematic elements
 */

export const debugHorizontalOverflow = () => {
  const docWidth = document.documentElement.offsetWidth;
  const overflowElements: Element[] = [];

  document.querySelectorAll('*').forEach((el) => {
    const element = el as HTMLElement;
    if (element.offsetWidth > docWidth) {
      overflowElements.push(element);
      console.log('Overflow element found:', {
        element,
        width: element.offsetWidth,
        docWidth,
        overflow: element.offsetWidth - docWidth,
        className: element.className,
        tagName: element.tagName
      });
    }
  });

  if (overflowElements.length === 0) {
    console.log('No overflow elements found');
  }

  return overflowElements;
};

// Auto-run on development
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  window.addEventListener('load', () => {
    setTimeout(() => {
      console.log('Running overflow debug...');
      debugHorizontalOverflow();
    }, 1000);
  });
}