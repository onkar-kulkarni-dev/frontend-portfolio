import React from "react";
import styles from "./Contact.module.scss";
import { TbBrandTelegram } from "react-icons/tb";

const Form: React.FC = () => {
    return (
        <div className={styles.formContainer}>
            <form>
                <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>full name</label>
                    <input type="text" id="name" name="name" className={styles.inputValue} placeholder="e.g. John Doe" required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>email address</label>
                    <input type="email" id="email" name="email" className={styles.inputValue} placeholder="e.g. john@mail.com" required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>Message</label>
                    <textarea id="message" name="message" className={styles.inputValue} rows={5} placeholder="Tell me about the requirement" required></textarea>
                </div>
                <button type="submit" className={styles.submitBtn}>initiate connection <TbBrandTelegram size={30} /></button>
                <p className={styles.formFooter}>typically responds within 24 hours</p>
            </form>
        </div>
    );
}

export default Form;