import React, { useState, useEffect } from "react";
import styles from "./Contact.module.scss";
import { TbBrandTelegram } from "react-icons/tb";

type Status = "idle" | "sending" | "success" | "error";

const Form: React.FC = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (status === "success" || status === "error") {
      setShowToast(true);
      const timer = setTimeout(() => {
        setShowToast(false);
        setStatus("idle");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xeelolvy", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className={styles.formContainer}>
      <div className={styles.signalContainer}>
        <p className={styles.signal}>SIGNAL</p>
        <p className={styles.signalSubTitle}>
          To maintain signal integrity, contact details aren’t publicly exposed.
          Please initiate connection below.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label}>full name</label>
          <input
            type="text"
            name="name"
            className={styles.inputValue}
            placeholder="e.g. John Doe"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>email address</label>
          <input
            type="email"
            name="email"
            className={styles.inputValue}
            placeholder="e.g. john@example.com"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Message</label>
          <textarea
            name="message"
            className={styles.inputValue}
            rows={5}
            placeholder="Tell me about the new opportunity"
            required
          />
        </div>

        <button
          type="submit"
          className={styles.submitBtn}
          disabled={status === "sending"}
        >
          {status === "sending" ? "initiating..." : "initiate connection"}
          <TbBrandTelegram size={30} />
        </button>

        <p className={styles.formFooter}>typically responds within 24 hours</p>
      </form>

      {showToast && (
        <div
          className={`${styles.toast} ${
            status === "success" ? styles.toastSuccess : styles.toastError
          }`}
          role="status"
          aria-live="polite"
        >
          {status === "success" && "connection initiated successfully"}
          {status === "error" && "connection failed — network or service issue"}
        </div>
      )}
    </div>
  );
};

export default Form;
