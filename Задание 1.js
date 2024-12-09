const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

// Функция для парсинга XML строки
function parseXML(xmlString) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
  return xmlDoc;
}

// Функция для преобразования XML в JS-объект
function xmlToJson(xml) {
  const list = [];
  const students = xml.getElementsByTagName('student');

  for (let student of students) {
    const nameElement = student.getElementsByTagName('name')[0];
    const firstName = nameElement.getElementsByTagName('first')[0].textContent;
    const secondName = nameElement.getElementsByTagName('second')[0].textContent;
    const lang = nameElement.getAttribute('lang');
    const age = parseInt(student.getElementsByTagName('age')[0].textContent, 10);
    const prof = student.getElementsByTagName('prof')[0].textContent;

    list.push({
      name: `${firstName} ${secondName}`,
      age: age,
      prof: prof,
      lang: lang
    });
  }

  return { list };
}

// Парсинг XML строки
const xmlDoc = parseXML(xmlString);

// Преобразование XML в JS-объект
const jsonObject = xmlToJson(xmlDoc);

// Вывод JS-объекта в консоль
console.log(jsonObject);