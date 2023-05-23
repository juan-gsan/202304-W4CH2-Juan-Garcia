export default function FormData() {
  return (
    <form aria-label="form">
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" required />
      </div>
      <div>
        <label htmlFor="lastname">Last Name</label>
        <input type="text" name="lastname" id="lastname" />
      </div>
      <div>
        <label htmlFor="birthdate">Birth Date</label>
        <input type="date" name="birthdate" id="birthdate" />
      </div>
      <div>
        <fieldset>
          <legend>Select a gender:</legend>
          <div>
            <input type="radio" id="male" name="gender" value="male" />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female">Female</label>
          </div>
          <div>
            <input type="radio" id="other" name="gender" value="other" />
            <label htmlFor="other">Other</label>
          </div>
          <div>
            <input
              type="radio"
              id="nonmentioned"
              name="gender"
              value="nonmentioned"
            />
            <label htmlFor="nonmentioned">Prefer not to mention</label>
          </div>
        </fieldset>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <fieldset>
          <div>
            <label>
              <input type="checkbox" id="newsletter" value="newsletter" />
              Do you wish to receive our newsletter?
            </label>
          </div>
        </fieldset>
      </div>
      <button type="submit">Next</button>
    </form>
  );
}
