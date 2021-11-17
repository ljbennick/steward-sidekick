import cuid from "cuid";
import firebase from "../config/fireBase";

const db = firebase.firestore();

export function dataFromSnapshot(snapshot) {
  if (!snapshot.exists) return undefined;
  const data = snapshot.data();

  for (const prop in data) {
    if (data.hasOwnProperty(prop)) {
      if (data[prop] instanceof firebase.firestore.Timestamp) {
        data[prop] = data[prop].toDate();
      }
    }
  }

  return {
    ...data,
    id: snapshot.id,
  };
}

export function listenToRestaurantsFromFirestore() {
  return db.collection("restaurant");
}

export function listenToRestaurantFromFirestore(restaurantId) {
  return db.collection("restaurant").doc(restaurantId);
}

//TODO possibly delete this || check what can be done
export function addRestaurantToFirestore(restaurant) {
  return db.collection("restaurant").add({
    ...restaurant,
    hostedBy: "Jay",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    attendees: firebase.firestore.FieldValue.arrayUnion({
      id: cuid(),
      displayName: "Jay",
      photoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    }),
  });
}

export function updateRestaurantInFirestore(restaurant) {
  return db.collection("restaurant").doc(restaurant.id).update(restaurant);
}

export function setUserProfileData(user) {
  return db
    .collection("users")
    .doc(user.uid)
    .set({
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL || null,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
}

export function getUserProfile(userId) {
  return db.collection("users").doc(userId);
}
