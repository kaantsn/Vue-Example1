Vue.component('task-list', {
    template: `
      <div>
        <input v-model="newTask" placeholder="Yeni görev girin">
        <button @click="addTask">Ekle</button>
        <ul>
          <li v-for="(task, index) in tasks" :key="index">
            {{ task }}
            <button @click="removeTask(index)">Sil</button>
          </li>
        </ul>
      </div>
    `,
    data() {
      return {
        newTask: '',
        tasks: []
      }
    },
    methods: {
      addTask() {
        if (this.newTask !== '') {
          this.tasks.push(this.newTask);
          this.newTask = '';
        }
      },
      removeTask(index) {
        this.tasks.splice(index, 1);
      }
    }
  });
  
  new Vue({
    el: '#app'
  });
  