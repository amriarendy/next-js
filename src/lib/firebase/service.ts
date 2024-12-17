import { getFirestore, getDoc, getDocs, collection, doc, query, where, addDoc } from "firebase/firestore";
import app from "./init";
import bcrypt from "bcrypt";

const firestore = getFirestore(app);

export async function retriveData(collectionName: string) {
    const snapshot = await getDocs(collection(firestore, collectionName));

    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    return data;
}

export async function retriveDataById(collectionName: string, id: string) {
    const snapshot = await getDoc(doc(firestore, collectionName, id));
    const data = snapshot.data();
    return data;
}

export async function signUp(userData: { email: string; fullname: string; password: string, role?: string}, callback: Function) {
    const q = query(collection(firestore, "users"), where("email", "==", userData.email));
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }))
    if (data.length > 0) {
        callback({ code: 404, status: false, message: "Email already exists"})
    } else {
        userData.password = await bcrypt.hash(userData.password, 10);
        userData.role = "member";
        await addDoc(collection(firestore, "users"), userData).then(() => {
            callback({ code: 201, status: true, message: "Account created!"})
        }).catch((error) => {
            callback({
                code: 400,
                status: false,
                message: error
            })
        })
    }
}