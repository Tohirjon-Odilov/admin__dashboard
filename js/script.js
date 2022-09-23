// import the file which users.js
import data from './users.js'


// selectors
let listGroup = $('.list-group')
let svg = $('#aside-svg')
let asideText = $('#aside__text')
let tbody = $('#tbody')
let sort = $('#sort')
let filter = $('#filter')

listGroup.forEach(el => {
  el.addEventListener('click', function (e) {
    el.classList.toggle('active');
  })
});
asideText.forEach(textEl => {
  textEl.classList.toggle('aside__text')
})

// render(data)

function render(data) {
  tbody.textConent = "5"
  // console.log(tbody);
  for (let i = 0; i < 10; i++) {
    let tr = document.createElement('tr')
    let priority = data[i].priority

    tr.innerHTML = `
    <td class="ps-4">
      <div class="d-flex">
        <img class="rounded-circle" width=44 height=44 src="${data[i].ava}" alt="">
        <div class="d-flex flex-column ps-3">
          <strong>${data[i].company}</strong>
          <span>${data[i].date_of_onliine}</span>
        </div>
      </div>
    </td>
    <td>
      <strong class="d-flex">${data[i].name}</strong>
      <span>${data[i].date_of_register}</span>
    </td>
    <td>
      <strong class="d-flex">${data[i].date_of_onliine}</strong>
      <span>${data[i].time}</span>
    </td>
    <td>
      <span class="line-height high">${priority}</span>
    </td>
    <td>
      <img class="line-height-img" src="./images/menu-settings.svg" alt="">
    </td>
  `

    // APPEND
    tbody[0].append(tr)

    // CHANGE LISTGROUP BACKGROUND
    let color = $('.line-height')
    if (priority === 'normal') {
      color[i].classList.add('normal')
    } else if (priority === 'low') {
      color[i].classList.add('low')
    } else {
      // if (color[i].hasAttribute('class', high)) {
      color[i].classList.add('high')
      // }
    }
    console.log(color[i]);
  }
}
// render(data)
// console.log(tbody);


// function sort() {
let sorted = [...data].sort((a, b) => a.name.localeCompare(b.name));
// a.name < b.name
// if (a.name > b.name) return 1;
// else if (b.name > a.name) return -1;
// return 0
// })
render(sorted)
// }
// sort()
// tbody.innerHTML = ""




































// if (a.name > b.name) return 1;
// else if (b.name > a.name) return -1;
// return 0

// console.log(data2);

// console.log(sort)
// tasksArr.sort((a, b) => {
// if (sortingType === "a-z") {
// return a.task.toLowerCase() > b.task.toLowerCase();
// } else if (sortingType === "time") {
// return a.id > b.id;
// } else {
// return b.task.toLowerCase() > a.task.toLowerCase();
// }
// });


// function tes(text) {
  // if (text === "a-z") {
    // data2.sort(function (a, b) {
      // return a.name.localeCompare(b.name)
    // })
  // }
// }
// 
// self.addEventListener("change", (evt) => {
  // tes(evt.target.value)
// })