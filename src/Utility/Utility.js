// import { firestore, serverTimestamp, storage } from './../../Firebase/Firebase';
// import { firestore, serverTimestamp, storage } from './Firebase/Firebase';
import { firestore, serverTimestamp, storage } from './../Firebase/Firebase';
import { v4 as uuid } from 'uuid'

export var uploadImages = async (productObj) => {
    try {
        //1 - send file t storage and get diwnloadable url
        var imageRef = storage.child(`prducts/img-${uuid()}`)
        var fileListener = imageRef.put(productObj.CoverPhoto)
        //FileListener.on()
        //event_type
        //cb - tells the progress
        //cb - tells the error
        //cb - on completion give the URL
        fileListener.on(
            "state_changed",
            (snapshot) => {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
            },
            (error) => {
                console.log(error)
            },
            async () => {
                var downloadURL = await imageRef.getDownloadURL()
                //2 - modify productObj with coverPhoto url and createdAt
                productObj.createdAt = serverTimestamp()
                productObj.CoverPhoto = downloadURL
                productObj.cost = parseFloat(productObj.cost)
                productObj.quantity = parseInt(productObj.quantity)
                // console.log(productObj)
                //3 - create document in firestore
                // await firestore.collection("products").add(productObj)
            }
        );
        return productObj
    }
    catch (error) {
        console.log(error)
    }
}
