import React from 'react'
import { collection } from 'firebase/firestore';
import firebase from '../utils/firebase'

function Topics() {
    React.useEffect(() => {
        firebase
        .firestore()
        .collection("topics")
        .get()
        .then((collectionSnapshot) => { 
            const data = collectionSnapshot.docs.map((doc) => { 
                return doc.data();
            });
                console.log(data)
        });
    }, []);
    return "Hello, Topics";
}

export default Topics;