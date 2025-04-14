const askName = prompt('Введите ваш возраст.');

// Преобразуем введенное значение в число
const age = Number(askName);

if (age > 18) {
  alert('Вы взрослый');
} else if (age >= 14 && age <= 17) {
  alert('Вы подросток');
} else if (age > 0 && age <= 13) {
  alert('Вы ребенок');
} else {
  alert('Некорректный ввод');
}

// Исправлено название функции prompt и логика проверки напитка
const askName2 = prompt("Введите ваш любимый напиток.");
if (askName2 === "чай") {
  alert("Уважение");
} else {
  alert("Интересный выбор!");
}



