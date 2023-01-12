console.log('vue ok', Vue)

const app = Vue.createApp({
    data() {
        return{
            newTask: '',
            tasks :[
                {task:'fare la spesa',
                 done: true
                },
            
                {task:'aggiornare il computer',
                 done: false
                },
                
                {task:'allenarmi',
                 done: false
                },
            
                {task:'cucinare',
                 done: false
                },
            
                {task:'riparare il mouse',
                 done: true
                },
            ],
            
        
        }},

        methods:{

            removeTask(index){
                this.tasks.splice(index,1);
            },

            addTask(){
                this.tasks.push({task: this.newTask,
                                 done: false   });
                
            },

            addLine(index){
                this.tasks[index].done = !this.tasks[index].done;
              
            }
           
        }});
        
    
app.mount('#root')
