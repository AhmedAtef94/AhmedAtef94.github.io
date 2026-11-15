//React
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import axios from "axios";
//Scss styling file
import "./ContactForm.scss";
//Components
import FormInput from "../FormInput/FormInput";

//Web3Forms (https://web3forms.com) forwards form messages to the email address
//the access key was created for. The key is safe to keep in public code.
const WEB3FORMS_ACCESS_KEY = "9ed4cd8f-8bc5-49d8-a954-01ca4f1688f2";
const FORM_URL = "https://api.web3forms.com/submit";

const ContactForm = ({ result }) => {
  //Hook forms variables
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm();
  //Function called on form submit, it sends the form data through Web3Forms
  const formSubmit = async (data) => {
    try {
      const response = await axios.post(
        FORM_URL,
        {
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New portfolio message from ${data.Name}`,
          from_name: "Portfolio Contact Form",
          name: data.Name,
          email: data.Email,
          phone: data.Phone || "Not provided",
          message: data.Message,
        },
        { headers: { Accept: "application/json" } },
      );
      result(response.data?.success === true);
    } catch (error) {
      console.error("Web3Forms request failed:", error.response?.data || error);
      result(false);
    }
  };

  return (
    <div className="contact-form">
      {/* Title */}
      <div className="contact-form__text">
        <h4>
          Have a project! <br /> Let's discuss
        </h4>
        <p>Thank you for getting in touch</p>
        <p>Kindly fill the form</p>
      </div>
      {/* Contact form */}
      <form className="contact-form__form" onSubmit={handleSubmit(formSubmit)}>
        {/* Name input */}
        <FormInput
          type="text"
          placeholder="Your full name"
          label="Name"
          validations={{ required: true }}
          register={register}
          error={errors.Name}
        />
        {/* Name validation message */}
        {errors.Name && <p className="form__error">This field is required</p>}
        {/* Email input */}
        <FormInput
          error={errors.Email}
          type="text"
          placeholder="email@address.com"
          label="Email"
          validations={{
            required: true,
            pattern:
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
          }}
          register={register}
        />
        {/* Email validation messages */}
        {errors.Email?.type === "required" && (
          <p className="form__error">This field is required</p>
        )}
        {errors.Email?.type === "pattern" && (
          <p className="form__error">Wrong email format</p>
        )}
        {/* Phone input */}
        <FormInput
          error={errors.Phone}
          type="tel"
          placeholder="01234567890"
          label="Phone"
          validations={{ minLength: 11, maxLength: 11 }}
          register={register}
        />
        {/* Phone validation message */}
        {(errors.Phone?.type === "minLength" ||
          errors.Phone?.type === "maxLength") && (
          <p className="form__error">Phone number must be 11 digits, without spaces or dashes</p>
        )}
        {/* Message input */}
        <FormInput
          error={errors.Message}
          type="textarea"
          placeholder="What do you have in mind?"
          label="Message"
          validations={{ required: true }}
          register={register}
        />
        {/* Message validation message */}
        {errors.Message && (
          <p className="form__error">This field is required</p>
        )}
        {/* Form submit button */}
        <button
          type="submit"
          className="contact-form__submit-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

//Props type validation
ContactForm.propTypes = {
  result: PropTypes.func.isRequired,
};

export default ContactForm;
