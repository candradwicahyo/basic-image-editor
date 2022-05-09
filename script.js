window.onload = () => {
  
  const image = document.querySelector('.image');
  
  // input
  const blur = document.querySelector('#blur');
  const contrast = document.querySelector('#contrast');
  const hue = document.querySelector('#hue');
  const sepia = document.querySelector('#sepia');
  
  function resetInputToDefault() {
    blur.value = '0';
    contrast.value = '100';
    hue.value = '0';
    sepia.value = '0';
  }
  
  function uploadImage() {
    const button = document.querySelector('#input-file');
    button.addEventListener('change', function() {
      resetInputToDefault();
      const reader = new FileReader();
      reader.readAsDataURL(this.files[0]);
      reader.onload = function() {
        image.setAttribute('src', this.result);
        addFilterToImage();
      }
    });
  }
  
  uploadImage();
  
  function addFilterToImage() {
    const inputRange = document.querySelectorAll('.input-range');
    inputRange.forEach(input => {
      input.addEventListener('input', () => {
        image.style.filter = `blur(${blur.value}px) contrast(${contrast.value}%) hue-rotate(${hue.value}deg) sepia(${sepia.value}%)`;
      });
    });
  }
  
}