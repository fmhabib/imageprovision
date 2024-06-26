import React, { useState } from "react";
import InputBox from "./input";
import Modal from './modal';
import Button from "./button";
import ReCAPTCHA from "react-google-recaptcha";

interface IContactForm {
    name: string;
    organisationName: string;
    email: string;
    phone: string;
    message: string;
    token?: string;
    [key: string]: string | undefined;
}


const ContactForm = ({ bgWhite }: { bgWhite: boolean }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [errors, setErrors] = useState<Partial<IContactForm>>({});
    const [formData, setFormData] = useState<IContactForm>({
        name: "",
        organisationName: "",
        email: "",
        phone: "",
        message: "",
        token: ""
    });

    const handleCancel = () => {
        setShowPopup(!showPopup);
    };

    const inputData = [
        {
            name: "name",
            placeholder: 'Name',
            type: 'text',
        },
        {
            name: "email",
            placeholder: 'Email Address',
            type: 'email',
        },
        {
            name: "phone",
            placeholder: 'Contact Number',
            type: 'number',
        },
        {
            name: "city",
            placeholder: 'City',
            type: 'text',
        }
    ];

    const message = {
        name: "message",
        placeholder: 'Message',
        type: 'text',
        textarea: true
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            setShowPopup(true);
            console.log(formData);
            console.log("Form submitted successfully!");
            setFormData({
                name: "",
                organisationName: "",
                email: "",
                phone: "",
                message: ""
            });
        } else {
            console.log("Form validation failed!");
        }
    };

    function handleCaptcha(token: string | null | undefined) {
        setFormData({
            ...formData,
            token: token !== undefined && token !== null ? token : ''
        } as IContactForm);
    }


    const validateForm = () => {
        let isValid = true;
        const newErrors: Partial<IContactForm> = {};

        if (!formData.name) {
            isValid = false;
            newErrors.name = "Please enter your name";
        }

        if (!formData.city) {
            isValid = false;
            newErrors.city = "Please enter your city";
        }

        if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
            isValid = false;
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.phone || !/^[6-9]\d{9}$/.test(formData.phone)) {
            isValid = false;
            newErrors.phone = "Please enter a valid phone number";
        }

        if (!formData.message) {
            isValid = false;
            newErrors.message = "Please enter your message";
        }

        if (!formData.token) {
            isValid = false;
            newErrors.captcha = "Please complete the captcha";
        }

        setErrors(newErrors);
        return isValid;
    };


    return (
        <div className="w-full font-montserrat overflow-hidden">
            {showPopup && (
                <Modal
                    onCancel={handleCancel}
                    title="Form Submitted Successfully!"
                    content="Thank you for submitting the form. We will reach out to you shortly."
                    btnText="Close"
                />
            )}

            <div className="relative grid md:grid-cols-2 gap-8">
                {inputData.map((item, index) => (
                    <InputBox
                        key={index}
                        name={item.name}
                        placeholder={item.placeholder}
                        type={item.type}
                        value={formData[item.name]}
                        handleChange={handleChange}
                        error={errors[item.name]}
                        bgWhite={bgWhite}
                    />
                ))}
            </div>

            <div className="pt-4">
                <InputBox
                    name={message.name}
                    placeholder={message.placeholder}
                    type={message.type}
                    textarea={message.textarea}
                    value={formData[message.name] || ""}
                    handleChange={handleChange}
                    error={errors[message.name] || ""}
                    bgWhite={bgWhite}

                /></div>

            <div className="pt-4 pb-6">
                <ReCAPTCHA sitekey={"6Le_bcYpAAAAAMuRtrHpzR1bSNMsBbER9_MF4k9N"} onChange={handleCaptcha} />
                {errors?.captcha && <p className="absolute mt-1 text-xs text-red-500">{errors?.captcha}</p>}

            </div>

            <Button text={"Submit"} onClick={onSubmit} />
        </div>
    );
}

export default ContactForm;

