import { useForm, type SubmitHandler } from "react-hook-form";

type Inputs = {
  fullName: string;
  exampleRequired: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("fullName")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* register your input into the hook by invoking the "register" function */}
      <div>
        <label
          htmlFor="fullName"
          className="block text-sm/6 font-medium text-gray-900 dark:text-white"
        >
          Full Name
        </label>
        <div className="mt-2">
          <input
            id="email"
            type="email"
            placeholder="eg: john doe"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-amber-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-amber-500"
            {...register("fullName")}
          />
        </div>
      </div>
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
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-amber-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-amber-500"
            {...register("fullName")}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="Subject"
          className="block text-sm/6 font-medium text-gray-900 dark:text-white"
        >
          Subject
        </label>
        <div className="mt-2">
          <input
            id="email"
            type="email"
            placeholder="eg: Having an a Pizza Party."
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-amber-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-amber-500"
            {...register("fullName")}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm/6 font-medium text-gray-900 dark:text-white"
        >
          Your Message
        </label>
        <div className="mt-2">
          <textarea
            id="email"
            rows={4}
            placeholder="eg: John is invited to Janes pizza party will have fun entertainment on February 17th 2025."
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-amber-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-amber-500"
            {...register("fullName")}
          />
        </div>
      </div>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input
        type="submit"
        className="rounded-sm bg-gray-6 px-2 py-1 text-sm font-semibold text-white shadow-xs hover:bg-gray-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-6 dark:bg-gray-5 dark:shadow-none dark:hover:bg-gray-4 dark:focus-visible:outline-gray-5 hover:cursor-pointer"
      />
    </form>
  );
}
