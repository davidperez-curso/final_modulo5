<template>
    <b-container fluid>
        <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
            <template #header>Evaluación Módulo 5</template>

            <template #lead>
            Trabajo final Módulo 5
            </template>

            <hr class="my-4">

            <p>
            En esta aplicación se utilizó Vue CLI, Framework BootstrapVue, Componentes Vue, Vuex Store y Pruebas unitarias Jest.
            </p>
        </b-jumbotron>
        <InputProduct />
        <ListProduct class="my-5"/>
    </b-container>
</template>

<script>
import InputProduct from '@/components/InputProduct.vue'
import ListProduct from '@/components/ListProduct.vue'

export default {
    name: 'Home',
    components: {
        InputProduct,
        ListProduct
    }
}
</script>

<style>

</style>