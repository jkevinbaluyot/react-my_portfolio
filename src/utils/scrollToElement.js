export const scrollToElement = (id) => {
    if (!id) return;

    const element = document.getElementById(id);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};
