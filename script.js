document.addEventListener('DOMContentLoaded', (event) => {
    let currentPage = 0;
    const pages = document.querySelectorAll('.page');
  
    function showPage(pageIndex) {
      pages.forEach((page, index) => {
        if (index < pageIndex) {
          page.classList.remove('active');
          page.classList.add('inactive');
        } else if (index === pageIndex) {
          page.classList.add('active');
          page.classList.remove('inactive');
        } else {
          page.classList.remove('active');
          page.classList.remove('inactive');
        }
      });
    }
  
    document.querySelector('.nav .next').addEventListener('click', () => {
      if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
      }
    });
  
    document.querySelector('.nav .prev').addEventListener('click', () => {
      if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
      }
    });
  
    // Initial display
    showPage(currentPage);
  });
  