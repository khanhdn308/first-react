import '../App.css'

export default function SignUpForm() {

    function signUp(formData: FormData) {
        // Checkboxes can have multiple values, so we use getAll to retrieve all selected options.
        const data = Object.fromEntries(formData.entries());
        const dietaryPreferences = formData.getAll('dietary');

        const allData = {...data, dietaryPreferences};
        console.log(allData);
    }

    return (
        <section className="signup-form">
            <h1 className="signup-form__title">Sign Up</h1>
            <form className="signup-form__form" action={signUp}>
                <label className="signup-form__label" htmlFor="email">Email:</label>
                <input className="signup-form__input" type="email" id="email" name="email" placeholder="Enter your email" />

                <label className="signup-form__label" htmlFor="password">Password:</label>
                <input className="signup-form__input" type="password" id="password" name="password" placeholder="Enter your password" />

                <label className="signup-form__label" htmlFor="description">Description:</label>
                <textarea className="signup-form__textarea" id="description" name="description" placeholder="Tell us about yourself"></textarea>

                <fieldset className="signup-form__fieldset">
                    <legend className="signup-form__legend">Employment Status:</legend>
                    <label className="signup-form__option">
                        <input className="signup-form__control" type="radio" name="employment" value='student'/>
                        Student
                    </label>
                    <label className="signup-form__option">
                        <input className="signup-form__control" type="radio" name="employment" value='teacher'/>
                        Teacher
                    </label>
                    <label className="signup-form__option">
                        <input className="signup-form__control" type="radio" name="employment" value='other'/>
                        Others
                    </label>
                </fieldset>

                <fieldset className="signup-form__fieldset">
                    <legend className="signup-form__legend">Dietary Preferences:</legend>
                    <label className="signup-form__option">
                        <input className="signup-form__control" type="checkbox" name="dietary" value='vegetarian'/>
                        Vegetarian
                    </label>
                    <label className="signup-form__option">
                        <input className="signup-form__control" type="checkbox" name="dietary" value='vegan'/>
                        Vegan
                    </label>
                    <label className="signup-form__option">
                        <input className="signup-form__control" type="checkbox" name="dietary" value='non-vegetarian'/>
                        Non-Vegetarian
                    </label>
                    <label className="signup-form__option">
                        <input className="signup-form__control" type="checkbox" name="dietary" value='halal'/>
                        Halal
                    </label>
                </fieldset>

                <label className="signup-form__label" htmlFor="favColor">Your favorite color:</label>
                <select id="favColor" name="favColor" className="signup-form__select" defaultValue="">
                    <option value="" disabled>-- Choose Your Color --</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                </select>

                <button className="signup-form__submit" type="submit">Sign Up</button>
            </form>
        </section>
    )
}
