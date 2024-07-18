const pageLeftBtn = document.querySelector(".page-left-btn");
const selectDayBtn = document.querySelector(".select-day-btn");
const pageRightBtn = document.querySelector(".page-right-btn");

const currentDate = new Date();
// console.log(currentDate);
//Sat Jul 13 2024 05:44:07 GMT+0800 (台北標準時間)

let currentYear = currentDate.getFullYear();
// console.log(currentYear);
//2024

let currentMonth = currentDate.getMonth() + 1;
// console.log(currentMonth);
//7

let updateMonth = currentMonth;
let updateYear = currentYear;

selectDayBtn.textContent = `${updateYear}年${updateMonth}月`;
console.log(updateYear,updateMonth);

pageLeftBtn.addEventListener("click", () => {
    if (updateMonth > 1) {
        updateMonth--;
        console.log(updateYear,updateMonth);
    } else {
        updateYear--;
        updateMonth = 12;
        CreateDropDownMenu();
        console.log(updateYear,updateMonth);
    }
    
    updateAndRenderCalendar(updateYear, updateMonth);
});

pageRightBtn.addEventListener("click", () => {
    if (updateMonth < 12) {
        updateMonth++;
        console.log(updateYear,updateMonth);
    } else {
        updateYear++;
        updateMonth = 1;
        CreateDropDownMenu();
        console.log(updateYear,updateMonth);
    }
    
    updateAndRenderCalendar(updateYear, updateMonth);
});

function updateAndRenderCalendar(year, month) {
    updateYear = year;
    updateMonth = month;
    selectDayBtn.textContent = `${updateYear}年${updateMonth}月`;
    ChangeCalenderNumber(updateYear, updateMonth);
    loadTodoList();
};



function CreateDropDownMenu() {
    const dropDownMenu = document.querySelector(".dropdown-menu");
    dropDownMenu.innerHTML = '';
    for (let i = 1; i <= 12; i++) {
        //創造a
        const createDropDownItem = document.createElement("a");
        createDropDownItem.className = "dropdown-item";
        createDropDownItem.href = "#";
        createDropDownItem.textContent = `${updateYear}年${i}月`;

        //創造li
        const createLiIndropdownMenu = document.createElement("li");
        createLiIndropdownMenu.append(createDropDownItem);

        //掛進ul
        const dropDownMenu = document.querySelector(".dropdown-menu");
        dropDownMenu.append(createLiIndropdownMenu);

        //日曆隨著選單變
        createLiIndropdownMenu.addEventListener("click", () => {
            updateAndRenderCalendar(updateYear, i);
        });
    };
};
CreateDropDownMenu();



//取得每個月1號是星期幾
function getFirstDayOfMonth(year, month) {
    const currentFirstDay = new Date(year, month - 1, 1);
    return currentFirstDay.getDay();
};

let firstDay;
let nextMonthLength;
let lastMonthLength;
let currentMonthLength;
const dateElements = document.querySelectorAll(".date-title > .date");

//更改日曆數字
function ChangeCalenderNumber(year, month) {
    //取得每個月1號是星期幾
    firstDay = getFirstDayOfMonth(year, month);


    //改寫內容
    // const dateElements = document.querySelectorAll(".date-title > .date");

    //更改日曆顯示數字
    currentMonthLength = new Date(year, month, 0).getDate();
    lastMonthLength = new Date(year, month - 1, 0).getDate();
    nextMonthLength = 37 - (currentMonthLength + firstDay)
    // console.log(currentMonthLength, firstDay, nextMonthLength);

    // 清空所有日期和顏色
    dateElements.forEach(element => {
        element.textContent = '';
        element.style.color = '';
    });

    //當月
    if (firstDay >= 0 && firstDay <= 6) {
        for (let i = 0; i <= currentMonthLength; i++) {
            if (firstDay + i < (firstDay + 31)) {
                dateElements[firstDay + i].textContent = i + 1;
                dateElements[i].style.color = "black";
            };
        };
    }

    //上個月
    for (let j = 0; j < firstDay; j++) {
        dateElements[j].textContent = lastMonthLength - firstDay + j + 1;
        dateElements[j].style.color = "#d3d3d3";
    };

    //下個月
    for (let k = 0; k < nextMonthLength; k++) {
        dateElements[firstDay + currentMonthLength + k].textContent = k + 1;

        dateElements[firstDay + currentMonthLength + k].style.color = "#d3d3d3";
    };
    // AddEventButton();
};
ChangeCalenderNumber(currentYear, currentMonth);


//modal------------------------
//上午或下午
const selectPeriod = document.querySelector("#validationCustom04");
//時
const inputHour = document.querySelector("#input-hour");
//分
const inputMinutes = document.querySelector("#input-minutes");

const inputTodo = document.querySelector("#todo-content");

const rgbColorBtn = document.querySelector("#RGB-color-btn");

const modalConfirmBtn = document.querySelector("#modal-confirm-btn");


