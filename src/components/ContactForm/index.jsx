import React, { useState } from "react"
import PropTypes from "prop-types"

import ContentWrapper from "@components/ContentWrapper"
import FancyHeading from "@components/FancyHeading"
import Input from "@components/Input"
import Textarea from "@components/Textarea"
import Button from "@components/Button"

import styles from "./contact-form.module.sass"

const ContactForm = ({ heading, description }) => {
  const formElements = [
    [
      {
        name: "firstName",
        placeholder: "First Name*",
        type: "text",
      },
      {
        name: "lastName",
        placeholder: "Last Name*",
        type: "text",
      },
    ],
    {
      name: "email",
      placeholder: "Email Address*",
      type: "email",
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
        type: "text",
      },
    ],
    {
      name: "description",
      placeholder: "Project Description*",
      type: "textarea",
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
    const inputTypes = ["text", "email", "tel"]

    if (inputTypes.includes(elem.type)) {
      if (elem.variant === "half-width") {
      } else {
        return (
          <Input
            key={elem.name}
            {...elem}
            value={state[elem.name]}
            onChange={handleChange}
          />
        )
      }
    } else {
      return (
        <Textarea
          key={elem.name}
          {...elem}
          value={state[elem.name]}
          onChange={handleChange}
        />
      )
    }
  }

  const mappedFormElements = formElements =>
    formElements.map(elem => {
      if (Array.isArray(elem)) {
        return (
          <div
            className={styles.gridRow}
            style={{ gridTemplateColumns: `repeat(${elem.length}, 1fr)` }}
          >
            {elem.map(item => getElem(item))}
          </div>
        )
      }

      return getElem(elem)
    })

  const [state, setValue] = useState(
    formElements.reduce((final, elem) => {
      final[elem.name] = ""

      return final
    }, {})
  )

  const handleChange = e => {
    const { name, value } = e.target
    setValue(state => ({ ...state, [name]: value }))
  }

  return (
    <ContentWrapper withVerticalPadding>
      <FancyHeading>{heading}</FancyHeading>
      <p>{description}</p>
      <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
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
