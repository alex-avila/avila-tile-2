import React from "react"
import { useForm } from "react-hook-form";
import PropTypes from "prop-types"

import ContentWrapper from "@components/ContentWrapper"
import FancyHeading from "@components/FancyHeading"
import Input from "@components/Input"
import Textarea from "@components/Textarea"
import Button from "@components/Button"

import styles from "./contact-form.module.sass"

const encode = (data) => Object.entries(data)
  .map(([key, val]) => encodeURIComponent(key) + "=" + encodeURIComponent(val))
  .join("&");

const ContactForm = ({ heading, description }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));
  };

  const formElements = [
    [
      {
        name: "firstName",
        placeholder: "First Name*",
        type: "text",
        config: {required: true},
      },
      {
        name: "lastName",
        placeholder: "Last Name*",
        type: "text",
        config: {required: true},
      },
    ],
    {
      name: "email",
      placeholder: "Email Address*",
      type: "email",
      config: {
        required: true,
        pattern: {
          value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          message: "Invalid format"
        }
      },
    },
    [
      {
        name: "phone",
        placeholder: "Phone",
        type: "text",
      },
      {
        name: "zip",
        placeholder: "Zip Code*",
        type: "number",
        config: {
          required: true,
          pattern: {
            value: /^\d{5}$|^\d{5}-\d{4}$/,
            message: 'Invalid format'
          }
        }
      },
    ],
    {
      name: "description",
      placeholder: "Project Description*",
      type: "textarea",
      config: {required: true}
    },
    {
      name: "timeline",
      placeholder: "When are you looking to have your project finished?",
      type: "textarea",
    },
    {
      name: "howHear",
      placeholder: "How did you hear about us?",
      type: "text",
    },
  ]

  const getElem = elem => {
    const inputTypes = ["text", "email", "tel", "number"]
    const elemPropNames = ['name', 'placeholder', 'type']
    const elemProps = Object.fromEntries(Object.entries(elem).filter(([key, val]) => (elemPropNames.includes(key) && [key, val])))

    if (inputTypes.includes(elem.type)) {
      if (elem.variant !== "half-width") {
        return (
          <div key={elem.name}>
            <Input
              {...elemProps}
              isInvalid={errors[elem.name]}
              ref={register({ ...elem.config })}
            />
          </div>
        )
      }
    } else {
      return (
        <div key={elem.name}>
          <Textarea
            {...elem}
            isInvalid={errors[elem.name]}
            ref={register({ ...elem.config })}
          />
        </div>
      )
    }
  }

  const mappedFormElements = formElements =>
    formElements.map((elem, i) => {
      if (Array.isArray(elem)) {
        return (
          <div
            key={i}
            className={styles.gridRow}
            style={{ gridTemplateColumns: `repeat(${elem.length}, 1fr)` }}
          >
            {elem.map(item => getElem(item))}
          </div>
        )
      }

      return getElem(elem)
    })

  return (
    <ContentWrapper withVerticalPadding>
      <FancyHeading>{heading}</FancyHeading>
      <p>{description}</p>
      <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" name="form-name" value="contact" />
        <p style={{ display: 'none' }}>
          <label>Don’t fill this out if you're human: <input name="bot-field" autoComplete="off" tabIndex="-1"/></label>
        </p>
        {mappedFormElements(formElements)}
        <Button type="submit">Submit</Button>
      </form>
    </ContentWrapper>
  )
}

ContactForm.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
}

export default ContactForm
