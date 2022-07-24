import React from "react";

const Login = () => {
  return (
    <div class="flex h-screen">
      <div className="w-3/12 pt-12">
        <p className="text-2xl text-center text-[#0096C7] tracking-widest uppercase">
          Globetech
        </p>
        <p className="text-2xl text-[#0096C7] tracking-widest uppercase text-center">
          Company Limited
        </p>
        <p className="text-white text-sm mt-6 text-center">
          Make yourself digitalized & more effecient
        </p>
      </div>
      <div className="bg-[#C0CDD3] w-9/12">
        <div className="mt-12 py-8 bg-white w-96 mx-auto grid place-content-center">
          <p className="text-3xl text-center">Welcome </p>
          <p className="text-sm pb-4 text-center">Sign in to your account</p>
          <input
            type="email"
            placeholder="Email"
            class="input input-bordered border-[#8C8383] w-full max-w-xs"
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            class="input input-bordered border-[#8C8383] w-full max-w-xs"
          />
          <br />
          <button class="btn btn-wide text-white bg-[#0096C7] hover:bg-[#8fbac9] border-none">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
