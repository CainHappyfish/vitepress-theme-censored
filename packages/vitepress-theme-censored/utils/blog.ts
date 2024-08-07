
export function RollingLoading() {
    window.addEventListener('load', () => {
        const elements = document.querySelectorAll('.scroll-animation');

        const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    } else {
                        entry.target.classList.remove('show');
                    }
                });
            }, {
                threshold: 0.1 // 当元素至少有10%可见时触发
        });

        // 观察每个目标元素
        elements.forEach(element => {
            observer.observe(element);
        });
    });
}

export function triggerScrollAnimation (){
  const elements = document.querySelectorAll('.scroll-animation');
  elements.forEach((element) => {
    const el = element as HTMLElement;
    el.classList.remove('show');
    // Trigger reflow
    void el.offsetWidth;
    el.classList.add('show');
  });
}

export function setupScrollAnimation() {
  window.addEventListener('popstate', () => {
    location.reload();
  });
  RollingLoading();
  triggerScrollAnimation();
}

// export function getFileContent(filePath) {
//     const fileContent = fs.readFileSync(filePath, 'utf-8');
//     console.log(fileContent)
//     return fileContent
// }