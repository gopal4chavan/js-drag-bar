const p1 = elemById('p1');
const p2 = elemById('p2');
const p3 = elemById('p3');
const p4 = elemById('p4');

const d1 = elemById('d1');
const d2 = elemById('d2');
const d3 = elemById('d3');

const container = elemById('container');


function drapBar_treat(leftPane, rightPane, dragBar, container, staticPane, staticPane_minWidth){
  dragBar.addEventListener("mousedown", () => {
    staticPane.style.minWidth = staticPane.clientWidth;
    container.addEventListener("mousemove", drag);
    container.addEventListener("mouseup", () => {
      staticPane.style.minWidth = staticPane_minWidth + "px";
      container.removeEventListener("mousemove", drag)
    });
  });
  dragBar.addEventListener("mouseup", () => {
    staticPane.style.minWidth = staticPane_minWidth + "px";
    container.removeEventListener("mousemove", drag)
  });
  function drag(e){
    const left_pane_start_x_coordinate = leftPane.offsetLeft;
    const totalWidth = leftPane.clientWidth + rightPane.clientWidth;
    const leftPane_width = e.clientX - left_pane_start_x_coordinate;
    leftPane.style.width = leftPane_width + "px";
    rightPane.style.width = (totalWidth - leftPane_width) + "px";
  }
}

drapBar_treat(p1, p2, d1, container, p3, 10);
drapBar_treat(p2, p3, d2, container, p1, 10);
drapBar_treat(p3, p4, d3, container, p2, 10);

function elemById(id) {
  return document.getElementById(id);
}