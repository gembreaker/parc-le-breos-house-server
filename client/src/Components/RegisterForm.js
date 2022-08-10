const RegisterForm = ({
    handleSubmit, 
    first_name, 
    setFname, 
    last_name, 
    setLname, 
    email, 
    setEmail, 
    password, 
    setPassword,
    phone_number, 
    setPNumber, 
}) => (
    
    <form onSubmit={handleSubmit} className="mt-3">
            
        <div className="form-group mb-3">
            <label className="form-label">First name</label>
            <input 
                type="text"
                className="form-control"
                placeholder="Enter first name"
                value={first_name}
                onChange={(e) => setFname(e.target.value)} 
            />
        </div>

        <div className="form-group mb-3">
            <label className="form-label">Last name</label>
            <input 
                type="text"
                className="form-control"
                placeholder="Enter last name"
                value={last_name}
                onChange={(e) => setLname(e.target.value)} 
            />
        </div>

        <div className="form-group mb-3">
            <label className="form-label">Email</label>
            <input 
                type="text"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
            />
        </div>

        <div className="form-group mb-3">
            <label className="form-label">Password</label>
            <input 
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
            />
        </div>

        <div className="form-group mb-3">
            <label className="form-label">Phone Number</label>
            <input 
                type="text"
                className="form-control"
                placeholder="Enter phone number"
                value={phone_number}
                onChange={(e) => setPNumber(e.target.value)} 
            />
        </div>
        
        <button disabled={!first_name || !last_name || !email || !password || !phone_number} className="btn btn-primary" type="submit">
            Submit
        </button>
    </form>
)

export default RegisterForm;