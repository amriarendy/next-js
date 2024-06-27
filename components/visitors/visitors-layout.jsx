'use client'

import { useState } from "react"
import Button from "../FormControls/button"
import { visiorsFormControls } from "@/utils/config";
import Modal from "../Modal";

const initialFormData = {
    visitors: 0,
    location: '',
    device: '',
    premiumUserNo: 0,
    month: '',
}

export default function VisitorsLayout({children}) {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState(initialFormData);
    async function handleAddVisitors() {
        const res = await fetch('/api/visitors/')
    }
    return (
        <div>
            <Button text={'Add Visitors Info'} />
            {children}
            <Modal show={showModal} setShow={setShowModal} formData={formData} setFormData={setFormData} formControls={visiorsFormControls} onAdd={handleAddVisitors} />
        </div>
    )
}