export default async function decorate(block) {
  const iframe = document.createElement('iframe');
  iframe.setAttribute('seamless', 'seamless');
  iframe.setAttribute('scrolling', 'yes');
  iframe.style.border = '0';
  iframe.style.overflow = 'hidden';
  const link = block.querySelector('a')?.getAttribute('href');
  const fixedHeightClass = [...block.classList].find((el) => el.startsWith('height-')).split('-')[1];
  const fixedWidthClass = [...block.classList].find((el) => el.startsWith('width-')).split('-')[1];

  if (fixedHeightClass) {
    iframe.height = fixedHeightClass;
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


      // document.innerHTML +=
  //   `<script>
  //   function sendSize(){
  //       const height = documentElement.scrollHeight || document.body.scrollHeight;
  //       window.parent.postMessage({
  //           type: 'resize',
  //           height: height
  //         },
  //       "*");
  //    }
  //   window.addEventListner('load',sendSize);
  //   window.addEventListner('resize',sendSize);
  // </script>`
    

// window.addEventListener('DOMContentLoaded',()=>{
//   window.addEventListener('message', (e)=>{
//     if(e.data.type === 'resize' && e.data.height){
//       const myIframe =document.querySelector('iframe')
//       console.log(e.data)
//       myIframe.style.height = e.data.height +'px'
//     }
//   })

// })

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

  
  const customIframe = document.querySelector('iframe')
  console.log(customIframe)


    if(iframe){     
    const doc = iframe.contentDocument
    console.log(iframe)
    console.log(doc)
    console.log(iframe)
    // const height =doc.height
    // console.log(height)
    // iframe.style.height=height+"px"
    }
