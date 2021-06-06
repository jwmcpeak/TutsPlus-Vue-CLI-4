//const url = process.env.NODE_ENV === 'development' ? './guitars.json' : './guitars-list';
const url = process.env.VUE_APP_DATA_URL;


export default {
    install(app, options) {
        app.config.globalProperties.$dataUrl = url;
    }
}