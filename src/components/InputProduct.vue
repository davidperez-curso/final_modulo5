<template>
    <b-container>
        <b-row class="text-center">
            <b-col cols lg="8">
                <h5 class="mt-3 ml-1 text-lg-left">Descripción</h5>
                <b-form-input v-model="descripcion.nombre"
                type="text"></b-form-input>
            </b-col>
            <b-col cols lg="2">
                <h5 class="mt-3">Monto</h5>
                <b-form-input v-model="descripcion.monto"
                type="number"></b-form-input>
            </b-col>
            <b-col cols lg="2">
                <h5 class="mt-lg-3 text-white">¿Cancelado?</h5>
                <b-button @click="addProduct"
                variant="success">
                    Agregar
                </b-button>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
    name: 'InputProduct',
    computed: {
        ...mapState(['productos', 'descripcion'])
    },
    methods: {
        ...mapMutations(['addProduct'])
    }

}
</script>

<style>

</style>