function component() {
    const element = document.createElement('div');
    element.innerHTML = 'Application will render here';  
    return element;
}
  
document.body.appendChild(component());