let selectedDate;
let tempYear, tempMonth, tempDate;
//debug--------------------------------------------------------------------------------------
document.querySelectorAll(".add-event").forEach(button => {
    button.addEventListener("click", function () {
        const nearlyDateDiv = this.nextElementSibling;
        selectedDate = parseInt(nearlyDateDiv.textContent);

        // console.log(nearlyDateDiv.textContent);
        console.log(nearlyDateDiv.style.color);

        if (nearlyDateDiv.style.color === "rgb(211, 211, 211)") {
            if (selectedDate > 15) {
                //上個月

                selectedMonth = (updateMonth - 1) === 0 ? 12 : updateMonth - 1;
                selectedYear = (updateMonth - 1) === 0 ? updateYear - 1 : updateYear;

            } else {
                //下個月
                selectedMonth = (updateMonth + 1) === 13 ? 1 : updateMonth + 1;
                selectedYear = (updateMonth + 1) === 13 ? updateYear + 1 : updateYear;

            }
        } else {
            // 目前的月份
            selectedMonth = updateMonth;
            selectedYear = updateYear;

        }

        tempYear = selectedYear;
        tempMonth = selectedMonth;
        tempDate = parseInt(nearlyDateDiv.textContent);
        console.log(tempYear, tempMonth, tempDate);

        modalPreserveBtn.classList.add('d-none');
        modalConfirmBtn.classList.remove('d-none');
        document.getElementById('validationCustom04').value = '';
        document.getElementById('input-hour').value = '';
        document.getElementById('input-minutes').value = '';
        document.getElementById('todo-content').value = '';
        document.getElementById('RGB-color-btn').value = '#ffeff8';
    });
});

//modal
const staticBackdrop = new bootstrap.Modal(document.getElementById('staticBackdrop'), {
    keyboard: false
});

//按下確認後
modalConfirmBtn.addEventListener("click", () => {
    const todoText = inputTodo.value.trim();
    if (!todoText) {
        alert("請輸入你想做的事");
        return;
    }
    if (selectPeriod.value === "") {
        alert("請選擇上午或下午");
        return;
    }
    if (isNaN(inputHour.value) || inputHour.value.length > 2 || inputHour.value > 12 || inputHour.value < 0 || inputHour.value == 0 || inputMinutes.value > 59 || inputMinutes.value < 0 || isNaN(inputMinutes.value) || inputMinutes.value.length > 2) {
        alert("請確認時間是不是超過兩個數字或非數字");
        return;
    }
    const todoItem = {
        id: new Date().valueOf(),
        year: tempYear,
        month: tempMonth,
        date: tempDate,
        todo: [{
            period: selectPeriod.value,
            time: `${inputHour.value}:${inputMinutes.value}`,
            do: inputTodo.value,
            color: rgbColorBtn.value,
        }]
    };
    saveTodoItemToList(todoItem);
    loadTodoList();
    staticBackdrop.hide();
});

const todoItemTemplate = document.querySelector("#todo_item_template");


//建立元素
function createTodoItemEl(todoItem) {

    const todoItemEl = todoItemTemplate.content.querySelector("#list-group-item").cloneNode(true);

    todoItemEl.dataset.id = todoItem.id;


    todoItemEl.textContent = `${todoItem.todo[0].period} ${todoItem.todo[0].time} ${todoItem.todo[0].do}`;
    todoItemEl.style.backgroundColor = todoItem.todo[0].color;
    console.log(todoItemEl);

    return todoItemEl;
}
// //-------------------------------------------------------------------

function saveTodoItemToList(todoItem) {
    const todoList = getTodoListFromStorage();
    todoList.push(todoItem);
    saveTodoListToStorage(todoList);
};

const key = "todoList"

function getTodoListFromStorage() {
    //取得現在所有的todoItem,再加上去
    const localStorageItem = localStorage.getItem(key);
    return localStorageItem ? JSON.parse(localStorageItem) : [];
}

//存至本地端資料庫
function saveTodoListToStorage(todoList) {
    const json = JSON.stringify(todoList);
    localStorage.setItem(key, json);
}





function loadTodoList() {
    const todoListGroupEl = document.querySelectorAll(".todo-list");

    todoListGroupEl.forEach(el => el.innerHTML = "");

    const todoList = getTodoListFromStorage();
    if (!todoList) {
        return;
    }
    //fistday=當前月曆上個月的空格需要幾格
    //nextMonthLength=當前月曆下個月的空格需要幾格
    //firstDay + currentMonthLength
    console.log(tempYear, tempMonth, tempDate);
    todoList.forEach((item) => {
        // 當月的日期處理
        if (item.year === updateYear && item.month === updateMonth) {
            const dateIndex = (firstDay + parseInt(item.date) - 1);
            const todoListElement = todoListGroupEl[dateIndex];

            item.todo.forEach((task) => {
                const todoItemDOM = createTodoItemEl({ ...item, todo: [task] });
                todoListElement.append(todoItemDOM);
            });
        }
        // 上個月的日期處理
        else if (item.year === (updateMonth === 1 ? updateYear - 1 : updateYear) && item.month === (updateMonth === 1 ? 12 : updateMonth - 1)) {
            for (let i = 0; i < firstDay; i++) {
                const dateIndex = i;
                // 計算上個月的對應日期
                const lastMonthDate = lastMonthLength - firstDay + i + 1;
                if (item.date == lastMonthDate) {
                    const todoListElement = todoListGroupEl[dateIndex];
                    item.todo.forEach((task) => {
                        const todoItemDOM = createTodoItemEl({ ...item, todo: [task] });
                        todoListElement.append(todoItemDOM);
                    });
                }
            }
        }
        // 下個月的日期處理
        else if (item.year === (updateMonth === 12 ? updateYear + 1 : updateYear) && item.month === (updateMonth === 12 ? 1 : updateMonth + 1)) {
            const nextMonthStartIndex = firstDay + currentMonthLength; // 下個月顯示在當前月曆上的日期開始位置
            for (let j = 1; j <= nextMonthLength; j++) {
                if (item.date == j) {
                    const dateIndex = nextMonthStartIndex + j - 1; // 對應下個月日期在當前月曆的位置
                    const todoListElement = todoListGroupEl[dateIndex];

                    item.todo.forEach((task) => {
                        const todoItemDOM = createTodoItemEl({ ...item, todo: [task] });
                        todoListElement.append(todoItemDOM);
                    });
                }
            }
        }
    });
}



