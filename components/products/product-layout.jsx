'use client'

import { useState } from "react"
import Button from "../FormControls/button"
import Modal from "../Modal"
import { productFormControls } from "@/utils/config"

const initialFormData = {
    name: '',
    location: '',
    visitors: 0,
    sales: 0,
    month: '',
}

export default function ProductLayout({children}) {
    const [ showModal, setShowModal ] = useState(false);
    const [ formData, setFormData ] = useState(initialFormData);
    return (
        <div className="">
            <Button onClick={() => setShowModal(true)} text={"Add New Product"} />
            {children}
            <Modal show={showModal} setShow={setShowModal} formData={formData} setFormData={setFormData} formControls={productFormControls} />
        </div>
    )
}