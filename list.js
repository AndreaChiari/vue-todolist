console.log('vue ok', Vue)

const app = Vue.createApp({
    data() {
        return{
            newTask: '',
            tasks :[
                {task:'fare la spesa',
                 done: false
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
                 done: false
                },
            ],
            
        
        }},

        methods:{

            removeTask(index){
                this.tasks.splice(index,1);
            },

            addTask(){
                this.tasks.push({task: this.newTask,
                                 done: true   });
                
            },

            addLine(){
                this.tasks.done === true;
            }
           
        }});
        
    
app.mount('#root')