// firstDay + selectedDate - 1
window.addEventListener('load', function (event) {
    loadTodoList();
})
//-------------------------------------------------------------------
//點擊後會跳出編輯刪除視窗

const editDeleteModal = new bootstrap.Modal(document.getElementById('editDeleteModal'));
const editTodoBtn = document.getElementById('editTodoBtn');
const deleteTodoBtn = document.getElementById('deleteTodoBtn');
const modalPreserveBtn = document.querySelector("#modal-preserve-btn");
let selectedTodoItem = null;

editTodoBtn.addEventListener('click', () => {
    if (selectedTodoItem) {

        document.getElementById('input-hour').value = selectedTodoItem.todo[0].time.split(':')[0];
        document.getElementById('input-minutes').value = selectedTodoItem.todo[0].time.split(':')[1];
        document.getElementById('todo-content').value = selectedTodoItem.todo[0].do;
        document.getElementById('RGB-color-btn').value = selectedTodoItem.todo[0].color;

        staticBackdrop.show();

        modalPreserveBtn.classList.remove('d-none');
        modalConfirmBtn.classList.add('d-none');
    }
});

deleteTodoBtn.addEventListener('click', () => {
    if (selectedTodoItem) {

        const todoList = getTodoListFromStorage();
        const updatedTodoList = todoList.filter(item => item.id !== selectedTodoItem.id);
        saveTodoListToStorage(updatedTodoList);

        loadTodoList();
    }
});

modalPreserveBtn.addEventListener('click', () => {
    // 獲取編輯後的待辦事項資料

    // ${todoItem.todo[0].period}
    const editPeriod = document.getElementById('validationCustom04').value;
    const editedHour = document.getElementById('input-hour').value;
    const editedMinutes = document.getElementById('input-minutes').value;
    const editedTodoContent = document.getElementById('todo-content').value;
    const editedColor = document.getElementById('RGB-color-btn').value;

    if (!editedTodoContent) {
        return;
    }

    // 更新 selectedTodoItem 的內容
    // selectedTodoItem.todo[0].period = editPeriod;
    // selectedTodoItem.todo[0].time = `${editedHour}:${editedMinutes}`;
    // selectedTodoItem.todo[0].do = editedTodoContent;
    selectedTodoItem.todo[0].color = editedColor;

    if (!editedTodoContent) {
        alert("請輸入你想做的事");
        return;
    } else {
        selectedTodoItem.todo[0].do = editedTodoContent;
    }
    if (editPeriod === "") {
        alert("請選擇上午或下午");
        return;
    } else {
        selectedTodoItem.todo[0].period = editPeriod;
    }
    if (isNaN(editedHour) || editedHour.length > 2 || editedHour > 12 || editedHour < 0 || editedHour == 0 || editedMinutes > 59 || editedMinutes < 0 || isNaN(editedMinutes) || editedMinutes.length > 2) {
        alert("請確認時間是不是超過兩個數字或非數字");
        return;
    } else {
        selectedTodoItem.todo[0].time = `${editedHour}:${editedMinutes}`;
    }

    // 獲取本地存儲中的待辦事項列表
    const todoList = getTodoListFromStorage();

    // 更新待辦事項列表中的 selectedTodoItem
    const updatedTodoList = todoList.map(item => {
        if (item.id === selectedTodoItem.id) {
            return selectedTodoItem;
        }
        return item;
    });

    // 保存更新後的待辦事項列表到本地存儲
    saveTodoListToStorage(updatedTodoList);

    // 重新載入並渲染待辦事項列表和日曆
    loadTodoList();

    // 隱藏編輯視窗

    staticBackdrop.hide();
})

document.addEventListener('click', function (event) {
    if (event.target && event.target.matches(".todo-list li")) {
        const todoItemId = event.target.dataset.id;
        const todoList = getTodoListFromStorage();
        selectedTodoItem = todoList.find(item => item.id === parseInt(todoItemId));
        if (selectedTodoItem) {
            editDeleteModal.show();
        }
    }
});



