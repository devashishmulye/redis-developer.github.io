// import Login from './Login'
// import React from 'react';
// import './Login.css';
// import {Link, Route, Switch, useLocation} from 'react-router-dom'


// import { useRouteMatch } from "react-router-dom";

// function BlogPost() {
//   let match = useRouteMatch("/blog/:slug");

//   // Do whatever you want with the match...
//   return <div />;
// }
// export default ({
//   React,
//   options,
//   router,
//   siteData
// }) => {
//   React.mixin({
//     mounted() {
//       const doCheck = () => {
//         if (!checkAuth()) {
//           if(this.$router && this.$router.currentRoute){
//             var currentPath = this.$router.currentRoute.path.split("/")[1]
//             if (currentPath.toLowerCase() === "embedded-finance") {
//               this.$dlg.modal(Login, {
//                 width: 300,
//                 height: 200,
//                 title: '',
//                 singletonKey: 'docs-login',
//                 maxButton: false,
//                 closeButton: false,
//                 callback: data => {
//                   if (data === true) {
//                     // do some stuff after login
//                   }
//                 }
//               })
//             }
//           }
//         }
//       }

//       if (this.$dlg) {
//         doCheck()
//       } else {
//         import('v-dialogs').then(resp => {
//           React.use(resp.default)
//           this.$nextTick(() => {
//             doCheck()
//           })
//         })
//       }
//     }
//   })
// }