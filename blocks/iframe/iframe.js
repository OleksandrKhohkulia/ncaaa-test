export default async function decorate(block) {
  const iframe = document.createElement('iframe');
  iframe.setAttribute('seamless', 'seamless');
  iframe.setAttribute('scrolling', 'no');
  iframe.style.border = '0';
  iframe.style.overflow = 'hidden';
  const link = block.querySelector('a')?.getAttribute('href');
  const fixedHeightClass = [...block.classList].find((el) => el.startsWith('height-')).split('-')[1];
  const fixedWidthClass = [...block.classList].find((el) => el.startsWith('width-')).split('-')[1];

  if (fixedHeightClass) {
    // iframe.height = fixedHeightClass;
    console.log(iframe.contentDocument)
    // iframe.height=iframe.contentDocument.body.style.height
  }
  else{
    iframe.height=iframe.contentDocument.body.style.height
  }
  if (fixedWidthClass) {
    iframe.width = fixedWidthClass;
  }
  iframe.src = link;
  iframe.setAttribute('frameborder', 0);

  const options = {
    root: null,
    rootMargin: '20%',
    threshold: 1.0,
  };

  // add event listener for intersection observer when block is in view port
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        block.replaceChildren(iframe);
        observer.unobserve(block);
      }
    });
  }, options);

  // observe the block
  observer.observe(block);
}

    // if(iframe){     
      // const customIframe = document.querySelector('iframe')
      // console.log(customIframe)
    // const doc = iframe.contentDocument
    // console.log(iframe)
    // console.log(doc)
    // console.log(iframe)
    // const height =doc.height
    // console.log(height)
    // iframe.style.height=height+"px"
    // }
