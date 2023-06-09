import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [loading, setLoading] = useState(false);

  const password = React.useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    setLoading(true);
    // Simulate API call or form submission
    setTimeout(() => {
      setLoading(false);
      console.log(data); // You can replace this with your actual registration logic
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-1/3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl mb-6">Register</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email format',
              },
            })}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters long',
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="passwordConfirmation">
            Confirm Password
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="passwordConfirmation"
            id="passwordConfirmation"
            placeholder="Confirm your password"
            {...register('passwordConfirmation', {
              validate: (value) =>
                value === password.current || "Passwords do not match",
            })}
          />
          {errors.passwordConfirmation && (
            <p className="text-red-500 text-xs mt-1">
              {errors.passwordConfirmation.message}
            </p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            type="submit"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Register'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
