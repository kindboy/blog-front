// import Vue, {ComponentOptions} from 'vue';

declare module '*.vue' {
    import Vue from 'vue';
    export default Vue;
}

// declare module 'vue/types/options' {
//     interface ComponentOptions<V extends Vue> {
//         middleware?: string | string[];
//     }
// }

declare var window: Window;