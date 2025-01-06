import { getFirestore, doc, getDocs, collection, getDoc, query, where, addDoc, updateDoc } from "firebase/firestore";
import app from "./init"
import bcrypt from "bcrypt";

const firestore = getFirestore(app);

export async function retriveData(collectionName: string) {
    const snapshot = await getDocs(collection(firestore, collectionName));
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    return data
}

export async function retriveDataById(collectionName: string, id: string) {
    const snapshot = await getDoc(doc(firestore, collectionName, id));
    const data = snapshot.data();
    return data;
}

export async function login(data: { email: string }) {
    const q = query(
        collection(firestore, 'users'),
        where('email', '==', data.email)
    );
    const snapshot = await getDocs(q);
    const user = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }))
    
    if (user) {
        return user[0];
    } else {
       return null; 
    }
}

export async function register(data: { email: string, fullname: string, password: string, role?: string, provider: string }) {
    const q = query(collection(firestore, "users"), where("email", "==", data.email));
    const snapshot = await getDocs(q);
    const user: any = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    if (user.length > 0) {
        return { code: 400, status: false, message: "Email already exists"}
    } else {
        data.password = await bcrypt.hash(data.password, 10);
        data.role = "member",
        data.provider = "credentials"
        try {
            await addDoc(collection(firestore, "users"), data)
            return {
                code: 201,
                status: true,
                message: "Account created!"
            }
        } catch (error) {
            return {
                code: 400,
                status: false,
                message: "Register failed"
            }
        }
    }
}

export async function loginWithGoogle(data: any, callback: any) {
    const q = query(collection(firestore, "users"), where("email", "==", data.email));
    const snapshot = await getDocs(q);
    const user: any = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    if (user.length > 0) {
        data.role = user[0].role;
        await updateDoc(doc(firestore, 'users', user[0].id), data).then(() => {
           callback({ code: 200, status: true, message: "Success", data: data });
        });
    } else {
       data.role = "member";
       await addDoc(collection(firestore, "users"), data).then(() => {
            callback({ code: 200, status: true, message: "Success", data: data });
       })
    }
}