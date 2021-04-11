<template>
    <b-container>
        <b-row>
            <b-col cols="6"></b-col>
            <b-col cols="3"></b-col>
            <b-col cols lg="3"><h5 v-if="productos.length > 0"
            class="text-right">¿Cancelado?</h5></b-col>

        </b-row>
        <b-list-group v-for="(item, index) in productos" :key="index"
        horizontal="md">
            <b-list-group-item class="col-lg-6 ">
                {{item.nombre}}
            </b-list-group-item>

            <b-list-group-item class="col-lg-3 text-lg-center">
                $ {{item.monto}}
            </b-list-group-item>

            <b-list-group-item class="col-lg-3 text-right">
                <b-button @click="changeProduct(index)" 
                :variant="item.estado ? 'success' : 'danger'" class="mx-1 p-1">
                    <span v-if="item.estado == true" class="material-icons md-18">done</span>
                    <span v-if="item.estado == false" class="material-icons md-18">close</span>
                </b-button>
            </b-list-group-item>

        </b-list-group>

        <b-list-group class="text-right">
            <b-list-group-item class="text-danger">
                Por pagar ${{pagar}}
            </b-list-group-item>
            <b-list-group-item class="text-success">
                Pagado ${{pagado}}
            </b-list-group-item>
            <b-list-group-item class="text-primary">
                Total ${{total}}
            </b-list-group-item>
        </b-list-group>
    </b-container>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
    name: 'ListProduct',
    computed:{
        ...mapState(['productos', 'descripcion', 'total', 'pagar', 'pagado'])
    },
    methods: {
        ...mapMutations(['changeProduct'])
    }

}
</script>

<style>

</style>