import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet';

function AddItem() {
    const [submitted, setSubmitted] = useState(false);
    const { register, handleSubmit, watch, reset, formState: { errors }, setValue } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            title: '',
            family: ''
        }
    });

    // using 'watch'
    const firstName = watch("firstName");
    const lastName = watch("lastName");
    const fullName = watch("fullName");
    const title = watch("title");
    const family = watch("family");

    
    // method to show data on submit
    const submitForm = (data) => {
        console.log("Form Successfully Submitted");
        setSubmitted(true);
        console.log(data);
        // Reset the form after submission
        reset();
    }

    return (
        <section className="form-section">
            <Helmet>
                <title>Add New Character</title>
            </Helmet>
            <div className="backsplash-img"></div>
            <div className="main">
                <span className={submitted ? "form-submitted" : "not-submitted"}>Form Submitted!</span>
                <h2>Add a New Character</h2>
                <div className="form-container">
                    <form onSubmit={handleSubmit(submitForm)} autoComplete="off">
                        <input 
                            {...register("firstName", {
                                required: "This field is required.", 
                                minLength: {
                                    value: 2,
                                    message: "First Name must have at least 2 characters"
                                }
                            })} 
                            placeholder="First Name"
                            autoComplete="off"
                            aria-invalid={errors.firstName ? "true" : "false"} 
                            className={errors.firstName ? 'invalid' : watch("firstName") ? 'valid' : ''}
                        />
                        <p className="aria-invalid">{errors.firstName ? errors.firstName.message : ""}</p>
                    
                        <input 
                            {...register("lastName", {
                                required: "This field is required.", 
                                minLength: {
                                    value: 2,
                                    message: "Last Name must have at least 2 characters"
                                }
                            })} 
                            placeholder="Last Name"
                            autoComplete="off"
                            aria-invalid={errors.lastName ? "true" : "false"} 
                            className={errors.lastName ? 'invalid' : watch("lastName") ? 'valid' : ''}
                        />
                        <p className="aria-invalid">{errors.lastName ? errors.lastName.message : ""}</p>

                        <input 
                            {...register("title", {
                                required: "This field is required.", 
                                minLength: {
                                    value: 2,
                                    message: "Title must have at least 2 characters"
                                }
                            })} 
                            placeholder="Title"
                            autoComplete="off"
                            aria-invalid={errors.title ? "true" : "false"} 
                            className={errors.title ? 'invalid' : watch("title") ? 'valid' : ''}
                        />
                        <p className="aria-invalid">{errors.title ? errors.title.message : ""}</p>

                        <input 
                            {...register("family", {
                                required: "This field is required.", 
                                minLength: {
                                    value: 2,
                                    message: "Family must have at least 2 characters"
                                }
                            })} 
                            placeholder="Family"
                            autoComplete="off"
                            aria-invalid={errors.family ? "true" : "false"} 
                            className={errors.family ? 'invalid' : watch("family") ? 'valid' : ''}
                        />
                        <p className="aria-invalid">{errors.family ? errors.family.message : ""}</p>                        
                        
                        <input type="submit"/>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default AddItem