const p1 = elemById('p1');
const p2 = elemById('p2');
const p3 = elemById('p3');
const p4 = elemById('p4');
const p5 = elemById('p5');

const d1 = elemById('d1');
const d2 = elemById('d2');
const d3 = elemById('d3');
const d4 = elemById('d4');

const container = elemById('container');


function dragBar_treat(leftPane, rightPane, dragBar, container, staticPane, staticPane_minWidth){
  dragBar.addEventListener("mousedown", dragBarMouseDownHandler);
  dragBar.addEventListener("mouseup", cleanupListener);

  function dragBarMouseDownHandler() {
    setStaticPaneMinWidth();
    container.addEventListener("mousemove", drag);
    container.addEventListener("mouseup", cleanupListener);
  }
  function cleanupListener() {
    setStaticPaneMinWidth(staticPane_minWidth || 10);
    removeContainerListener();
  }

  function removeContainerListener(){
    container.removeEventListener("mousemove", drag);
  }

  function setStaticPaneMinWidth(value) {
    if(staticPane){
      staticPane.style.minWidth = `${value || staticPane.clientWidth}px`;
    }
  }

  // Calculates the width for left and right pane and updates them
  function drag(e){
    const left_pane_start_x_coordinate = leftPane.offsetLeft;
    const totalWidth = leftPane.clientWidth + rightPane.clientWidth;
    const leftPane_width = e.clientX - left_pane_start_x_coordinate;
    leftPane.style.width = leftPane_width + "px";
    rightPane.style.width = (totalWidth - leftPane_width) + "px";
  }

  // Removes the added event listeners
  function removeListeners() {
    dragBar.removeEventListener("mousedown", dragBarMouseDownHandler);
    dragBar.removeEventListener("mouseup", cleanupListener);
    container.removeEventListener("mouseup", cleanupListener);
  }
  return removeListeners;
}

dragBar_treat(p1, p2, d1, container, p3, 10);
dragBar_treat(p2, p3, d2, container, p1, 10);
dragBar_treat(p3, p4, d3, container, p2, 10);
dragBar_treat(p4, p5, d4, container, p3, 10);

function elemById(id) {
  return document.getElementById(id);
}