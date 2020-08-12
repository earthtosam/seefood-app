import React from 'react';
import { db, storageRef } from './firebase.js';

function databaseTest() {
    /*Firebase test block - START*/

    /*EXAMPLE ONE: THIS QUERIES THE ENTIRE DATABASE*/
    db.collection("restaurants")
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            const dataID = querySnapshot.docs.map(doc => doc.id);
            //console.log(data);
            //console.log(dataID); //STORE DOCUMENT ID's
        })
    /*END OF EXMAPLE ONE*/

    /*EXAMPLE TWO: QUERY FOR CATEGORIES FOR A SINGLE RESTAURANT
        Requirements--> Document ID for that restaurant
        This example uses googie grill*/
    db.collection("restaurants").doc("9khcg5d96JQOdj06Vm4v").collection("categories").get()
        .then(response => {
            response.forEach(document => {
                //console.log(document.data());
            })
        })
    /*END OF EXMAPLE TWO*/

    /*EXAMPLE THREE: QUERY BY PARAM
        in this example, it's city = Salinas*/
    db.collection("restaurants").where("city", "==", "Salinas").get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                //console.log(doc.id, "==>", doc.data());
            })
        })
    /*END OF EXAMPLE THREE*/









    /*Firebase test block - END*/


    return (null);
}

export default databaseTest;