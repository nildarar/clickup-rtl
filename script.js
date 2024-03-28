function addDirAuto() {
  const elements = [].slice.call(document.querySelectorAll(
    'p:not([dir]),' + 
    'ul:not([dir]),' +
    'cu-task-title:not([dir])'
  ));
  elements.forEach(el => {
    el.setAttribute('dir', 'auto');
  });
}

function mutationCallback(mutationsList, observer) {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      addDirAuto();
    }
  }
}

const observer = new MutationObserver(mutationCallback);
observer.observe(document.body, { childList: true, subtree: true });
addDirAuto();
