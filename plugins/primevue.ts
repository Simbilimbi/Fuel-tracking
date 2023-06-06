import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import AutoComplete from 'primevue/autocomplete';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import MultiSelect from 'primevue/multiselect';
import InputText from 'primevue/inputtext';
import Chip from 'primevue/chip';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';     //optional for column grouping
import Row from 'primevue/row';
import Dialog from 'primevue/dialog';
import SelectButton from 'primevue/selectbutton';
import Dropdown from 'primevue/dropdown';
import Chart from 'primevue/chart';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, {ripple: true});
    nuxtApp.vueApp.use(ToastService);
    nuxtApp.vueApp.component('Toast', Toast);
    nuxtApp.vueApp.component('Button', Button);
    nuxtApp.vueApp.component('InputText', InputText);
    nuxtApp.vueApp.component('MultiSelect', MultiSelect);
    nuxtApp.vueApp.component('AutoComplete', AutoComplete);
    nuxtApp.vueApp.component('Chip', Chip);
    nuxtApp.vueApp.component('DataTable', DataTable);
    nuxtApp.vueApp.component('Column', Column);
    nuxtApp.vueApp.component('ColumnGroup', ColumnGroup);
    nuxtApp.vueApp.component('Row', Row);
    nuxtApp.vueApp.component('Dialog', Dialog);
    nuxtApp.vueApp.component('SelectButton', SelectButton);
    nuxtApp.vueApp.component('Dropdown', Dropdown);
    nuxtApp.vueApp.component('Chart', Chart);

});