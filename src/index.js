function component() {
    const element = document.createElement('div');
    element.innerHTML = 'Application will render here soon';  
    return element;
}
  
document.body.appendChild(component());