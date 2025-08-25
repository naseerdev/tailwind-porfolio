<template>
    <div class="bg-background-light py-6 px-8 my-4 text-label-info rounded-sm shadow-lg event">
        <span class="text-label-info text-sm " v-if="parentData.startDate || parentData.endDate">
            <template v-if="parentData.startDate === 'Unknown'">
                {{parentData.endDate}}
            </template>
            <template v-else-if="parentData.startDate && parentData.endDate">
                {{parentData.startDate}} - {{parentData.endDate}}
            </template>
            <template v-else-if="parentData.startDate">
                {{parentData.startDate}}
            </template>
            <template v-else-if="parentData.endDate">
                {{parentData.endDate}}
            </template>
        </span>
        <br v-if="parentData.startDate || parentData.endDate">
        <span class="text-primary-light text-xl "><b>{{parentData.name}}</b></span><br>
        <span class="text-label-subtitle text-base "><b>{{parentData.role}}</b></span>
        <p class="text-label-info text-lg ">{{parentData.description}}</p>
        <span class="text-label-subtitle text-sm "><i>{{parentData.type}}</i></span>
         <div v-for="item in parentData.roles" v-bind:key="item.name" class="m-1">
            <a :href="item.link" class="text-sm text-label-info">
               <span class="text-label-subtitle"> ➔ </span> <span>{{item.description}}</span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "event",
	props: {
		parentData: Object,
		index: Number
	}
}
</script>

<style scoped>
.event{
    animation: mouseOut 0.3s ease-in;
}
.event:hover{
    animation: mouseOver 0.3s ease-in forwards;
}
</style>