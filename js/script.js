/* 
Descrizione:
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
 */
// const { createApp } = Vue;

// createApp({
//     data() {
//         return {
//             logo: "img/Logo.png" ,
//             title: 'Toboolist' ,
//             todos: [
//                 { text: 'Dormito otto ore', done: true },
//                 { text: 'Studiato Vue e JS', done: false },
//                 { text: 'Fatto esercizio fisico', done: true },
//                 { text: 'Fatto la spesa', done: false },
//                 { text: 'Andato a correre', done: true }, { text: 'Andato a correre', done: true },
//             ],
           
//         }
//     },
//     methods: {
       
//     }
// }).mount('#app');

/* -------------- VUE JS --------------- */

const { createApp } = Vue;

createApp({

  data() {
    return {
      tasks: [  ],
      doneClass: 'line-through',
      newTask: '',
      errorMessage: ''
    }
  },

  methods: {
    removeTask(index) {
      const isDone = this.tasks[index].isDone;
      if (isDone) {
        this.tasks.splice(index, 1);
        this.errorMessage = ''
      }
      else {
        this.errorMessage = 'Questa task non è stata ancora completata'
        this.hideError();
      }
    },

    addTask() {
      const taskLength = this.newTask.toString().trim().length;

      if (taskLength >= 5) {
        this.tasks.push({ 
          content: this.newTask, 
          isDone: false
        });
        this.newTask = '';
        this.errorMessage = '';
      } 
      else {
        this.errorMessage = 'La task deve contenere almeno 5 caratteri';
        this.hideError();
      }
    },

    hideError() {
      setTimeout(() => {
        this.errorMessage = '';
      }, 4000)
    }
  }

}).mount('#app');
