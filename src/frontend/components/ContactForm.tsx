import { useForm, type SubmitHandler } from "react-hook-form";

type Inputs = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    // Here you'd typically send the data to an API
  };

  console.log(watch("fullName")); // optional, but now it's just the name field

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Full Name */}
      <div>
        <label
          htmlFor="fullName"
          className="block text-sm/6 font-medium text-gray-900 dark:text-white"
        >
          Full Name
        </label>
        <div className="mt-2">
          <input
            id="fullName"
            type="text"
            placeholder="eg: John Doe"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-amber-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-amber-500"
            {...register("fullName", { required: "Full name is required" })}
          />
          {errors.fullName && (
            <span className="text-sm text-red-600">
              {errors.fullName.message}
            </span>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm/6 font-medium text-gray-900 dark:text-white"
        >
          Email
        </label>
        <div className="mt-2">
          <input
            id="email"
            type="email"
            placeholder="john-doe@example.com"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-amber-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-amber-500"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <span className="text-sm text-red-600">{errors.email.message}</span>
          )}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="subject"
          className="block text-sm/6 font-medium text-gray-900 dark:text-white"
        >
          Subject
        </label>
        <div className="mt-2">
          <input
            id="subject"
            type="text"
            placeholder="eg: Having a Pizza Party"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-amber-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-amber-500"
            {...register("subject", { required: "Subject is required" })}
          />
          {errors.subject && (
            <span className="text-sm text-red-600">
              {errors.subject.message}
            </span>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm/6 font-medium text-gray-900 dark:text-white"
        >
          Your Message
        </label>
        <div className="mt-2">
          <textarea
            id="message"
            rows={4}
            placeholder="eg: John is invited to Jane's pizza party..."
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-amber-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-amber-500"
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && (
            <span className="text-sm text-red-600">
              {errors.message.message}
            </span>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full text-sm/7 font-medium bg-primary-950 text-white hover:bg-primary-800 dark:bg-primary-300 dark:text-primary-950 dark:hover:bg-primary-200 px-4 py-1.5"
      >
        Submit
      </button>
    </form>
  );
}
