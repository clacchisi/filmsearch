<template>
    <div>
        <h1>Study component</h1>
        <p>

            {{ id }}
        </p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'StudyComp',
    props: {
    id: Number,
  },
})
</script>
