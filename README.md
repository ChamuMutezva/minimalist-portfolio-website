# Frontend Mentor - Minimalist portfolio website solution

This is a solution to the [Minimalist portfolio website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/minimalist-portfolio-website-LMy-ZRyiE). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Click the "About Me" call-to-action on the homepage and have the screen scroll down to the next section
- Receive an error message when the contact form is submitted if:
  - The `Name`, `Email Address` or `Message` fields are empty should show "This field is required"
  - The `Email Address` is not formatted correctly should show "Please use a valid email address"

### Screenshot

![](./screenshot.jpg)


### Links

- Frontend Mentor url: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [minimalist-portfolio-website](https://minimalist-portfolio-website.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [SASS](https://sass-lang.com/) - CSS extension language

### What I learned

The form has 3 input elements that has to be filled with data and validated. The easier approach is to have a dedicated onChange event handler for each input. In this case that means having 3 repeated code of the onchange. If the form has 10 inputs then that means having 10 onchange event handlers. The second option that i eventually used envolves creating an object to host all the inputs values

```JS
 const initState = {
        fullName: '',
        email: '',
        message: '',
        touched: {
            fullName: false,
            email: false,
            message: false,
        }
}

 const [formData, setFormData] = useState(initState)

  const onChange = (e) => {
        const { name, value } = e.target          
        setFormData({ ...formData, [name]: value })
 }

 const onBlur = (e) => {
        const { name } = e.target
        setFormData({ ...formData, touched: { ...formData.touched, [name]: true } })
    }

```
Then using `useState` hook to capture the values.
Destructuring `e.target` will among other details provide the following data
```JS
<input id="email" class="inputs" type="email" name="email" 
    placeholder="ckmutezva@gmail.com" required="" value="">
{
​   name: "email"​​
   value: 
}
```
Take note that on `setFormData({ ...formData, [name]: value })`, `name`is written enclosed with brackets `[name]`, while the `value`is not. 

```html
 <input type="text"
                        className="inputs"
                        id="fullname"
                        name="fullName"
                        placeholder="Chamu mutezva"
                        value={fullName}
                        onChange={onChange}
                        onBlur={onBlur}
                        required
                    />
```

### Useful resources

- https://app.pluralsight.com/guides/react-context-api
- [Form with react hooks and destructuring example](https://github.com/Asabeneh/30-Days-Of-React/blob/master/22_Form_Using_Hooks/22_form_using_hooks.md)


## Author

- Website - [Chamu Mutezva](https://github.com/ChamuMutezva)
- Frontend Mentor - [@ChamuMutezva](https://www.frontendmentor.io/profile/ChamuMutezva)
- Twitter - [@ChamuMutezva](https://twitter.com/ChamuMutezva)

## Acknowledgments


