import React from 'react'

const SIgnin = () => {
  return (
    <div>
          <div class="signin-container">
        <div class="signin-box">
            <h2>Sign In</h2>
            <form action="#" method="post">
                <div class="input-group">
                    <label for="email">Email</label>
                    <input type="text" />
                </div>
                <div class="input-group">
                    <label for="password">Password</label>
                    <input type="text" />

                </div>
                <div class="actions">
                    <button type="submit" class="btn">Sign In</button>
                </div>
                <div class="links">
                    <a href="#">Forgot Password?</a> | 
                    <a href="#">Create an account</a>
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default SIgnin
