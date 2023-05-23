  return (
    <form aria-label="form">
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" required />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" required />
      </div>
      <div>
        <label htmlFor="password">Repeat Password</label>
        <input type="password" name="password" id="password" required />
      </div>
      <div>
        <label htmlFor="account">Account type:</label>

        <select name="account" id="account">
          <option value="">--Please choose an option--</option>
          <option value="personal">Personal</option>
          <option value="pro">Pro</option>
          <option value="business">Business</option>
        </select>
      </div>
      <button type="submit">Next</button>
    </form>
  );
}
