"use strict";
angular.module('EmployeeApp').factory("EmployeeFactory", function($q, $http, $route){
    const dostuff = function() {
        console.log("submitted");
        $route.reload();
    };

    // const fetchDB = function(user){
    //     let notes = [];
    //     return $q( (resolve, reject) => {
    //         $http.get(`db`)
    //         .then((itemObject) => {
    //             notes = itemObject.data;
    //             resolve(notes);
    //             })
    //             .catch((error) => {
    //                 reject(error);
    //             });
    //     });
    // };

    // const deleteNote = function(id){
    //     $(".progress").css("visibility","visible");
    //     return $q( (resolve, reject) => {
    //         $http.delete(`${firebaseInfo.databaseURL}/notes/${id}.json`)
    //         .then((response) => {
    //             resolve(response);
    //         })
    //         .catch((error) => {
    //             reject(error);
    //         });
    //     });
    // };

    // const addNote = (note) =>{
    //     if (firebase.auth().currentUser) {
    //         $(".progress").css("visibility","visible");
    //         let newnote = JSON.stringify(note);
    //         return $q( (resolve, reject) => {
    //             $http.post(`${firebaseInfo.databaseURL}/notes.json`,newnote)
    //             .then((response) => {

    //                 resolve(response);
    //                 })
    //                 .catch((error) => {
    //                     reject(error);
    //                 });
    //         });
    //     }
    // };

    // const editNote = function(id, obj) {
    //     $(".progress").css("visibility","visible");
    //     return $q((resolve, reject) => {
    //         let newObj = JSON.stringify(obj);
    //         $http.patch(`${firebaseInfo.databaseURL}/notes/${id}.json`, newObj)
    //         .then((data) => {
    //             resolve(data);
    //         })
    //         .catch((error) => {
    //             reject(error);
    //         });
    //     });
    // };
    // return {fetchDB, addNote,deleteNote,editNote};
    return {dostuff};
});