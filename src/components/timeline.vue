<template>
    <div > 
        <event
            v-for="(item, index) in filteredEvents"
			:key="index"
			:index="index"
			:parentData="item"/>
    </div>
</template>

<script>
import event from "./event.vue";
import { mapGetters } from "vuex";
export default {
    name: "timeline",
    components: { event },
    props: {
        eventType: {
            type: String,
            default: "Work" // Default to "Work" if no type is provided
        }
    },
    computed: { 
        ...mapGetters(["events"]),
        filteredEvents() {
            return this.events.filter(event => event.type === this.eventType);
        }
    },
    created: function(){},
	methods: {}
};
</script>
<style></style>