import {
  doc,
  setDoc,
  Timestamp,
  updateDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import uuid from "react-uuid";
import { db } from "../firebase";

export const AddData = async (data, tdoc) => {
  const Id = uuid();
  const newData = {
    ...data,
    created: Timestamp.fromDate(new Date()),
    type: "post",
    Id,
  };
  try {
    await setDoc(doc(db, tdoc, Id), newData);
    return newData;
  } catch (e) {
    throw e;
  }
};

export const UpdateData = async (data, tdoc, Id) => {
  const newData = {
    ...data,
    created: Timestamp.fromDate(new Date()),
  };
  const docRef = doc(db, tdoc, Id);
  try {
    await updateDoc(docRef, newData);
    return newData;
  } catch (e) {
    throw e;
  }
};

export const DeleteData = async (tdoc, Id) => {
  await deleteDoc(doc(db, tdoc, Id));
};

export const ReadData = async (config) => {
  try {
    const querySnapshot = await getDocs(config);
    const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
    const chartData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return [lastVisible, chartData];
  } catch (e) {
    console.error(e);
  }
};
