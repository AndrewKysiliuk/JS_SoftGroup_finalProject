/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/person.js
 class Person {
    constructor(name,surname, country = "", city = "", mail, phone, job){
        this.name = name;
        this.surname = surname;
        this.country = country;
        this.city = city;
        this.mail = mail;
        this.phone = phone;
        this.job = job;
    }
}
// CONCATENATED MODULE: ./src/personList.js


class personList_PersonList {
    constructor(){
        this.personList = [];
    }
    addPerson(person){
        if(person instanceof Person)
            this.personList.push(person);
    }
    deletePerson (name,surname) {
        for (let i = 0; i < this.personList.length; i++) {
            if (this.personList[i].name === name && this.personList[i].surname === surname) {
                this.personList.splice(i, 1);
                return i;
            }
        }
        return -1;
    }
    deleteChecked (delEl) {
        if(delEl.length) {
            let i = delEl.length - 1;
            while (i >= 0) {
                this.personList.splice(delEl[i], 1);
                i--;
            }
            return true;
        }
        else
            return false;
    }

    sortPerson(by) {
        this._sortBy = by;
        this.personList.sort(this._sort.bind(this));
        return this.personList;
    }

    _sort (person1,person2) {
        return person1[this._sortBy]>person2[this._sortBy];
    }

}
// CONCATENATED MODULE: ./src/User.js
class User {
    constructor(userName,password,data){
        this._userName = userName;
        this._password = password;
        this._data = data;
    }
    get data() {
        return this._data;
    }
    update(list){
        try {
            this._data = list;
            let temp = [this._password, list];
            localStorage.setItem(this._userName, JSON.stringify(temp));
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

}


// CONCATENATED MODULE: ./src/main.js




let user, newPerson, rowIndex, mergingIndex, mergingArray = [], filterIndex = [], filterArr = [], isMerging = false;

let logInForm      = document.getElementsByClassName("logIn")[0],
    authorization  = document.getElementsByClassName("authorization")[0].parentElement,
    logOut         = document.getElementsByClassName("logOut")[0],
    addForm        = document.getElementsByClassName("add")[0],
    delForm        = document.getElementsByClassName("del")[0],
    filterForm     = document.getElementsByClassName("filterSort")[0],
    editForm       = document.getElementsByClassName("editForm")[0],
    delChecked     = document.getElementsByClassName("delChecked")[0],
    exportBtn      = document.getElementsByClassName("export")[0],
    importBtn      = document.getElementsByClassName("import")[0],
    selectAll      = document.getElementsByClassName("selectAll")[0],
    merging        = document.getElementsByClassName("merging")[0].parentElement,
    phoneBook      = document.getElementsByClassName("custom_container")[0],
    changeBtn      = document.getElementById("changeContact"),
    saveBtn        = document.getElementById("saveContact"),
    saveEditChange = document.getElementById("saveEditChange"),
    cancelEdit     = document.getElementById("cancelEdit");

let tBody = document.getElementsByClassName("table-list")[0].getElementsByTagName("TBODY")[0],
    addressList = new personList_PersonList();

logInForm.logInBtn.addEventListener("click",() =>{ //модальне вікно авторизації, кнопка вхід
    let userName = logInForm.login.value,
        password = logInForm.password.value;

    let record = localStorage.getItem(userName);
    if(record){
        let data = JSON.parse(record);
        if(data[0]===password){
            authorization.setAttribute("hidden","hidden");
            phoneBook.removeAttribute("hidden");
            user = new User(userName,password,data[1]);
            addressList.personList = user.data;
            updateTable(addressList.personList);
        }
        else
            alert("Невірно введено пароль!");
    } else {
        alert("Користувача з таким логіном незнайдено!");
        if(confirm("Створити новий обліковий запис?")){
            logInForm.logInBtn.setAttribute("hidden","hidden");
            logInForm.registerBtn.removeAttribute("hidden");
            logInForm.repeatPassword.parentElement.removeAttribute("hidden");
            clearInput(logInForm);
        }
    }
});
logOut.addEventListener("click",() =>{ //кнопки вихід
   user.update(addressList.personList);
   user = null;
   remove(tBody);
   phoneBook.setAttribute("hidden","hidden");
   authorization.removeAttribute("hidden");
   clearInput(logInForm);
   clearInput(editForm);
   clearInput(delForm);
   clearInput(addForm);
   clearInput(filterForm);
});
logInForm.registerBtn.addEventListener("click",() =>{ //реєстрація, створення нового користувача
    let userName   = logInForm.login.value,
        password   = logInForm.password.value,
        repeatPass = logInForm.repeatPassword.value;

    let record = localStorage.getItem(userName);
    if(record){
        alert(`Користувач з логіном ${userName} уже існує, введіть інший логін`);
    } else {
        if(password !== repeatPass)
            alert("Паролі не співпадають!");
        else {
            let rec = [password,[]];
            localStorage.setItem(userName,JSON.stringify(rec));
            user = new User(userName,password,[]);
            authorization.setAttribute("hidden","hidden");
            phoneBook.removeAttribute("hidden");
            logInForm.logInBtn.removeAttribute("hidden");
            logInForm.registerBtn.setAttribute("hidden","hidden");
            logInForm.repeatPassword.parentElement.setAttribute("hidden","hidden");
        }
    }
    addressList.personList = user.data;
});


addForm.Btn.addEventListener("click", () => {           // додаємо новий запис
    if(!addForm.name.value || !addForm.surname.value || !addForm.phone.value || !addForm.mail.value){
        alert("Не заповнено одне з обов'язкових полів(*)");
        return false;
    }
    try {
        newPerson = new Person(addForm.name.value, addForm.surname.value, addForm.country.value, addForm.city.value,
            addForm.mail.value, addForm.phone.value, addForm.job.value);
        let temp = [];
        mergingArray = [];
        for (let i = 0;i < addressList.personList.length;i++) {
            if (addressList.personList[i].phone === newPerson.phone || addressList.personList[i].mail === newPerson.mail) {
                temp.push(addressList.personList[i]);
                mergingArray.push(i);
            }
        }
        if (temp.length === 1){
            let title = "Контакт з вказаним номером або електронною адресою уже існує:";
            mergingContacts(addressList.personList[mergingArray[0]],newPerson,title);
            mergingIndex = mergingArray[0];
            isMerging = false;
        } else if(temp.length > 1) {
            alert("За вказаним номером або електронною адресою уже існують контакти, виберіть контакт для об'єднання");
            updateTable(temp);
            isMerging = true;
        }
        else{
            addressList.addPerson(newPerson);
            user.update(addressList.personList);
            updateTable(addressList.personList);
            alert("Додано новий запис");
        }
        clearInput(addForm);
    } catch (e) {
        console.log(e);
    }
});

changeBtn.addEventListener("click",() => {  // мерджинг даних, замінєюмо існуючий контакт новим
    merging.setAttribute("hidden","hidden");
    phoneBook.removeAttribute("hidden");
    addressList.personList[mergingIndex] = newPerson;
    updateTable(addressList.personList);
    alert("Запис оновлено");
    user.update(addressList.personList);
});

saveBtn.addEventListener("click",() => {   // мерджинг даних, створюємо новий контакт
    merging.setAttribute("hidden","hidden");
    phoneBook.removeAttribute("hidden");
    newPerson.name += "1";
    newPerson.surname += "1";
    addressList.addPerson(newPerson);
    updateTable(addressList.personList);
    user.update(addressList.personList);
    alert("Додано новий запис");
});

delForm.Btn.addEventListener("click",() =>{ // видалити контакт за прізвищем та ім'ям
    let index = addressList.deletePerson(delForm.name.value,delForm.surname.value);
    if(index >= 0 && index <= addressList.personList.length) {
        user.update(addressList.personList);
        clearInput(delForm);
        clearInput(editForm);
        updateTable(addressList.personList);
        alert("Запис видалено");
    }else
        alert("Запису з такими Ім'ям і Прізвищем незнайдено!");
});

editForm.Btn.addEventListener("click", () =>{ // почати редагування, скинути атрибут readonly
    editForm.querySelectorAll("input[type = 'text'],input[type = 'email'],input[type = 'number']").forEach(el => el.removeAttribute("readonly"));
    editForm.Btn.setAttribute("hidden","hidden");
    document.getElementsByClassName("block__buttons")[0].removeAttribute("hidden");
});
saveEditChange.addEventListener("click",() =>{ //зберегти зміни у відредагованому записі
    if(confirm("Зберегти зміни?")) {
        if(filterIndex.length){
            for (let key in addressList.personList[0])
                addressList.personList[filterIndex[rowIndex]][key] = editForm[key].value;
            updateTable(filterArr);
        }
        else {
            for (let key in addressList.personList[0])
                addressList.personList[rowIndex][key] = editForm[key].value;
            updateTable(addressList.personList);
        }
        user.update(addressList.personList);
        editForm.Btn.removeAttribute("hidden");
        document.getElementsByClassName("block__buttons")[0].setAttribute("hidden", "hidden");
        editForm.querySelectorAll("input[type = 'text'],input[type = 'email'],input[type = 'number']").forEach(el => el.setAttribute("readonly", "readonly"));
        clearInput(editForm);
        alert("Запис відредаговано");
    }
    else
        cancelEdit.click();
});
cancelEdit.addEventListener("click",() =>{ // скасувати редагування
    editForm.Btn.removeAttribute("hidden");
    document.getElementsByClassName("block__buttons")[0].setAttribute("hidden","hidden");
    editForm.querySelectorAll("input[type = 'text'],input[type = 'email'],input[type = 'number']").forEach(el => el.setAttribute("readonly","readonly"));
    clearInput(editForm);
});

filterForm.sortBtn.addEventListener("click",() =>{ // сортування контактів по країнах або містах
    let index = 0;
    let radio = document.getElementsByName("sortBy");
    radio.forEach((el,i) =>{
       if(el.checked)
           index = i;
    });
    addressList.sortPerson(radio[index].value);
    updateTable(addressList.personList);
});

filterForm.filterBtn.addEventListener("click",() =>{ // фільтрація даних
   let  country  = filterForm.country.value,
        city     = filterForm.city.value;
   filterIndex = [];
   filterArr   = [];
   if(country && city) {
       addressList.personList.forEach((person, i) => {
           if (person.country === country && person.city === city) {
               filterArr.push(person);
               filterIndex.push(i);
           }
       });
   } else if(country && !city){
       addressList.personList.forEach((person, i) => {
           if (person.country === country) {
               filterArr.push(person);
               filterIndex.push(i);
           }
       });
   }
   else if(!country && city){
       addressList.personList.forEach((person, i) => {
           if ( person.city === city) {
               filterArr.push(person);
               filterIndex.push(i);
           }
       });
   }
   else {
       alert("Невірно задані фільтри");
   }
   if(filterArr.length)
       updateTable(filterArr);
   else{
       alert("Записів за цим фільтром неіснує");
       clearInput(filterForm);
       updateTable(addressList.personList);
   }

});
filterForm.removeFilter.addEventListener("click",() => { // скинути фільтр
    filterIndex = [];
    filterArr = [];
    updateTable(addressList.personList);
    clearInput(filterForm);
});

selectAll.addEventListener("click",() => { // чекнути всі записи в табличці
    if(selectAll.checked)
        for(let i = 0; i<tBody.rows.length;i++)
            tBody.rows[i].firstChild.firstChild.checked = true;
    else
        for(let i = 0; i<tBody.rows.length;i++)
            tBody.rows[i].firstChild.firstChild.checked = false;
});

delChecked.addEventListener("click",() => { // видалення позначених контактів
    let checkIndex = [];

    if (filterIndex.length){
        for(let i = 0; i<tBody.rows.length;i++)
            if(tBody.rows[i].firstChild.firstChild.checked)
                checkIndex.push(filterIndex[i]);
    } else {
        for(let i = 0; i<tBody.rows.length;i++)
            if(tBody.rows[i].firstChild.firstChild.checked)
                checkIndex.push(i);
    }

    if(checkIndex.length) {
        if (confirm("Ви дійсно бажаєте видалити позначені записи?")) {
            addressList.deleteChecked(checkIndex);
            if(filterIndex.length)
                filterForm.filterBtn.click();
            else
                updateTable(addressList.personList);
            user.update(addressList.personList);
            selectAll.checked = false;
            clearInput(editForm);
        }
    } else
        alert("Непозначено жодного запису для видалення!");
});

exportBtn.addEventListener("click", () => { //експорт контактів у .csv файл
    let exp = [];

    if (filterIndex.length){
        for(let i = 0; i<tBody.rows.length;i++)
            if(tBody.rows[i].firstChild.firstChild.checked)
                exp.push(filterArr[i]);
    } else {
        for(let i = 0; i<tBody.rows.length;i++) {
            if(tBody.rows[i].firstChild.firstChild.checked)
                exp.push(addressList.personList[i]);
    }
    }
    let csv = createCsv(exp);
    if(csv){
        try {
            download(encodeURI(csv), 'contacts.csv');
            selectAll.checked = false;
            for (let i = 0; i < tBody.rows.length; i++)
                tBody.rows[i].firstChild.firstChild.checked = false;
            alert("Контакти успішно експортовані");
        } catch (e) {
            alert("Помилка під-час експорту контактів!");
            console.log(e);
        }
    }else
        alert("Невказані контакти для експорту");
});
importBtn.addEventListener("click",() =>{ // імпорт зписів з json
    try {
        let request = new XMLHttpRequest();
        request.open("GET", "demo.json", false);
        request.send();
        if (request.status != 200) {
            alert('Помилка ' + request.status + ': ' + request.statusText);
        } else {
            let data = JSON.parse(request.responseText);
            alert("Демонстраційні дані імпортовано!");
            data.forEach(el => addressList.addPerson(new Person(el.name, el.surname, el.country, el.city, el.mail, el.phone, el.job)));
            user.update(addressList.personList);
            updateTable(addressList.personList);
        }
    } catch (e) {
        alert("Помилка підчас імпорту демо-даних!");
    }
});

tBody.addEventListener("click",(event) => { //клік по табличці, для мерджингу і редагування(виділення)
    let tr = event.target.parentElement;
    rowIndex = tr.rowIndex-1;

    if(isMerging){
        let title = "Контакт з вказаним номером або електронною адресою уже існує:";
        mergingIndex = mergingArray[rowIndex];
        mergingContacts(addressList.personList[mergingIndex],newPerson,title);
        isMerging = false;
    }
    else if(tr.nodeName === "TR"){
        for(let i = 0; i<tBody.rows.length;i++) {
            tBody.rows[i].childNodes.forEach(el => el.className = "defaultTd");
        }

        tr.childNodes.forEach(el => el.className= "customTd");

        if(filterIndex.length) {
            for (let key in addressList.personList[0])
                editForm[key].value = addressList.personList[filterIndex[rowIndex]][key];
        }
        else {
            for (let key in addressList.personList[0])
                editForm[key].value = addressList.personList[rowIndex][key];
        }
    }
});

function mergingContacts(person,newPerson, title) { //відкриваємо модалку для мерджингу
    phoneBook.setAttribute("hidden","hidden");
    merging.removeAttribute("hidden");
    document.getElementsByClassName("current-info__title")[0].innerHTML = title;

    let current = document.getElementsByClassName("merging__current-info")[0].getElementsByTagName("SPAN");
    let temp=[];
    for(let key in person)
        temp.push(person[key]);
    for (let i = 0;i<current.length;i++)
        current[i].innerHTML = temp[i];

    let newInfo = document.getElementsByClassName("merging__new-info")[0].getElementsByTagName("SPAN");
    temp = [];
    for(let key in newPerson)
        temp.push(newPerson[key]);
    for (let i = 0;i<newInfo.length;i++)
        newInfo[i].innerHTML = temp[i];
}

function clearInput(form) { //очистка input-ів
    form.querySelectorAll("input[type = 'text'],input[type = 'email'],input[type = 'number'],input[type = 'password']").forEach(el => el.value = "");
}

function createCsv(data) { //формуємо масив даних для експорту в .csv
    let result, colm = ",",row = "\n";
    if (data == null || !data.length) {
        return null;
    }
    result = "data:text/csv;charset=utf-8,";
    result += Object.keys(data[0]).join(colm);
    result += row;

    data.forEach(item =>{
        let temp = [];
        for(let key in item)
            temp.push(item[key]);
        result += temp.join(colm);
        result += row;
    });
   return result;
}
function download(data, filename) { // ф-ція для завантаження .csv файлу
    let a = document.createElement("a");
    a.href = data;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function() {
        document.body.removeChild(a);
        }, 0);
}

function updateTable(list) { //малюємо табличку
    let tBody = document.getElementsByClassName("table-list")[0].getElementsByTagName("TBODY")[0];
    remove(tBody);
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    for(let i=0;i<list.length;i++) {
        let row = tBody.insertRow(i);
        let checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        row.insertCell(0).appendChild(checkBox);
        row.insertCell(1).innerHTML = list[i].surname;
        row.insertCell(2).innerHTML = list[i].name;
        row.insertCell(3).innerHTML = list[i].mail;
        row.insertCell(4).innerHTML = list[i].phone;
    }
    for(let i=0;i<list.length;i++) {
        tBody.rows[i].childNodes.forEach(el => el.className = "defaultTd");
    }
}
function remove(tBody) { //видаляємо дані з таблички
    let i = tBody.rows.length-1;
    while (i>=0){
        tBody.rows[i].remove();
        i--;
    }
}

/***/ })
/******/ ]);