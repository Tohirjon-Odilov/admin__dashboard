// import the file which users.js
import data from './users.js'

// createElement function
const createEl = (...tags) => tags.map((tag) => document.createElement(tag));
//! select querySelector
function $(selector) {
  return document.querySelectorAll(selector);
}

// !selectors
let body = document.body
let listGroup = $('.list-group')
let asideText = $('#aside__text')
let tbody = body.querySelector('#tbody')
let sort = body.querySelector('#sorted')
let filter = body.querySelector('#filtered')
let table = $('.table')

// !aside bar
listGroup.forEach(el => {
  el.addEventListener('click', function (e) {
    el.classList.toggle('active');
  })
});
asideText.forEach(textEl => {
  textEl.classList.toggle('aside__text')
})

//! sort filter value = defaultga tenglash
sort.value = "Sort"
filter.value = "Filter"

//! render
render(data)

function render(data) {
  tbody.textContent = '';
  for (let el = 0; el < 10; el++) {

    //! created elements
    const [row, td1, imgWrapper, img, textWrapper, title, online, td2, name, register, td3, online2, date, td4, btn, td5, edit] = createEl("tr", "td", "div", "img", "div", "strong", "span", "td", "strong", "span", "td", "strong", "span", "td", "span", "td", "img")

    //! data concate to elements
    td1.className = 'ps-4'
    imgWrapper.className = 'd-flex'
    img.src = data[el].ava
    textWrapper.className = 'd-flex flex-column ps-3'
    title.textContent = data[el].text
    online.textContent = data[el].email
    textWrapper.append(title, online)
    imgWrapper.append(img, textWrapper)
    td1.append(imgWrapper)

    name.className = 'd-flex'
    name.textContent = data[el].name
    register.textContent = data[el].date_of_register
    td2.append(name, register)

    online2.className = 'd-flex'
    online2.textContent = data[el].date_of_onliine
    date.textContent = data[el].time
    td3.append(online2, date)

    btn.className = 'line-height'
    btn.textContent = data[el].priority
    //! change btn color
    switch (btn.textContent) {
      case 'high':
        btn.className = 'high'
        break;
      case 'normal':
        btn.className = 'normal'
        break;
      default:
        btn.className = 'low'
        break;
    }
    td4.append(btn)

    edit.src = '../images/menu-settings.svg'
    edit.setAttribute('id', 'menu_settings')
    td5.append(edit)

    //! main append
    row.append(td1, td2, td3, td4, td5)
    tbody.appendChild(row)
  }
}

//! sorting data
let sorted = null;
let defaultt = data
sort.addEventListener('change', function (e) {
  let sortValue = e.target.value
  // console.log(sortValue);
  switch (sortValue) {
    case 'a-z':
      sorted = [...data].sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'z-a':
      sorted = [...data].sort((a, b) => b.name.localeCompare(a.name));
      break
    default:
      sorted = defaultt
      break;
  }
  render(sorted)
})

//! filtering data
let filtered = null
filter.addEventListener('change', (e) => {
  let filterValue = e.target.value
  // console.log(filterValue);
  switch (filterValue) {
    case "high":
      filtered = [...data].filter((el) => el.priority === "high");
      break
    case "normal":
      filtered = [...data].filter((el) => el.priority === "normal");
      break
    case 'low':
      filtered = [...data].filter((el) => el.priority === "low")
      break
    default:
      filtered = defaultt
      break
  }
  render(filtered)
})

//! edit priority
let editDot = body.querySelector('#menu_settings')
function edited(editedData) {
  editDot.addEventListener('click', (e) => {
    console.log(e.target.value);
  })
}
edited()






























// render(data)

// function render(data) {
//   tbody.textConent = "5"
//   // console.log(tbody);
//   for (let i = 0; i < 10; i++) {
//     let tr = document.createElement('tr')
//     let priority = data[i].priority

//     tr.innerHTML = `
//     <td class="ps-4">
//       <div class="d-flex">
//         <img class="rounded-circle" width=44 height=44 src="${data[i].ava}" alt="">
//         <div class="d-flex flex-column ps-3">
//           <strong>${data[i].company}</strong>
//           <span>${data[i].date_of_onliine}</span>
//         </div>
//       </div>
//     </td>
//     <td>
//       <strong class="d-flex">${data[i].name}</strong>
//       <span>${data[i].date_of_register}</span>
//     </td>
//     <td>
//       <strong class="d-flex">${data[i].date_of_onliine}</strong>
//       <span>${data[i].time}</span>
//     </td>
//     <td>
//       <span class="line-height high">${priority}</span>
//     </td>
//     <td>
//       <img class="line-height-img" src="./images/menu-settings.svg" alt="">
//     </td>
//   `

//     // APPEND
//     tbody[0].append(tr)

//     // CHANGE LISTGROUP BACKGROUND
//     let color = $('.line-height')
//     if (priority === 'normal') {
//       color[i].classList.add('normal')
//     } else if (priority === 'low') {
//       color[i].classList.add('low')
//     } else {
//       // if (color[i].hasAttribute('class', high)) {
//       color[i].classList.add('high')
//       // }
//     }
//     console.log(color[i]);
//   }
// }
// render(data)
// console.log(tbody);


// function sort() {
// let sorted = [...data].sort((a, b) => a.name.localeCompare(b.name));
// a.name < b.name
// if (a.name > b.name) return 1;
// else if (b.name > a.name) return -1;
// return 0
// })
// render(sorted)
// }
// sort()
// tbody.innerHTML = ""

// let num = (5, 9)
// console.log(num);



































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