// JSON-строка
const jsonString = `{
  "list": [
    {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
    },
    {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
    }
  ]
}`;

// Парсинг JSON-строки в JS-объект
const jsObject = JSON.parse(jsonString);

// Преобразование строковых значений возраста в числа
jsObject.list.forEach(item => {
  item.age = Number(item.age);
});

// Вывод JS-объекта в консоль
console.log(jsObject);