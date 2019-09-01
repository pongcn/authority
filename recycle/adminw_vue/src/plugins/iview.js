import Vue from 'vue'
import iView from 'iview/dist/iview';
import lang from 'iview/dist/locale/en-US'
import { locale } from 'iview/dist/iview'

Vue.use(iView);

locale(lang)


// const iviewComs = { Button, Table, Layout, Sider, Menu, MenuItem, Icon, Header } 

// const iviewRun = function () {
//     for (let key in iviewComs) {
//         let name = key
//         let value = iviewComs[key]
//         Vue.component(name, value)
//     }
// }()



import 'iview/dist/styles/iview.css'



