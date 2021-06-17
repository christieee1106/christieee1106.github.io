//g象徵get
function $g(selector) {
    let nodelist = document.querySelectorAll(selector);
    return nodelist.length == 1 ? nodelist[0] : nodelist;
}
//c象徵create
function $c(element) {

    return document.createElement(element);
}

function $cc(parent, element, text) {
    let el = document.createElement(element);
    el.innerHTML = text;
    parent.appendChild(el);
}



// function $cc(target, label, innerT) {
//     let new_label = c(label);
//     new_label.innerText = innerT;
//     target.appendChild(new_label);
// }

// function $cc(target, element, text) {
//     let el = document.createElement(element);
//     el.innerText = text;
//     target.appendChild(el);
// }

// function $cc(selector,element,text){
//     let select  = document.querySelectorAll(selector)
//     let sel = select.length == 1 ? select[0] : select
//     let ele = document.createElement(element);
//     ele.innerText = text;
//     sel.appendChild(ele)
// }

export { $g , $c , $cc }