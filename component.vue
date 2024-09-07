<template></template>

<script>

export default {
  data () {
    return {
      completed: 'all',
      assigned: 'all'
    }
  }
  computed: {
    personstasks () {
      return this.$store.state.personstasks
    },
    tasks () {
      return this.$store.state.tasks
    },
    filteredTasks () {
      return this.tasks.filter(task => this.filterCompleted(task) && this.filterAssigned(task))
    }
  },
  methods: {
    filterCompleted(task) {
      return this.completed === 'all' || (this.completed === 'completed' && task.completed) || (this.completed === 'uncompleted' && !task.completed)
    },
    filterAssigned(task) {
      return this.assigned === 'all'
        || (this.assigned === 'assigned' && this.personstasks.filter(record => record.taskid === task.id).length)
        || (this.assigned === 'unassigned' && !this.personstasks.filter(record => record.taskid === task.id).length)
    }
  }
}

</script>