;((cb) => {
  if (document.readyState !== 'loading') {
    cb(this)
  } else {
    document.addEventListener('DOMContentLoaded', cb());
  }
})(() => {
  
});