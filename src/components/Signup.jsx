import React from 'react'

const Signup = () => {
  return (
    <div class="container">
    <div class="signup-box">
        <h2>Sign Up</h2>
        <form action="#" method="post">
       
            <div class="input-group">
                <label for="fullname">Full Name</label>
                <input type="text" />
            </div>
          
            <div class="input-group">
                <label for="email">Email</label>
                <input type="text" />
            </div>
            <div class="input-group">
                <label for="password">Password</label>
                <input type="text" />

            </div>
            <div class="input-group">
                <label for="confirm-password">Confirm Password</label>
                <input type="text" />

            </div>
            <div class="actions">
                <button type="submit" class="btn">Sign Up</button>
                <input type="text" />

            </div>
            <div class="links">
                <p>Already have an account? <a href="#">Sign In</a></p>
                
            </div>
        </form>
    </div>
</div>
  )
}

export default Signup
