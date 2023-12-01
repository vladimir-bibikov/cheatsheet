const output = document.querySelector('.output')
const indexH1 = document.querySelector('.indexh1')
const indexH5 = document.querySelector('.indexh5')

function indexReset(){
  indexH1.remove()
  indexH5.remove()
}

function funcPromise(){

output.innerHTML = `
<h5>1.Promise (Обещание):</h5><br>
   Promise - это объект, представляющий асинхронную операцию, 
   которая может завершиться успешно (resolve) или с ошибкой 
   (reject). Промисы позволяют более четко и удобно управлять асинхронным кодом.
 
   Пример создания промиса:<br><br>
<pre>
const myPromise = new Promise((resolve, reject) => {
  if (/* условие */) {
    resolve('Успех!'); // В случае успешного выполнения
  } else {
    reject('Ошибка!'); // В случае ошибки
    }
})
</pre><br>
<h5>2. async и await:</h5><br>
   async и await - это синтаксический сахар для работы с промисами, 
   который делает асинхронный код более читаемым и удобным.

   Пример использования async и await:<br><br>
<pre>
async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}
</pre><br>
<h5>3. Практические примеры:</h5><br>

   Пример 1: Загрузка данных с сервера с использованием async/await:
<br><br><pre>
async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка:', error);
    }
}
</pre><br>
   Пример 2: Параллельное выполнение нескольких асинхронных операций с Promise.all:
<br><br><pre>
async function fetchMultipleData() {
  const promises = [fetchData1(), fetchData2(), fetchData3()];
  const data = await Promise.all(promises);
  return data;
}
</pre><br>
   Пример 3: Цепочка обработки данных с промисами:
<br><br><pre>
fetch(url)
  .then(data => data.json())
  .then(json => console.log(json))
  .catch(error => console.log(error));
</pre>
`
}

function funcClass(){
  output.innerHTML = ''
}

function funcCallB(){
  output.innerHTML = ''
}

function funcArr(){
  output.innerHTML = ''
}

function sayHi(){
  alert('Hello my friend!')
}