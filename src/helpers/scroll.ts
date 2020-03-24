// This is the main function where which pass two ref parameters of Parent element & Child element
export const appScroll = (child: HTMLElement, duration: number): void => {

  const parent = document.getElementsByTagName('body')[0];
  
  const parentBounding = parent.getBoundingClientRect(),
    clientBounding = child.getBoundingClientRect();
  
  const parentBottom = parentBounding.bottom,
    parentTop = parentBounding.top,
    clientBottom = clientBounding.bottom,
    clientTop = clientBounding.top;
  
  if (parentTop >= clientTop) {
    scrollTo(parent, -(parentTop - clientTop), duration);
  } else if (clientBottom > parentBottom) {
    scrollTo(parent, clientBottom - parentBottom, duration);
  }
};

function scrollTo(element: HTMLElement, to: number, duration: number): void {
  
  let start = element.scrollTop,
    currentTime = 0,
    increment = 2;
  
  let animateScroll = function(): void {
    currentTime += increment;
    
    let val = easeOutQuad(currentTime, start, to, duration);
    element.scrollTop = val;
    
    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };
  
  animateScroll();
}

// Function for smooth scroll animation with the time duration
function easeOutQuad(time: number, startPos: number, endPos: number, duration: number): number {

  time /= duration;
  return -endPos * time * (time - 2) + startPos;
}

/**
 * original 
 * 
  if (time < 1) return (endPos / 2) * time * time + startPos;
  time--;
  return (-endPos / 2) * (time * (time - 2) - 1) + startPos;
 */